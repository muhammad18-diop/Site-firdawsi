
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

function CTAContact() {
  const contact = {
    telephone: "+221 78 315 20 94",
    whatsapp: "221783152094",
    adresse: "Dakar, Sénégal",
    horaires: "Lundi – Vendredi : 09h00 – 18h00",
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Bloc avec image de fond */}
        <div className="relative isolate overflow-hidden rounded-3xl">

          {/* Image de fond */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85"
            alt="Architecture moderne"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          {/* Overlay bleu marine */}
          <div className="absolute inset-0 -z-10 bg-[#071D30]/90" />

          {/* Contenu */}
          <div className="px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Petit titre */}
            <span className="inline-block rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-2 text-sm font-semibold tracking-[0.15em] text-sky-300">
              CONTACTEZ-NOUS
            </span>

            {/* Titre principal */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Faisons avancer vos projets.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
              Vous avez un projet ou un besoin particulier ?
              FIRDAWSI Consulting Group vous accompagne avec des
              solutions professionnelles adaptées à vos objectifs.
            </p>

            {/* Liens de contact sur une même ligne */}
            <div className="mx-auto mt-9 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-4 font-semibold text-white transition duration-300 hover:bg-sky-400"
              >
                <MessageCircle size={20} />
                WhatsApp
                <ArrowUpRight size={17} />
              </a>

              {/* Téléphone */}
              <a
                href={`tel:${contact.telephone.replace(/[^\d+]/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-4 font-semibold text-[#123B5D] transition duration-300 hover:bg-gray-100"
              >
                <Phone size={20} />
                Téléphone
                <ArrowUpRight size={17} />
              </a>

              {/* Formulaire */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-sky-300/60 bg-[#123B5D]/60 px-4 py-4 font-semibold text-white transition duration-300 hover:border-sky-300 hover:bg-sky-300 hover:text-[#123B5D]"
              >
                <Mail size={20} />
                Formulaire
                <ArrowUpRight size={17} />
              </Link>

            </div>

            {/* Séparateur gris clair */}
            <div className="mx-auto my-8 max-w-4xl border-t border-gray-400/40" />

            {/* Localisation et horaires */}
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm leading-7 text-gray-200 sm:text-base">

              <MapPin
                size={18}
                className="text-sky-300"
              />

              <span>{contact.adresse}</span>

              <span className="hidden text-gray-400 sm:inline">
                |
              </span>

              <Clock3
                size={18}
                className="text-sky-300"
              />

              <span>{contact.horaires}</span>

            </p>

            {/* Slogan */}
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-gray-300 sm:text-sm">
              L’excellence au cœur de vos besoins
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAContact;