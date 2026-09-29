import { siteAssets } from "../content/assets";

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

// Backend origin without the "/api" suffix, used to build uploaded image URLs
const API_ORIGIN = API_URL.replace(/\/api\/?$/, "");

const TOKEN_KEY = "conceive_admin_token";

// Fired when an authenticated request is rejected (expired/invalid token)
export const UNAUTHORIZED_EVENT = "admin:unauthorized";

export const tokenStorage = {
  get(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  },
  set(token: string) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch {
      // storage unavailable (private mode) — session will not persist
    }
  },
  clear() {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
  },
};

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  auth?: boolean;
};

export async function apiRequest<T>(
  path: string,
  { method = "GET", body, auth = false }: RequestOptions = {}
): Promise<T> {
  const isFormData = body instanceof FormData;
  const headers: Record<string, string> = {};
  if (body !== undefined && !isFormData) headers["Content-Type"] = "application/json";
  if (auth) {
    const token = tokenStorage.get();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body),
    });
  } catch {
    throw new ApiError(0, "Unable to reach the server. Please try again.");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (auth && res.status === 401) {
      tokenStorage.clear();
      window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
    }
    throw new ApiError(res.status, data.message || "Something went wrong. Please try again.");
  }
  return data as T;
}

// Uploaded images are stored as "/api/media/<id>", bundled ones as "asset:<name>";
// external images are full URLs
export const resolveMediaUrl = (url: string) => {
  if (url.startsWith("/api/")) return `${API_ORIGIN}${url}`;
  if (url.startsWith("asset:")) return siteAssets[url.slice(6)] ?? "";
  return url;
};
