import {
  ShieldCheck,
  House,
  CarFront,
  Building2,
  PackageCheck,
  ArrowUpRight,
  CheckCircle2,
  Info,
} from "lucide-react";

// Catégories conformes au cahier des charges (Section 9)[cite: 1]
const assurances = [
  {
    icon: House,
    titre: "Assurance habitation",
    description:
      "Découvrir les options et demander des informations pour protéger votre logement et vos biens.",
  },
  {
    icon: CarFront,
    titre: "Assurance automobile",
    description:
      "Être orienté vers des solutions de couverture adaptées à votre véhicule et à votre situation.",
  },
  {
    icon: Building2,
    titre: "Assurance professionnelle",
    description:
      "Explorer les solutions pour préserver vos locaux, vos équipements et vos activités.",
  },
  {
    icon: PackageCheck,
    titre: "Assurance des biens matériels",
    description:
      "Obtenir des conseils et étudier les possibilités de protection de vos équipements de valeur.",
  },
];

function AssuranceBiens() {
  return (
    <section
      id="assurance"
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

            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#123B5D] md:text-5xl lg:text-6xl">
              Assurance & protection
              <span className="text-sky-600">.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-600 lg:justify-self-end md:text-lg">
            Vos biens représentent une valeur importante. FIRDAWSI CONSULTING GROUP vous oriente vers des solutions d’assurance adaptées à votre situation et aux garanties disponibles[cite: 1].
          </p>
        </div>

        {/* Bannière principale */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#071D30]">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative grid grid-cols-1 items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400 text-[#071D30]">
                <ShieldCheck size={30} strokeWidth={1.8} />
              </div>

              <h3 className="max-w-lg text-2xl font-bold leading-snug text-white md:text-4xl">
                Protégez ce qui compte pour vous.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                Que vous soyez un particulier ou un professionnel, découvrez les options de couverture disponibles et bénéficiez d’un accompagnement de confiance[cite: 1].
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-sky-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-400"
              >
                Demander des informations
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Points forts */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Orientation vers des solutions adaptées",
                "Informations claires sur les garanties",
                "Accompagnement et conseil personnalisé",
                "Suivi rigoureux de vos démarches",
              ].map((element) => (
                <div
                  key={element}
                  className="flex min-h-24 items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-sky-400"
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

            <h3 className="text-2xl font-bold text-blue-950 md:text-3xl">
              Des solutions pour différents types de biens
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((assurance) => {
              const Icon = assurance.icon;

              return (
                <article
                  key={assurance.titre}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#071D30] transition-colors group-hover:bg-[#071D30] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h4 className="mt-6 text-lg font-bold text-[#071D30]">
                      {assurance.titre}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {assurance.description}
                    </p>
                  </div>

                  <a
                    href="/services/assurance"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition-colors hover:text-[#071D30]"
                  >
                    Découvrir les options
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

        {/* Note informative et réglementaire obligatoire (Section 9 & 14)[cite: 1] */}
        <div className="mt-12 flex items-start gap-3 rounded-xl border border-sky-100 bg-sky-50/60 p-5 text-gray-700">
          <Info size={20} className="mt-0.5 shrink-0 text-sky-600" />
          <p className="text-xs leading-6 text-gray-600 md:text-sm">
            <strong className="font-semibold text-[#071D30]">Avertissement légal :</strong> FCG intervient en tant qu'intermédiaire ou structure d'orientation pour présenter des solutions d'assurance adaptées via ses canaux autorisés, sans se substituer aux compagnies d'assurance. Les garanties et couvertures dépendent exclusivement des contrats souscrits auprès des assureurs partenaires.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AssuranceBiens;