
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

function NousTrouver() {
  const adresse = "Dakar, Sénégal";

  return (
    <section
      id="nous-trouver"
      className="bg-[#F7F8FA] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">

        {/* En-tête */}
        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Retrouvez-nous
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#071D30] md:text-6xl">
              Nous trouver
              <span className="text-sky-500">.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-600 md:justify-self-end">
            Une question, un projet ou besoin d’un accompagnement ?
            Prenons le temps d’échanger sur vos besoins.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-5">

          {/* Informations */}
          <div className="flex flex-col justify-between bg-[#071D30] px-7 py-10 text-white sm:px-10 lg:col-span-2 lg:px-12 lg:py-14">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                Notre localisation
              </p>

              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                Parlons de votre prochain projet.
              </h3>

              <p className="mb-10 text-sm leading-7 text-slate-300">
                Notre équipe vous accompagne dans vos projets de voyage,
                d’immobilier et d’assurance.
              </p>

              <div className="space-y-8">
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <MapPin
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
                      Adresse
                    </p>
                    <p className="text-sm leading-6">{adresse}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Zac Mbao, à coté du rond point SIPRES
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <Clock
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
                      Horaires
                    </p>
                    <p className="text-sm leading-6">
                      Lundi – Vendredi
                      <br />
                      09h00 – 18h00
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <Phone
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
                      Téléphone
                    </p>
                    <a
                      href="tel:+221783152094"
                      className="text-sm text-slate-200 transition hover:text-sky-400"
                    >
                      +221 78 315 20 94
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
                      E-mail
                    </p>
                    <a
                      href="mailto:firdawsicg@gmail.com"
                      className="break-all text-sm text-slate-200 transition hover:text-sky-400"
                    >
                      firdawsicg@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dakar%2C%20Senegal"
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex w-fit items-center gap-3 border-b border-sky-400 pb-3 text-sm font-semibold text-white transition hover:text-sky-300"
            >
              
              Ouvrir l’itinéraire
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Carte */}
          <div className="relative min-h-[380px] bg-slate-200 lg:col-span-3 lg:min-h-[620px]">
            <iframe
              title="Localisation de FIRDAWSI CONSULTING GROUP à Dakar"
              src="https://maps.google.com/maps?q=Dakar%2C%20Senegal&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 bg-white p-4 shadow-lg sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071D30] text-sky-400">
                <MapPin size={24} />
              </div>

              <div>
                <p className="font-semibold text-[#071D30]">
                  FIRDAWSI CONSULTING GROUP
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Dakar, Sénégal · Zac Mbao, à coté du rond point SIPRES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NousTrouver;
