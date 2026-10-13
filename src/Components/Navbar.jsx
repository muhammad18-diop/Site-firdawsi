
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("Français (FR)");

  const languages = [
    "Français (FR)",
    "English (US)",
    "Deutsch",
    "Italiano",
    "Español",
  ];

  const links = [
    { label: "Accueil", path: "/accueil" },
    { label: "À propos", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Partenaires", path: "/pricing" },
    { label: "Actualités", path: "/actualites" },
    { label: "Témoignages", path: "/temoignages" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed start-0 top-0 z-50 w-full border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-4 px-4 py-3 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="firdawsi-bg.png"
            alt="Logo Firdawsi Consulting Group"
            className="h-14 w-16 object-contain sm:h-16 sm:w-20"
          />

          <div className="hidden sm:block">
            <span className="block text-sm font-extrabold tracking-wide text-blue-950 lg:text-base">
              FIRDAWSI
            </span>
            <span className="block text-xs font-semibold tracking-wider text-blue-700">
              CONSULTING GROUP
            </span>
            <span className="mt-1 block text-[9px] tracking-wider text-gray-500">
              L’EXCELLENCE AU CŒUR DE VOS BESOINS
            </span>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:order-3">

          

          {/* Contact */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-lg bg-blue-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-950 sm:inline-flex"
          >
            Nous contacter
            <ArrowRight size={17} />
          </Link>

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setLanguageOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-950 transition hover:bg-blue-50 lg:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } order-3 w-full lg:order-2 lg:block lg:w-auto`}
        >
          <ul className="flex flex-col gap-1 rounded-xl bg-blue-50/70 p-3 font-medium lg:flex-row lg:items-center lg:gap-5 lg:bg-transparent lg:p-0">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm transition lg:px-0 lg:py-3 ${
                      isActive
                        ? "bg-blue-100 font-bold text-blue-800 lg:bg-transparent lg:text-blue-700"
                        : "text-blue-950 hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact sur mobile */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-3 font-semibold text-white sm:hidden"
          >
            Nous contacter <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
