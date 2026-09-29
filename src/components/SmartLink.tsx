import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type SmartLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
};

// Admin-entered links can be internal ("/contact"), anchors ("#faq") or external URLs
export default function SmartLink({ to, className, children }: SmartLinkProps) {
  if (to.startsWith("/") && !to.startsWith("//")) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(to);
  return (
    <a
      href={to}
      className={className}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
