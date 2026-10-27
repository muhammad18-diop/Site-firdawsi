import { ArrowUpRight, MapPin, Globe2, Info } from "lucide-react";

const destinations = [
  {
    nom: "France",
    region: "EUROPE",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
  },
  {
    nom: "Canada",
    region: "AMÉRIQUE DU NORD",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",
  },
  {
    nom: "Émirats arabes unis",
    region: "MOYEN-ORIENT",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    nom: "Turquie",
    region: "EUROPE & ASIE",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",
  },
];

const regions = [
  {
    nom: "Europe",
    pays: [
      "Allemagne",
      "Belgique",
      "Espagne",
      "Italie",
      "Portugal",
      "Pays-Bas",
      "Royaume-Uni",
      "Suisse",
    ],
  },
  {
    nom: "Amérique",
    pays: [
      "États-Unis",
      "Brésil",
      "Mexique",
      "Argentine",
      "Cuba",
    ],
  },
  {
    nom: "Asie & Moyen-Orient",
    pays: [
      "Chine",
      "Japon",
      "Corée du Sud",
      "Inde",
      "Malaisie",
      "Thaïlande",
      "Qatar",
      "Arabie saoudite",
    ],
  },
];

function NosDestinations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Introduction */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-gray-200 pb-10 md:grid-cols-2 md:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
                Une ouverture sur le monde
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#123B5D] md:text-5xl lg:text-6xl">
              Nos destinations
              <span className="text-sky-600">.</span>
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-lg">
            <p className="text-base leading-8 text-gray-600 md:text-lg">
              Le monde offre de nombreuses possibilités. FIRDAWSI
              Consulting Group vous accompagne dans la préparation de
              vos projets de voyage, avec une approche attentive à vos
              besoins et à votre destination.
            </p>
          </div>
        </div>

        {/* Destinations mises en avant */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <a
              href="/contact"
              key={destination.nom}
              className={`group relative block h-[380px] overflow-hidden rounded-2xl bg-[#071D30] shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={destination.image}
                alt={`Destination : ${destination.nom}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/95 via-[#071D30]/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:border-sky-400 group-hover:bg-sky-500 group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.22em] text-sky-300 uppercase">
                    {destination.region}
                  </span>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {destination.nom}
                    </h3>
                  </div>

                  <div className="my-3 h-px w-full bg-white/25" />
                  
                  {/* Libellé de bouton conforme aux recommandations (Section 7)[cite: 1] */}
                  <p className="text-xs font-semibold text-sky-200 transition group-hover:text-white">
                    Vérifier les possibilités pour ma destination →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Autres destinations (votre liste complète par région) */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col justify-between gap-5 border-b border-gray-200 pb-7 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Globe2 size={19} className="text-sky-600" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#123B5D]">
                  Notre couverture géographique
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#123B5D] md:text-3xl">
                Nos autres destinations
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Découvrez une sélection de pays en Europe, en Amérique,
              en Asie et au Moyen-Orient.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:gap-12">
            {regions.map((region) => (
              <div key={region.nom}>
                <h4 className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4 text-lg font-bold text-[#071D30]">
                  {region.nom}
                  <span className="text-sm font-medium text-gray-400">
                    {String(region.pays.length).padStart(2, "0")}
                  </span>
                </h4>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {region.pays.map((pays) => (
                    <li
                      key={pays}
                      className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#071D30]"
                    >
                      <MapPin
                        size={14}
                        className="shrink-0 text-sky-500"
                      />
                      <span>{pays}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Avertissement réglementaire et de non-garantie (Section 7)[cite: 1] */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-sky-100 bg-sky-50/60 p-5 text-gray-700">
          <Info size={20} className="mt-0.5 shrink-0 text-sky-600" />
          <p className="text-xs leading-6 text-gray-600 md:text-sm">
            <strong className="font-semibold text-[#071D30]">Information importante :</strong> Les destinations présentées sont indicatives et dépendent de la nature de votre projet. FCG fournit des conseils et un accompagnement adaptés, sans garantir la délivrance de visas ni l'entrée dans les pays concernés. Contactez-nous pour vérifier les possibilités réelles d'accompagnement.
          </p>
        </div>

      </div>
    </section>
  );
}

export default NosDestinations;