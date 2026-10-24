
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    title: "Téléphone",
    description: "Échangeons directement sur votre projet.",
    value: "+221 78 315 20 94",
    icon: Phone,
    href: "tel:+221783152094",
  },
  {
    title: "WhatsApp",
    description: "Une question ? Écrivez-nous directement.",
    value: "Discuter sur WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/221783152094",
  },
  {
    title: "E-mail",
    description: "Transmettez-nous votre demande par écrit.",
    value: "firdawsicg@gmail.com",
    icon: Mail,
    href: "mailto:firdawsicg@gmail.com",
  },
];

export default function CoordonneesContact() {
  return (
    <section
      id="coordonnees-contact"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Restons en contact
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Nos coordonnées
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Besoin d'informations sur nos services de voyage,
            d'immobilier ou d'assurance ? Notre équipe est à votre
            écoute pour comprendre vos besoins et vous accompagner
            dans vos projets.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Informations de contact */}
          <div className="divide-y divide-slate-200">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.title === "WhatsApp" ? "_blank" : undefined
                  }
                  rel={
                    contact.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#071B3A] text-sky-300 transition duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#071B3A]">
                      {contact.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {contact.description}
                    </p>

                    <p className="mt-2 break-words text-sm font-semibold text-sky-700">
                      {contact.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-600"
                  />
                </a>
              );
            })}
          </div>

          {/* Informations pratiques */}
          <div className="relative overflow-hidden rounded-2xl bg-[#071B3A] p-7 text-white sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-sky-400/20"
            />

            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-sky-400/20"
            />

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
                Informations pratiques
              </span>

              <h3 className="mt-4 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">
                À vos côtés pour chaque projet.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Nous privilégions une approche fondée sur l'écoute,
                le conseil et un accompagnement adapté à vos attentes.
              </p>

              <div className="mt-9 space-y-7">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={22}
                    className="mt-1 shrink-0 text-sky-300"
                  />

                  <div>
                    <h4 className="font-semibold">Localisation</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock
                    size={22}
                    className="mt-1 shrink-0 text-sky-300"
                  />

                  <div>
                    <h4 className="font-semibold">Horaires d'ouverture</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Du lundi au vendredi
                      <br />
                      De 09 h à 18 h
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#formulaire-contact"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-sky-500 px-5 py-4 font-bold text-white transition hover:bg-sky-400 sm:w-auto"
              >
                Envoyer une demande
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
