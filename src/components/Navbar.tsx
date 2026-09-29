import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/conceiveivf-logo.webp";

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
      
      // {
      //   label: "Average Cost of Treatment",
      //   href: "#",
      // },
      // {
      //   label: "Menstrual Cycle Calculator",
      //   href: "#",
      // },
    ],
  },

  // {
  //   label: "Gallery",
  //   href: "#",
  // },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(
    null
  );

  const [mobileDropdown, setMobileDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileDropdown(null);
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

      <div className="bg-[#3B2940] text-xs text-white">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            sm:px-6
            py-2
          "
        >
          <p className="whitespace-nowrap">
            Mon – Sun: 10:00 AM – 6:00 PM
            
          </p>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919255278000"
              className="whitespace-nowrap transition hover:underline"
            >
              📞 +91 9255278000
            </a>

            <a
              href="mailto:conceiveivfsirsa@gmail.com"
              className="whitespace-nowrap transition hover:underline"
            >
              ✉ conceiveivfsirsa@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          bg-white
          px-5
          sm:px-6
          py-3
        "
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center shrink-0"
        >
          <img
            src={logo}
            alt="Conceive IVF Fertility Centre"
            className="
              h-14
              sm:h-14
              w-auto
              object-contain
            "
          />
        </Link>

        {/* ===================================================
            DESKTOP MENU
        =================================================== */}

        <ul className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => {
            const hasChildren =
              item.children && item.children.length > 0;

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
                {/* SIMPLE LINK */}

                {!hasChildren && item.href && (
                  <Link
                    to={item.href}
                    className="
                      flex
                      items-center
                      py-5
                      text-sm
                      font-semibold
                      text-[#3B2940]
                      whitespace-nowrap
                      transition-colors
                      hover:text-[#C6A15B]
                    "
                  >
                    {item.label}
                  </Link>
                )}

                {/* DROPDOWN MENU */}

                {hasChildren && (
                  <>
                    <button
                      type="button"
                      className="
                        flex
                        items-center
                        gap-1.5
                        py-5
                        text-sm
                        font-semibold
                        text-[#3B2940]
                        whitespace-nowrap
                        transition-colors
                        hover:text-[#C6A15B]
                      "
                    >
                      {item.label}

                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`
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
                        top-full
                        left-1/2
                        -translate-x-1/2
                        w-[320px]
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
                            ? "visible opacity-100 translate-y-0"
                            : "invisible opacity-0 -translate-y-2 pointer-events-none"
                        }
                      `}
                    >
                      {/* DROPDOWN ARROW */}

                      <div
                        className="
                          absolute
                          left-1/2
                          -top-1.5
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
                          child.children &&
                          child.children.length > 0;

                        return (
                          <div
                            key={child.label}
                            className="relative group"
                          >
                            {childHasChildren ? (
                              <>
                                {/* NESTED ITEM */}

                                <div
                                  className="
                                    flex
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
                                    cursor-pointer
                                  "
                                >
                                  <span>{child.label}</span>

                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
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
                                          justify-between
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
                                        <span>
                                          {subChild.label}
                                        </span>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              /* NORMAL DROPDOWN ITEM */

                              <Link
                                to={child.href || "#"}
                                className="
                                  flex
                                  items-center
                                  justify-between
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
                                <span>{child.label}</span>
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

        {/* ===================================================
            APPOINTMENT BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() =>
            window.dispatchEvent(new Event("openAppointment"))
          }
          className="
            hidden
            xl:inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#C6A15B]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-[#C6A15B]/20
            transition-all
            hover:bg-[#B08B48]
            hover:-translate-y-0.5
            whitespace-nowrap
          "
        >
          Book Appointment
        </button>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() => {
            setOpen(!open);
            setMobileDropdown(null);
          }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#F8F4EE]
            border
            border-[#E8DFD2]
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
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {open && (
        <div
          className="
            lg:hidden
            border-t
            border-[#E8DFD2]
            bg-white
            max-h-[calc(100vh-90px)]
            overflow-y-auto
          "
        >
          <div className="px-5 pb-6 pt-2">
            {menuItems.map((item) => {
              const hasChildren =
                item.children && item.children.length > 0;

              {/* NORMAL LINK */}

              if (!hasChildren && item.href) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#E8DFD2]
                      py-4
                      text-base
                      font-semibold
                      text-[#3B2940]
                      hover:text-[#C6A15B]
                    "
                  >
                    {item.label}

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                );
              }

              {/* MOBILE DROPDOWN */}

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
                      w-full
                      items-center
                      justify-between
                      py-4
                      text-left
                      text-base
                      font-semibold
                      text-[#3B2940]
                    "
                  >
                    <span>{item.label}</span>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`
                        transition-transform
                        duration-200
                        ${
                          mobileDropdown === item.label
                            ? "rotate-180 text-[#C6A15B]"
                            : ""
                        }
                      `}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {mobileDropdown === item.label && (
                    <div className="pb-3">
                      <div className="ml-2 rounded-2xl bg-[#F8F4EE] p-2">
                        {item.children?.map((child) => {
                          const childHasChildren =
                            child.children &&
                            child.children.length > 0;

                          if (childHasChildren) {
                            return (
                              <MobileNestedMenu
                                key={child.label}
                                item={child}
                                closeMenu={closeMobileMenu}
                              />
                            );
                          }

                          return (
                            <Link
                              key={child.label}
                              to={child.href || "#"}
                              onClick={closeMobileMenu}
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-[#5F5660]
                                hover:bg-white
                                hover:text-[#C6A15B]
                              "
                            >
                              <span>{child.label}</span>

                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* MOBILE APPOINTMENT */}

            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                window.dispatchEvent(
                  new Event("openAppointment")
                );
              }}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#C6A15B]
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
              Appointment
            </button>

            {/* MOBILE CONTACT */}

            <div className="mt-5 rounded-2xl bg-[#F8F4EE] p-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C6A15B]">
                Contact Us
              </p>

              <div className="mt-3 space-y-2">
                <a
                  href="tel:+919255278000"
                  className="block text-sm text-[#5F5660]"
                >
                  📞 +91 92552 78000
                </a>

                <a
                  href="mailto:conceiveivfsirsa@gmail.com"
                  className="block break-all text-sm text-[#5F5660]"
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
   MOBILE NESTED MENU
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
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          px-4
          py-3
          text-sm
          font-semibold
          text-[#3B2940]
          hover:bg-white
          hover:text-[#C6A15B]
        "
      >
        <span>{item.label}</span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`
            transition-transform
            duration-200
            ${open ? "rotate-90" : ""}
          `}
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {open && (
        <div className="ml-3 mb-2 rounded-xl bg-white p-1">
          {item.children?.map((child) => (
            <Link
              key={child.label}
              to={child.href || "#"}
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-between
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                text-[#5F5660]
                hover:text-[#C6A15B]
              "
            >
              <span>{child.label}</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}