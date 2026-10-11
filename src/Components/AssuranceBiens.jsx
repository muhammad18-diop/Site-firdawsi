
import {
  ShieldCheck,
  House,
  CarFront,
  Building2,
  PackageCheck,
  ArrowUpRight,
  CheckCircle2,
  Umbrella,
} from "lucide-react";

const assurances = [
  {
    icon: House,
    titre: "Assurance habitation",
    description:
      "Protégez votre logement et vos biens contre les risques couverts par votre contrat.",
  },
  {
    icon: CarFront,
    titre: "Assurance automobile",
    description:
      "Découvrez des solutions de couverture adaptées à votre véhicule et à vos besoins.",
  },
  {
    icon: Building2,
    titre: "Assurance professionnelle",
    description:
      "Préservez vos locaux, vos équipements et vos activités professionnelles.",
  },
  {
    icon: PackageCheck,
    titre: "Assurance des biens matériels",
    description:
      "Étudiez les possibilités de protection de vos équipements et de vos biens de valeur.",
  },
];

function AssuranceBiens() {
  return (
    <section
      id="assurance-biens"
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
                Protection & sérénité
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#123B5D] md:text-5xl lg:text-6xl">
              Assurance des biens
              <span className="text-sky-500">.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-600 lg:justify-self-end md:text-lg">
            Vos biens représentent une valeur importante. FIRDAWSI
            Consulting Group vous accompagne dans l’identification de
            solutions d’assurance adaptées à vos besoins, afin de mieux
            comprendre les garanties et les possibilités de couverture.
          </p>
        </div>

        {/* Bannière principale */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#071D30]">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative grid grid-cols-1 items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400 text-[#123B5D]">
                <ShieldCheck size={30} strokeWidth={1.8} />
              </div>

              <h3 className="max-w-lg text-2xl font-bold leading-snug text-white md:text-4xl">
                Protégez ce qui compte pour vous.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                Que vous soyez un particulier ou un professionnel,
                découvrez les différentes options de couverture pour
                vos biens et préparez votre demande en toute confiance.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-sky-400 px-6 py-3.5 text-sm font-bold text-[#123B5D] transition hover:bg-sky-300"
              >
                Demander des informations
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Points forts */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Solutions selon vos besoins",
                "Informations sur les garanties",
                "Accompagnement personnalisé",
                "Orientation dans vos démarches",
              ].map((element) => (
                <div
                  key={element}
                  className="flex min-h-24 items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-sky-300"
                  />
                  <span className="text-sm font-medium leading-6 text-white">
                    {element}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Types d'assurance */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              Nos domaines de couverture
            </p>

            <h3 className="text-2xl font-bold text-[#123B5D] md:text-3xl">
              Des solutions pour différents types de biens
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((assurance) => {
              const Icon = assurance.icon;

              return (
                <article
                  key={assurance.titre}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-[#123B5D]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#123B5D] transition-colors group-hover:bg-[#123B5D] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-[#123B5D]">
                    {assurance.titre}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {assurance.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#123B5D] transition-colors hover:text-sky-600"
                  >
                    En savoir plus
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        {/* Note informative */}
        

      </div>
    </section>
  );
}

export default AssuranceBiens;
