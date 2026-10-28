
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const liensNavigation = [
  { nom: "Accueil", chemin: "/accueil" },
  { nom: "À propos", chemin: "/about" },
  { nom: "Services", chemin: "/services" },
  { nom: "Actualités", chemin: "/actualite" },
  { nom: "Témoignages", chemin: "/temoignages" },
  { nom: "FAQ", chemin: "/faq" },
  { nom: "Contact", chemin: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fermerMenu = () => setMenuOpen(false);

  const classeLien = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-sky-600"
        : "text-[#123B5D] hover:text-sky-600"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-3 px-4 py-1.5 lg:px-10">

        {/* LOGO */}
        <Link
          to="/"
          onClick={fermerMenu}
          className="flex shrink-0 items-center"
          aria-label="Firdawsi Consulting Group - Accueil"
        >
          <img
            src="/firdawsi-bg.png"
            alt="Logo Firdawsi Consulting Group"
            className="h-16 w-20 object-contain sm:h-[4.5rem] sm:w-24"
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {liensNavigation.map((lien) => (
            <NavLink
              key={lien.chemin}
              to={lien.chemin}
              className={classeLien}
            >
              {({ isActive }) => (
                <>
                  {lien.nom}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-sky-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* BOUTON CONTACT DESKTOP */}
        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-sky-700 sm:inline-flex"
        >
          Nous contacter
          <ArrowRight size={16} />
        </Link>

        {/* BOUTON MENU MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 text-[#123B5D] transition hover:bg-blue-50 lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`overflow-hidden border-t border-blue-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {liensNavigation.map((lien) => (
            <NavLink
              key={lien.chemin}
              to={lien.chemin}
              onClick={fermerMenu}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-50 text-sky-600"
                    : "text-[#123B5D] hover:bg-blue-50 hover:text-sky-600"
                }`
              }
            >
              {lien.nom}
            </NavLink>
          ))}

          {/* BOUTON CONTACT MOBILE */}
          <Link
            to="/contact"
            onClick={fermerMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Nous contacter
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
