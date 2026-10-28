
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const ADRESSE = "ZAC Mbao, rond-point Sipress, Dakar, Sénégal";

export default function LocalisationContact() {
  const adresseMaps = encodeURIComponent(ADRESSE);

  return (
    <section
      id="localisation"
      className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-[#123B5D]">
            <MapPin size={16} className="text-sky-500" />
            Notre localisation
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[#123B5D] sm:text-4xl">
            Retrouvez-nous à ZAC Mbao
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Vous souhaitez nous rencontrer ou échanger sur votre projet ?
            Retrouvez notre emplacement au rond-point Sipress et préparez
            votre itinéraire.
          </p>
        </div>

        {/* Carte et informations */}
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.5fr_0.8fr]">
          {/* Google Maps */}
          <div className="min-h-[320px] bg-slate-200 sm:min-h-[420px]">
            <iframe
              title="Localisation de FIRDAWSI CONSULTING GROUP à ZAC Mbao, rond-point Sipress"
              src={`https://maps.google.com/maps?q=${adresseMaps}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-[#123B5D]">
              <MapPin size={28} />
            </div>

            <h3 className="text-xl font-bold text-[#123B5D]">
              FIRDAWSI CONSULTING GROUP
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              <span className="font-semibold text-slate-800">
                ZAC Mbao, rond-point Sipress
              </span>
              <br />
              Dakar, Sénégal
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              Nous sommes à votre écoute pour vos besoins en voyages,
              immobilier et assurance.
            </p>

            <div className="my-7 h-px bg-slate-200" />

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${adresseMaps}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#123B5D] px-5 py-3.5 font-semibold text-white transition hover:bg-[#0B2B45] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
             
              Voir l’itinéraire
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
