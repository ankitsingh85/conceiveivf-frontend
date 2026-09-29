import { useCallback, useState } from "react";
import { API_URL, apiRequest } from "../lib/api";

export type LeadSource = "home-banner" | "home-contact" | "appointment" | "contact-page";

export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  treatment?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
};

type Status = "idle" | "sending" | "sent";

/**
 * Shared logic for the website's enquiry forms: sends the lead to the API,
 * tracks sending/sent state and errors, and renders a hidden honeypot field
 * that only bots fill in. In `preview` mode (admin live previews) nothing is sent.
 */
export function useLeadForm<T extends Record<string, string>>(source: LeadSource, initial: T, preview = false) {
  const [values, setValues] = useState<T>(initial);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (name: keyof T, value: string) => setValues((v) => ({ ...v, [name]: value }));

  const submit = async (lead: LeadInput) => {
    setError("");
    if (preview) {
      setStatus("sent");
      return true;
    }

    setStatus("sending");
    try {
      await apiRequest("/leads", { method: "POST", body: { ...lead, source, website } });
      setStatus("sent");
      setValues(initial);
      return true;
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      return false;
    }
  };

  const reset = useCallback(() => {
    setStatus("idle");
    setError("");
  }, []);

  // Hidden from people (and screen readers); bots that fill it are ignored by the API
  const honeypot = (
    <input
      type="text"
      name="website"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
    />
  );

  return { values, set, status, error, submit, reset, honeypot };
}

/**
 * Saves a lead without waiting for the reply. Used when the form also opens
 * another tab (WhatsApp): `keepalive` lets the request finish even if the
 * visitor leaves the page.
 */
export const sendLeadInBackground = (lead: LeadInput & { source: LeadSource }) => {
  fetch(`${API_URL}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    keepalive: true,
  }).catch(() => {
    // The WhatsApp message still reaches the clinic
  });
};

// Keeps only digits, up to `max` of them (for 10-digit mobile fields)
export const digitsOnly = (value: string, max = 10) => value.replace(/\D/g, "").slice(0, max);
