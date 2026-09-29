import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  label: string;
  to?: string; // omitted for the current page
};

type PageHeaderProps = {
  crumbs: Crumb[];
  children?: ReactNode;
};

// Breadcrumb trail shown above each admin page's title
export default function PageHeader({ crumbs, children }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-6 sm:px-6 lg:px-8">
      <nav className="flex min-w-0 items-center gap-1.5 text-sm" aria-label="Breadcrumb">
        <Link
          to="/admin/dashboard"
          className="shrink-0 text-gray-400 transition hover:text-plum"
          aria-label="Dashboard home"
        >
          <Home className="h-4 w-4" />
        </Link>
        {crumbs.map((crumb) => (
          <Fragment key={crumb.label}>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-300" />
            {crumb.to ? (
              <Link to={crumb.to} className="truncate text-gray-400 transition hover:text-plum">
                {crumb.label}
              </Link>
            ) : (
              <span className="truncate font-medium text-plum">{crumb.label}</span>
            )}
          </Fragment>
        ))}
      </nav>
      {children && <div className="flex flex-wrap items-center gap-2 text-sm">{children}</div>}
    </div>
  );
}
