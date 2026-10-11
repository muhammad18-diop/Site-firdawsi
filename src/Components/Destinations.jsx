import { ArrowUpRight, MapPin, Globe2 } from "lucide-react";

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

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#123B5D] md:text-5xl lg:text-6xl">
              Nos destinations
              <span className="text-sky-500">.</span>
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
              className={`group relative block h-[360px] overflow-hidden bg-[#123B5D] ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={destination.image}
                alt={`Destination : ${destination.nom}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071C30]/90 via-[#123B5D]/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="text-[10px] font-bold tracking-[0.22em] text-sky-300">
                  {destination.region}
                </span>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {destination.nom}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition group-hover:border-white group-hover:bg-white group-hover:text-[#123B5D]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="mt-4 h-px w-full bg-white/30" />
                <p className="mt-3 text-xs font-medium text-white/80">
                  Découvrir cette destination
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Autres destinations */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col justify-between gap-5 border-b border-gray-200 pb-7 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Globe2 size={19} className="text-sky-500" />
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
                <h4 className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4 text-lg font-bold text-[#123B5D]">
                  {region.nom}
                  <span className="text-sm font-medium text-gray-400">
                    {String(region.pays.length).padStart(2, "0")}
                  </span>
                </h4>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {region.pays.map((pays) => (
                    <li
                      key={pays}
                      className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#123B5D]"
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

        {/* Mention de fin discrète */}
        <div className="flex items-start gap-3 border-t border-gray-200 pt-6">
          <MapPin size={17} className="mt-1 shrink-0 text-sky-500" />
          <p className="text-xs leading-6 text-gray-500">
            Les destinations présentées sont indicatives. Les services
            disponibles dépendent du pays et de la nature de votre projet.
            Contactez-nous pour vérifier les possibilités d'accompagnement.
          </p>
        </div>

      </div>
    </section>
  );
}

export default NosDestinations;