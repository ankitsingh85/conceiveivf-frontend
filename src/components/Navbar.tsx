import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/IVF-Logo.png";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Fertility Treatment",
    children: [
      {
        label: "Infertility of Male",
        children: [
          {
            label: "Semen / Sperm Freezing",
            href: "/semen-sperm-freezing",
          },
          {
            label: "InFertility Assessment- Male",
            href: "/infertility-assessment-male",
          },
          {
            label: "CASA",
            href: "/casa",
          },
        ],
      },

      {
        label: "InFertility Assesment-Female",
        href: "/infertility-assesment-female",
      },

      {
        label: "Reproductive Surgery",
        href: "/reproductive-surgery",
      },

      {
        label: "IUI- Intrauterine Insemination",
        href: "/iui-intrauterine-insemination",
      },

      {
        label: "In-Vitro Fertilization(IVF)",
        href: "/in-vitro-fertilization",
      },

      {
        label: "ICSI",
        href: "/icsi",
      },

      {
        label: "Egg Freezing",
        href: "/egg-freezing",
      },

      {
        label: "Embryology",
        href: "/embryology",
      },

      {
        label: "PGD/PGS",
        href: "/pgd-pgs",
      },
    ],
  },

  {
    label: "Patient Guide",
    children: [
      {
        label: "Videos",
        href: "/videos",
      },
      {
        label: "Patient Review",
        href: "/patient-review",
      },
    ],
  },

  {
    label: "Resources",
    children: [
      {
        label: "FAQ",
        href: "/faq",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [desktopDropdown, setDesktopDropdown] =
    useState<string | null>(null);

  const [mobileDropdown, setMobileDropdown] =
    useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileDropdown(null);
  };

  const openAppointment = () => {
    closeMobileMenu();

    window.dispatchEvent(new Event("openAppointment"));
  };

  return (
    <header
      className={`
        sticky top-0 inset-x-0 z-[9999]
        bg-white
        border-b border-[#E8DFD2]
        transition-all duration-300
        ${scrolled ? "shadow-md" : "shadow-sm"}
      `}
    >
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="bg-[#3B2940] text-white">
        <div
          className="
            mx-auto
            flex
            min-h-[34px]
            max-w-7xl
            items-center
            justify-between
            gap-2
            px-3
            sm:px-6
            lg:px-8
          "
        >
          {/* LEFT - TIMING */}

          <p
            className="
              whitespace-nowrap
              text-[8px]
              font-semibold
              leading-none
              sm:text-xs
            "
          >
            Mon – Sun: 10:00 AM – 6:00 PM
          </p>

          {/* RIGHT - CONTACT */}

          <div className="flex shrink-0 items-center">
            {/* PHONE - MOBILE + DESKTOP */}

            <a
              href="tel:+919255278000"
              className="
                whitespace-nowrap
                text-[8px]
                font-medium
                leading-none
                transition-colors
                hover:text-[#C6A15B]
                sm:text-xs
              "
            >
              📞 +91 9255278000
            </a>

            {/* EMAIL - DESKTOP ONLY */}

            <a
              href="mailto:conceiveivfsirsa@gmail.com"
              className="
                ml-5
                hidden
                whitespace-nowrap
                text-xs
                font-medium
                transition-colors
                hover:text-[#C6A15B]
                md:inline-block
              "
            >
              ✉ conceiveivfsirsa@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <nav className="bg-white">
        <div
          className="
            mx-auto
            flex
            min-h-[68px]
            max-w-7xl
            items-center
            justify-between
            gap-4
            px-4
            sm:min-h-[76px]
            sm:px-6
            lg:min-h-[82px]
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              flex
              h-[58px]
              w-auto
              max-w-[190px]
              shrink-0
              items-center
              overflow-hidden
              sm:h-[66px]
              sm:max-w-[220px]
              lg:h-[72px]
              lg:max-w-[240px]
            "
          >
            <img
              src={logo}
              alt="Conceive IVF Fertility Centre"
              className="
                block
                h-[52px]
                w-auto
                max-w-[185px]
                object-contain
                object-left
                sm:h-[60px]
                sm:max-w-[215px]
                lg:h-[68px]
                lg:max-w-[235px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <ul
            className="
              hidden
              lg:flex
              lg:items-center
              lg:gap-3
              xl:gap-5
              2xl:gap-6
            "
          >
            {menuItems.map((item) => {
              const hasChildren =
                !!item.children && item.children.length > 0;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setDesktopDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      setDesktopDropdown(null);
                    }
                  }}
                >
                  {/* SIMPLE DESKTOP LINK */}

                  {!hasChildren && item.href && (
                    <Link
                      to={item.href}
                      className="
                        flex
                        items-center
                        whitespace-nowrap
                        py-5
                        text-[13px]
                        font-semibold
                        text-[#3B2940]
                        transition-colors
                        hover:text-[#C6A15B]
                        xl:text-sm
                      "
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* DESKTOP DROPDOWN */}

                  {hasChildren && (
                    <>
                      <button
                        type="button"
                        className="
                          flex
                          items-center
                          gap-1
                          whitespace-nowrap
                          py-5
                          text-[13px]
                          font-semibold
                          text-[#3B2940]
                          transition-colors
                          hover:text-[#C6A15B]
                          xl:text-sm
                        "
                        aria-haspopup="true"
                        aria-expanded={
                          desktopDropdown === item.label
                        }
                      >
                        <span>{item.label}</span>

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`
                            shrink-0
                            transition-transform
                            duration-200
                            ${
                              desktopDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {/* FIRST LEVEL DROPDOWN */}

                      <div
                        className={`
                          absolute
                          top-[calc(100%-2px)]
                          left-1/2
                          z-[10000]
                          w-[320px]
                          -translate-x-1/2
                          rounded-2xl
                          border
                          border-[#E8DFD2]
                          bg-white
                          p-2
                          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                          transition-all
                          duration-200
                          ${
                            desktopDropdown === item.label
                              ? "visible translate-y-0 opacity-100"
                              : "invisible pointer-events-none -translate-y-2 opacity-0"
                          }
                        `}
                      >
                        {/* DROPDOWN ARROW */}

                        <div
                          className="
                            absolute
                            -top-1.5
                            left-1/2
                            h-3
                            w-3
                            -translate-x-1/2
                            rotate-45
                            border-l
                            border-t
                            border-[#E8DFD2]
                            bg-white
                          "
                        />

                        {item.children?.map((child) => {
                          const childHasChildren =
                            !!child.children &&
                            child.children.length > 0;

                          return (
                            <div
                              key={child.label}
                              className="group relative"
                            >
                              {childHasChildren ? (
                                <>
                                  {/* NESTED DROPDOWN ITEM */}

                                  <div
                                    className="
                                      flex
                                      cursor-pointer
                                      items-center
                                      justify-between
                                      rounded-xl
                                      px-4
                                      py-3
                                      text-sm
                                      font-semibold
                                      text-[#3B2940]
                                      transition-all
                                      hover:bg-[#F8F4EE]
                                      hover:text-[#C6A15B]
                                    "
                                  >
                                    <span className="pr-3">
                                      {child.label}
                                    </span>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      className="shrink-0"
                                    >
                                      <path d="m9 18 6-6-6-6" />
                                    </svg>
                                  </div>

                                  {/* SECOND LEVEL DROPDOWN */}

                                  <div
                                    className="
                                      absolute
                                      left-full
                                      top-0
                                      ml-2
                                      hidden
                                      w-[290px]
                                      rounded-2xl
                                      border
                                      border-[#E8DFD2]
                                      bg-white
                                      p-2
                                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                                      group-hover:block
                                    "
                                  >
                                    {child.children?.map(
                                      (subChild) => (
                                        <Link
                                          key={subChild.label}
                                          to={
                                            subChild.href || "#"
                                          }
                                          className="
                                            flex
                                            items-center
                                            rounded-xl
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            text-[#3B2940]
                                            transition-all
                                            hover:bg-[#F8F4EE]
                                            hover:text-[#C6A15B]
                                          "
                                        >
                                          {subChild.label}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </>
                              ) : (
                                /* NORMAL DROPDOWN LINK */

                                <Link
                                  to={child.href || "#"}
                                  className="
                                    flex
                                    items-center
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    text-[#3B2940]
                                    transition-all
                                    hover:bg-[#F8F4EE]
                                    hover:text-[#C6A15B]
                                  "
                                >
                                  {child.label}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          {/* =================================================
              DESKTOP APPOINTMENT
          ================================================= */}

          <button
            type="button"
            onClick={openAppointment}
            className="
              hidden
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#C6A15B]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-[#C6A15B]/20
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#B08B48]
              xl:inline-flex
              2xl:px-6
            "
          >
            Book Appointment
          </button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              setOpen((prev) => !prev);
              setMobileDropdown(null);
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#E8DFD2]
              bg-[#F8F4EE]
              lg:hidden
            "
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            <svg
              className="h-6 w-6 text-[#3B2940]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <>
                  <path d="M6 18L18 6" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-x-0
            top-[102px]
            z-[9998]
            h-[calc(100dvh-102px)]
            overflow-y-auto
            border-t
            border-[#E8DFD2]
            bg-white
            lg:hidden
          "
        >
          <div className="mx-auto max-w-7xl px-4 pb-8 pt-2 sm:px-6">
            {menuItems.map((item) => {
              const hasChildren =
                !!item.children && item.children.length > 0;

              {/* =================================================
                  NORMAL MOBILE LINK
                  NO ARROW
              ================================================= */}

              if (!hasChildren && item.href) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      min-h-[54px]
                      w-full
                      items-center
                      border-b
                      border-[#E8DFD2]
                      py-4
                      text-base
                      font-semibold
                      text-[#3B2940]
                      transition-colors
                      hover:text-[#C6A15B]
                    "
                  >
                    {item.label}
                  </Link>
                );
              }

              {/* =================================================
                  MOBILE DROPDOWN
                  ONLY DROPDOWN HAS ARROW
              ================================================= */}

              return (
                <div
                  key={item.label}
                  className="border-b border-[#E8DFD2]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                    className="
                      flex
                      min-h-[54px]
                      w-full
                      items-center
                      justify-between
                      py-4
                      text-left
                      text-base
                      font-semibold
                      text-[#3B2940]
                    "
                    aria-expanded={
                      mobileDropdown === item.label
                    }
                  >
                    <span>{item.label}</span>

                    {/* ONLY DROPDOWN ARROW */}

                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          mobileDropdown === item.label
                            ? "rotate-180 text-[#C6A15B]"
                            : "text-[#3B2940]"
                        }
                      `}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* DROPDOWN CONTENT */}

                  {mobileDropdown === item.label && (
                    <div className="pb-3">
                      <div
                        className="
                          ml-0
                          overflow-hidden
                          rounded-2xl
                          bg-[#F8F4EE]
                          p-2
                          sm:ml-2
                        "
                      >
                        {item.children?.map((child) => {
                          const childHasChildren =
                            !!child.children &&
                            child.children.length > 0;

                          {/* =================================
                              CHILD IS ALSO DROPDOWN
                          ================================= */}

                          if (childHasChildren) {
                            return (
                              <MobileNestedMenu
                                key={child.label}
                                item={child}
                                closeMenu={closeMobileMenu}
                              />
                            );
                          }

                          {/* =================================
                              NORMAL CHILD LINK
                              NO ARROW
                          ================================= */}

                          return (
                            <Link
                              key={child.label}
                              to={child.href || "#"}
                              onClick={closeMobileMenu}
                              className="
                                flex
                                min-h-[48px]
                                w-full
                                items-center
                                rounded-xl
                                px-3
                                py-3
                                text-sm
                                font-medium
                                leading-5
                                text-[#5F5660]
                                transition-colors
                                hover:bg-white
                                hover:text-[#C6A15B]
                                sm:px-4
                              "
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* =================================================
                MOBILE APPOINTMENT
            ================================================= */}

            <button
              type="button"
              onClick={openAppointment}
              className="
                mt-5
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#C6A15B]
                px-5
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-lg
                shadow-[#C6A15B]/20
                transition-all
                hover:bg-[#B08B48]
              "
            >
              Book Appointment
            </button>

            {/* =================================================
                MOBILE CONTACT
            ================================================= */}

            <div
              className="
                mt-5
                rounded-2xl
                bg-[#F8F4EE]
                p-4
                sm:p-5
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#C6A15B]
                "
              >
                Contact Us
              </p>

              <div className="mt-3 space-y-3">
                <a
                  href="tel:+919255278000"
                  className="
                    block
                    text-sm
                    font-medium
                    text-[#5F5660]
                    transition-colors
                    hover:text-[#3B2940]
                  "
                >
                  📞 +91 92552 78000
                </a>

                <a
                  href="mailto:conceiveivfsirsa@gmail.com"
                  className="
                    block
                    break-all
                    text-sm
                    font-medium
                    text-[#5F5660]
                    transition-colors
                    hover:text-[#3B2940]
                  "
                >
                  ✉ conceiveivfsirsa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   MOBILE NESTED DROPDOWN
========================================================= */

function MobileNestedMenu({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NESTED DROPDOWN HEADER */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          min-h-[48px]
          w-full
          items-center
          justify-between
          rounded-xl
          px-3
          py-3
          text-left
          text-sm
          font-semibold
          leading-5
          text-[#3B2940]
          transition-colors
          hover:bg-white
          hover:text-[#C6A15B]
          sm:px-4
        "
        aria-expanded={open}
      >
        <span>{item.label}</span>

        {/* ONLY BECAUSE THIS IS A DROPDOWN */}

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`
            shrink-0
            transition-transform
            duration-200
            ${
              open
                ? "rotate-180 text-[#C6A15B]"
                : "text-[#3B2940]"
            }
          `}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* NESTED NORMAL LINKS */}

      {open && (
        <div
          className="
            mb-2
            ml-2
            overflow-hidden
            rounded-xl
            bg-white
            p-1
            sm:ml-3
          "
        >
          {item.children?.map((child) => (
            <Link
              key={child.label}
              to={child.href || "#"}
              onClick={closeMenu}
              className="
                flex
                min-h-[46px]
                w-full
                items-center
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                leading-5
                text-[#5F5660]
                transition-colors
                hover:text-[#C6A15B]
                sm:px-4
              "
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}