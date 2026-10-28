
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  const contact = {
    telephone: "+221 78 315 20 94",
    whatsapp: "221783152094",
    email: "firdawsic@gmail.com",
    adresse: "Dakar, Sénégal",
  };

  const navigation = [
    { nom: "Accueil", lien: "/accueil" },
    { nom: "À propos", lien: "/about" },
    { nom: "Nos services", lien: "/services" },
    { nom: "FAQ", lien: "/faq" },
    { nom: "Contact", lien: "/contact" },
  ];

  const expertises = [
    "Services de Voyage et Billetterie",
    "Conseil et Transaction Immobilière",
    "Courtage et Solutions d'Assurance",
    "Accompagnement et Conseil aux Entreprises",
  ];

  const socialLinks = [
    {
      nom: "LinkedIn",
      lien: "https://www.linkedin.com/",
      symbole: "in",
    },
    {
      nom: "TikTok",
      lien: "https://www.tiktok.com/",
      symbole: "♪",
    },
    {
      nom: "Instagram",
      lien: "https://www.instagram.com/",
      symbole: "IG",
    },
  ];

  return (
    <footer className="bg-[#071D30] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identité de l'entreprise */}
          <div>
            <Link to="/accueil" className="inline-flex items-center gap-3">
              {/* Logo officiel */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                <img
                  src="/firdawsi-bg.png"
                  alt="Logo FIRDAWSI CONSULTING GROUP"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-lg font-bold tracking-wide">
                  FIRDAWSI
                </p>

                <p className="text-[10px] font-semibold tracking-[0.16em] text-sky-300">
                  CONSULTING GROUP
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-300">
              Des solutions professionnelles adaptées à vos besoins
              dans les domaines du voyage, de l'immobilier, de
              l'assurance et du conseil aux entreprises.
            </p>

            <p className="mt-4 text-xs font-medium uppercase leading-6 tracking-wider text-gray-400">
              L'excellence au cœur de vos besoins
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.nom}
                  href={social.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.nom}
                  title={social.nom}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-sm font-bold text-gray-300 transition duration-300 hover:border-sky-300 hover:bg-sky-300 hover:text-[#071D30]"
                >
                  {social.symbole}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-bold">Navigation</h3>

            <div className="mt-4 h-1 w-10 rounded-full bg-sky-300" />

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.nom}>
                  <Link
                    to={item.lien}
                    className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-sky-300"
                  >
                    <ChevronRight
                      size={15}
                      className="text-sky-300 transition group-hover:translate-x-1"
                    />
                    {item.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-base font-bold">Nos expertises</h3>

            <div className="mt-4 h-1 w-10 rounded-full bg-sky-300" />

            <ul className="mt-6 space-y-4">
              {expertises.map((expertise) => (
                <li key={expertise}>
                  <Link
                    to="/services"
                    className="group flex items-start gap-2 text-sm leading-6 text-gray-300 transition hover:text-sky-300"
                  >
                    <ChevronRight
                      size={15}
                      className="mt-1 shrink-0 text-sky-300 transition group-hover:translate-x-1"
                    />
                    {expertise}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-base font-bold">Contactez-nous</h3>

            <div className="mt-4 h-1 w-10 rounded-full bg-sky-300" />

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-sky-300"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Localisation
                  </p>

                  <p className="mt-1 text-sm text-gray-200">
                    {contact.adresse}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-sky-300"
                />

                <div>
                  <p className="text-xs text-gray-400">Téléphone</p>

                  <a
                    href={`tel:${contact.telephone.replace(/[^\d+]/g, "")}`}
                    className="mt-1 block text-sm text-gray-200 transition hover:text-sky-300"
                  >
                    {contact.telephone}
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-sky-300 transition hover:text-white"
                  >
                    Écrire sur WhatsApp
                    <ArrowUpRight
                      size={13}
                      className="ml-1 inline-block"
                    />
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-sky-300"
                />

                <div>
                  <p className="text-xs text-gray-400">E-mail</p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-sm text-gray-200 transition hover:text-sky-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FIRDAWSI CONSULTING GROUP.
            Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
            <Link
              to="/mentions-legales"
              className="transition hover:text-sky-300"
            >
              Mentions légales
            </Link>

            <Link
              to="/confidentialite"
              className="transition hover:text-sky-300"
            >
              Confidentialité
            </Link>
          </div>
        </div>

        {/* Crédit de création du site */}
        <div className="border-t border-white/5 px-6 py-5 text-center">
          <p className="text-xs text-gray-400">
            Site web conçu et développé par{" "}
            <a
              href="https://maboyesoftwares.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold tracking-wide text-sky-300 transition hover:text-white"
            >
              MABOYE SOFTWARES
              <ArrowUpRight
                size={13}
                className="ml-1 inline-block"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
