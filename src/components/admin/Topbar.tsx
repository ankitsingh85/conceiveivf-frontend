import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, CornerDownLeft, Globe, LogOut, Menu, Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLeadCount } from "../../context/LeadCountContext";
import { cn } from "../../utils/cn";
import { adminNav, getInitials } from "./adminNav";

type TopbarProps = {
  onMenuClick: () => void;
  onLogout: () => void;
};

type SearchItem = { label: string; group: string; path: string; keywords: string };

// Everything the search box can jump to: pages, their overviews and every section
const searchItems: SearchItem[] = adminNav.flatMap((item) => [
  { label: item.children ? `${item.label} — all sections` : item.label, group: "Pages", path: item.path, keywords: item.label },
  ...(item.children ?? []).map((child) => ({
    label: child.label,
    group: item.label,
    path: child.path,
    keywords: `${item.label} ${child.label} ${child.description}`,
  })),
]);

export default function Topbar({ onMenuClick, onLogout }: TopbarProps) {
  const { admin } = useAuth();
  const { newLeads } = useLeadCount();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [active, setActive] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchItems;
    return searchItems.filter((item) => item.keywords.toLowerCase().includes(q));
  }, [query]);

  // Close popovers on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
      if (!searchRef.current?.contains(e.target as Node)) setSearchOpen(false);
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
      // Ctrl/Cmd + K focuses the search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setSearchOpen(true);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (path: string) => {
    navigate(path);
    setQuery("");
    setSearchOpen(false);
    inputRef.current?.blur();
  };

  const onSearchKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active].path);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-line bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <button
        onClick={onMenuClick}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-muted transition hover:bg-sand hover:text-plum"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Section search */}
      <div ref={searchRef} className="relative hidden w-full max-w-sm md:block">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setSearchOpen(true);
          }}
          onFocus={() => setSearchOpen(true)}
          onKeyDown={onSearchKey}
          placeholder="Search sections..."
          className="w-full rounded-xl border border-line bg-sand/50 py-2 pr-14 pl-10 text-sm text-plum transition outline-none placeholder:text-gray-400 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/15"
        />
        <kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded-md border border-line bg-white px-1.5 py-0.5 text-[10px] font-semibold text-gray-400">
          Ctrl K
        </kbd>

        {searchOpen && (
          <div className="animate-dropdown absolute top-full right-0 left-0 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-line bg-white p-1.5 shadow-xl shadow-plum/10">
            {results.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-gray-400">No sections match “{query}”</p>
            ) : (
              results.map((item, i) => (
                <button
                  key={item.path}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(item.path)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors",
                    i === active ? "bg-sand text-plum" : "text-muted"
                  )}
                >
                  <span className="truncate">
                    <span className="font-medium">{item.label}</span>
                    {item.group !== "Pages" && <span className="text-gray-400"> · {item.group}</span>}
                  </span>
                  {i === active && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-gray-400" />}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <Link
          to="/admin/leads?status=new"
          title={newLeads ? `${newLeads} new lead${newLeads === 1 ? "" : "s"}` : "No new leads"}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted transition hover:bg-sand hover:text-plum"
        >
          <Bell className="h-5 w-5" />
          {newLeads > 0 && (
            <span className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-white ring-2 ring-white">
              {newLeads > 9 ? "9+" : newLeads}
            </span>
          )}
        </Link>

        <Link
          to="/"
          title="View website"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition hover:bg-sand hover:text-plum"
        >
          <Globe className="h-5 w-5" />
        </Link>

        <span className="hidden h-8 w-px bg-line sm:block" />

        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-3 rounded-xl py-1 pr-2 pl-1 transition hover:bg-sand"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum text-sm font-bold text-gold-light">
              {getInitials(admin?.name)}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block max-w-40 truncate text-sm font-semibold text-plum">{admin?.name}</span>
              <span className="block text-xs text-gray-400">Administrator</span>
            </span>
            <ChevronDown
              className={cn("hidden h-4 w-4 text-gray-400 transition-transform duration-200 sm:block", menuOpen && "rotate-180")}
            />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="animate-dropdown absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-plum/10"
            >
              <div className="border-b border-line bg-sand px-4 py-3">
                <p className="truncate text-sm font-semibold text-plum">{admin?.name}</p>
                <p className="truncate text-xs text-muted">{admin?.email}</p>
              </div>
              <div className="p-1.5">
                <Link
                  to="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted hover:bg-sand hover:text-plum"
                >
                  <Globe className="h-4 w-4" /> View website
                </Link>
                <button
                  onClick={onLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" /> Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
