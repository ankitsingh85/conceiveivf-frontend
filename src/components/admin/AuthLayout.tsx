import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/conceiveivf-logo.webp";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

export default function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-sand">
      {/* Brand panel — hidden on small screens */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-plum to-plum-deep p-12 text-white lg:flex">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <Link to="/" className="relative inline-flex w-fit rounded-xl bg-white px-4 py-3">
          <img src={logo} alt="Conceive IVF" className="h-10 w-auto" />
        </Link>

        <div className="relative">
          <h2 className="font-display text-4xl leading-tight font-semibold">
            Admin Portal
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/85">
            Update the content of the Conceive IVF Fertility Centre website from one secure
            place.
          </p>
        </div>

        <p className="relative text-sm text-white/70">
          © {new Date().getFullYear()} Conceive IVF Fertility Centre
        </p>
      </div>

      {/* Form panel */}
      <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 inline-flex lg:hidden">
            <img src={logo} alt="Conceive IVF" className="h-10 w-auto" />
          </Link>

          <h1 className="font-display text-3xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 text-gray-600">{subtitle}</p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
            {children}
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">{footer}</div>
        </div>
      </div>
    </div>
  );
}
