import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LeadCountProvider } from "../../context/LeadCountContext";
import { cn } from "../../utils/cn";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const COLLAPSED_KEY = "conceive_admin_sidebar_collapsed";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(COLLAPSED_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile drawer whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleMenuClick = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setCollapsed((prev) => {
        try {
          localStorage.setItem(COLLAPSED_KEY, prev ? "0" : "1");
        } catch {
          // ignore
        }
        return !prev;
      });
    } else {
      setMobileOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <LeadCountProvider>
      <div className="min-h-screen bg-[#faf8f5]">
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          onLogout={handleLogout}
        />

        <div className={cn("transition-[padding] duration-300 ease-out", collapsed ? "lg:pl-20" : "lg:pl-64")}>
          <Topbar onMenuClick={handleMenuClick} onLogout={handleLogout} />
          <main key={pathname}>
            <Outlet />
          </main>
        </div>
      </div>
    </LeadCountProvider>
  );
}
