import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Globe, LogOut, X } from "lucide-react";
import { useLeadCount } from "../../context/LeadCountContext";
import { cn } from "../../utils/cn";
import { adminNav } from "./adminNav";
import logo from "../../images/conceiveivf-logo.webp";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
};

export default function Sidebar({ collapsed, mobileOpen, onClose, onLogout }: SidebarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const { newLeads } = useLeadCount();

  // Text is hidden only on desktop when collapsed; the mobile drawer is always full width
  const hideWhenCollapsed = collapsed ? "lg:hidden" : "";

  // Expand the group that contains the current page
  useEffect(() => {
    const group = adminNav.find((item) => item.children && pathname.startsWith(item.path));
    if (group) setOpenGroups((open) => (open[group.path] ? open : { ...open, [group.path]: true }));
  }, [pathname]);

  const handleGroupClick = (path: string) => {
    // Icon-only sidebar has no room for sub-items, so go to the group's overview page
    if (collapsed && window.matchMedia("(min-width: 1024px)").matches) {
      navigate(path);
      return;
    }
    setOpenGroups((open) => ({ ...open, [path]: !open[path] }));
  };

  const rowClass = (isActive: boolean) =>
    cn(
      "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200",
      collapsed && "lg:justify-center lg:px-0",
      isActive ? "bg-sand text-plum" : "text-muted hover:bg-sand/60 hover:text-plum"
    );

  const footerButton = cn(
    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
    collapsed && "lg:justify-center lg:px-0"
  );

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-plum-deep/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-line bg-white transition-all duration-300 ease-out lg:translate-x-0",
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full",
          collapsed && "lg:w-20"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex h-16 shrink-0 items-center justify-between border-b border-line px-5",
            collapsed && "lg:justify-center lg:px-0"
          )}
        >
          <Link to="/admin/dashboard" className={cn("flex items-center", hideWhenCollapsed)}>
            <img src={logo} alt="Conceive IVF" className="h-9 w-auto" />
          </Link>
          {collapsed && (
            <Link
              to="/admin/dashboard"
              className="hidden h-10 w-10 items-center justify-center rounded-xl bg-plum font-display text-lg font-bold text-gold-light lg:flex"
            >
              C
            </Link>
          )}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:bg-sand lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          <p
            className={cn(
              "px-3 pb-2 text-[11px] font-semibold tracking-widest text-gray-400 uppercase",
              hideWhenCollapsed
            )}
          >
            Menu
          </p>

          {adminNav.map(({ label, path, icon: Icon, children, showNewLeads }) => {
            const badge = showNewLeads && newLeads > 0 ? (newLeads > 99 ? "99+" : String(newLeads)) : null;

            const content = (isActive: boolean) => (
              <>
                <span className="relative">
                  <Icon
                    className={cn(
                      "h-5 w-5 shrink-0 transition-colors",
                      isActive ? "text-gold-deep" : "text-gray-400 group-hover:text-gold-deep"
                    )}
                  />
                  {badge && collapsed && (
                    <span className="absolute -top-1 -right-1 hidden h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-white lg:block" />
                  )}
                </span>
                <span className={cn("flex-1", hideWhenCollapsed)}>{label}</span>
                {badge && (
                  <span
                    className={cn(
                      "min-w-6 rounded-full bg-gold px-1.5 py-0.5 text-center text-[11px] font-bold text-white",
                      hideWhenCollapsed
                    )}
                    title={`${newLeads} new lead${newLeads === 1 ? "" : "s"}`}
                  >
                    {badge}
                  </span>
                )}
              </>
            );

            if (!children) {
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={onClose}
                  title={collapsed ? label : undefined}
                  className={({ isActive }) => rowClass(isActive)}
                >
                  {({ isActive }) => content(isActive)}
                </NavLink>
              );
            }

            // Group with sub-pages (e.g. Home → Banner)
            const isOpen = !!openGroups[path];
            const inGroup = pathname.startsWith(path);

            return (
              <div key={path}>
                <button
                  type="button"
                  title={collapsed ? label : undefined}
                  aria-expanded={isOpen}
                  onClick={() => handleGroupClick(path)}
                  className={rowClass(inGroup && (!isOpen || collapsed))}
                >
                  {content(inGroup)}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300",
                      isOpen && "rotate-180",
                      hideWhenCollapsed
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    collapsed && "lg:hidden"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="my-1 ml-[1.35rem] space-y-0.5 border-l border-line pl-3">
                      {children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                              cn(
                                "relative flex items-center rounded-lg px-3 py-2 text-[13px] transition-colors duration-200",
                                isActive
                                  ? "bg-sand font-semibold text-plum"
                                  : "text-muted hover:bg-sand/60 hover:text-plum"
                              )
                            }
                          >
                            {({ isActive }) => (
                              <>
                                {isActive && (
                                  <span className="absolute top-1/2 -left-[13.5px] h-4 w-0.5 -translate-y-1/2 rounded-full bg-gold" />
                                )}
                                {child.label}
                              </>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="shrink-0 space-y-1 border-t border-line p-3">
          <Link
            to="/"
            title={collapsed ? "View website" : undefined}
            className={cn(footerButton, "text-muted hover:bg-sand/60 hover:text-plum")}
          >
            <Globe className="h-5 w-5 shrink-0 text-gray-400" />
            <span className={hideWhenCollapsed}>View website</span>
          </Link>
          <button
            onClick={onLogout}
            title={collapsed ? "Log out" : undefined}
            className={cn(footerButton, "text-muted hover:bg-red-50 hover:text-red-600")}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <span className={hideWhenCollapsed}>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
