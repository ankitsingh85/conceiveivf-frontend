import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { apiRequest, ApiError, tokenStorage, UNAUTHORIZED_EVENT } from "../lib/api";

export type Admin = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type AuthResponse = {
  token: string;
  admin: Admin;
};

export type SignupData = {
  name: string;
  email: string;
  password: string;
  signupKey: string;
};

type AuthContextValue = {
  admin: Admin | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore the session from a saved token on first load
  useEffect(() => {
    if (!tokenStorage.get()) {
      setLoading(false);
      return;
    }

    apiRequest<{ admin: Admin }>("/admin/auth/me", { auth: true })
      .then((data) => setAdmin(data.admin))
      .catch((err) => {
        if (err instanceof ApiError && err.status === 401) tokenStorage.clear();
      })
      .finally(() => setLoading(false));
  }, []);

  // Any admin request that comes back 401 signs the admin out
  useEffect(() => {
    const onUnauthorized = () => setAdmin(null);
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
  }, []);

  const handleAuth = (data: AuthResponse) => {
    tokenStorage.set(data.token);
    setAdmin(data.admin);
  };

  const login = useCallback(async (email: string, password: string) => {
    const data = await apiRequest<AuthResponse>("/admin/auth/login", {
      method: "POST",
      body: { email, password },
    });
    handleAuth(data);
  }, []);

  const signup = useCallback(async (payload: SignupData) => {
    const data = await apiRequest<AuthResponse>("/admin/auth/signup", {
      method: "POST",
      body: payload,
    });
    handleAuth(data);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.clear();
    setAdmin(null);
  }, []);

  return (
    <AuthContext.Provider value={{ admin, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
