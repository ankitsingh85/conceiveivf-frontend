import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { apiRequest } from "../lib/api";

type LeadCountValue = {
  newLeads: number;
  refresh: () => void;
};

const LeadCountContext = createContext<LeadCountValue>({ newLeads: 0, refresh: () => {} });

const POLL_MS = 60_000;

// Number of leads waiting for follow-up, shown in the sidebar and top bar
export function LeadCountProvider({ children }: { children: ReactNode }) {
  const [newLeads, setNewLeads] = useState(0);

  const refresh = useCallback(() => {
    apiRequest<{ counts: { new: number } }>("/leads?status=new&limit=1", { auth: true })
      .then((data) => setNewLeads(data.counts.new))
      .catch(() => {
        // keep the last known count
      });
  }, []);

  useEffect(() => {
    refresh();
    const t = window.setInterval(refresh, POLL_MS);
    return () => window.clearInterval(t);
  }, [refresh]);

  return <LeadCountContext.Provider value={{ newLeads, refresh }}>{children}</LeadCountContext.Provider>;
}

export const useLeadCount = () => useContext(LeadCountContext);
