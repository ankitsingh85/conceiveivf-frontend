import { useEffect, useState } from "react";
import { apiRequest } from "../lib/api";

const cacheKey = (key: string) => `conceive_content_${key}`;

// Show the defaults if the API hasn't answered by then (e.g. a sleeping server)
const FALLBACK_AFTER_MS = 2500;

const readCache = <T,>(key: string): T | null => {
  try {
    const raw = localStorage.getItem(cacheKey(key));
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

/**
 * Loads an editable website section from the API.
 * Returns null while the first load is in flight, so the section can fade in
 * with the right content instead of flashing the defaults first.
 */
export function useSiteContent<T>(key: string, defaults: T): T | null {
  const [content, setContent] = useState<T | null>(() => readCache<T>(key));

  useEffect(() => {
    let active = true;
    const fallback = window.setTimeout(() => {
      if (active) setContent((current) => current ?? defaults);
    }, FALLBACK_AFTER_MS);

    apiRequest<{ data: T | null }>(`/content/${key}`)
      .then(({ data }) => {
        if (!active) return;
        const next = data ? { ...defaults, ...data } : defaults;
        setContent(next);
        try {
          if (data) localStorage.setItem(cacheKey(key), JSON.stringify(next));
          else localStorage.removeItem(cacheKey(key));
        } catch {
          // ignore
        }
      })
      .catch(() => {
        if (active) setContent((current) => current ?? defaults);
      })
      .finally(() => window.clearTimeout(fallback));

    return () => {
      active = false;
      window.clearTimeout(fallback);
    };
  }, [key, defaults]);

  return content;
}
