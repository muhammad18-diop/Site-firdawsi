
import { Star, Quote, ArrowUpRight } from "lucide-react";

const temoignages = [
  {
    nom: "Client satisfait",
    role: "Accompagnement et conseil",
    initiales: "C",
    avis: "Une équipe à l’écoute, qui prend le temps de comprendre les besoins et de proposer un accompagnement adapté.",
  },
  {
    nom: "Client accompagné",
    role: "Orientation et démarches",
    initiales: "A",
    avis: "J’ai apprécié la qualité des échanges, la disponibilité et les explications apportées tout au long des démarches.",
  },
  {
    nom: "Partenaire professionnel",
    role: "Conseil et services",
    initiales: "P",
    avis: "Une approche professionnelle et une réelle volonté de trouver des solutions adaptées aux attentes exprimées.",
  },
];

function Temoignages() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            <span className="h-px w-8 bg-sky-500" />
            Témoignages
            <span className="h-px w-8 bg-sky-500" />
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
            La confiance au cœur de
            <span className="text-sky-600"> nos relations.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            La qualité de notre accompagnement repose sur l’écoute, la
            proximité et l’attention portée à chaque projet.
          </p>
        </div>

        {/* Cartes des témoignages */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {temoignages.map((temoignage) => (
            <article
              key={temoignage.nom}
              className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((etoile) => (
                    <Star
                      key={etoile}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <Quote
                  size={34}
                  className="text-sky-100 transition-colors group-hover:text-sky-200"
                  fill="currentColor"
                />
              </div>

              <p className="mt-6 flex-1 text-base leading-8 text-slate-600">
                « {temoignage.avis} »
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123B5D] text-sm font-bold text-white">
                  {temoignage.initiales}
                </div>

                <div>
                  <h3 className="font-bold text-[#123B5D]">
                    {temoignage.nom}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {temoignage.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Appel à l'action */}
        
      </div>
    </section>
  );
}

export default Temoignages;
