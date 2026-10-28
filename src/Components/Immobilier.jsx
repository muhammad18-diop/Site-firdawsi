import {
  Building2,
  House,
  KeyRound,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Handshake,
  Info,
} from "lucide-react";

// Domaines de prestations conformes au cahier des charges (Section 8)[cite: 1]
const services = [
  {
    icon: House,
    number: "01",
    title: "Immobilier résidentiel",
    description:
      "Accompagnement et recherche de logements ou résidences adaptés à votre projet de vie.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Immobilier professionnel",
    description:
      "Recherche de bureaux, locaux commerciaux et espaces professionnels selon les besoins de votre activité.",
  },
  {
    icon: KeyRound,
    number: "03",
    title: "Achat et location",
    description:
      "Accompagnement personnalisé et conseils adaptés dans vos démarches d'acquisition ou de location selon les biens disponibles.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Investissement immobilier",
    description:
      "Orientation et présentation d'opportunités documentées pour vous guider selon vos objectifs et vos critères.",
  },
];

const avantages = [
  "Recherche adaptée à vos critères spécifiques",
  "Accompagnement et orientation personnalisés",
  "Transparence sur les démarches et conditions",
  "Échanges professionnels et suivi rigoureux",
];

function Immobilier() {
  return (
    <section
      id="immobilier"
      className="overflow-hidden bg-white text-slate-800"
    >
      {/* INTRODUCTION */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 lg:px-10 lg:pb-16 lg:pt-28">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-sm">
            <span className="h-px w-9 bg-sky-500" />
            Expertise immobilière
          </span>

          {/* Titre principal exact recommandé par le cahier de recommandations (Section 8)[cite: 1] */}
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#123B5D] sm:text-5xl lg:text-6xl">
            Trouvez le bien qui
            <span className="text-sky-600"> vous correspond.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Que vous recherchiez une résidence, un espace professionnel ou une opportunité immobilière, FIRDAWSI CONSULTING GROUP vous accompagne à chaque étape avec sérieux et clarté.
          </p>
        </div>
      </div>

      {/* BANNIÈRE PRINCIPALE */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative isolate min-h-[430px] overflow-hidden rounded-2xl bg-[#071D30] sm:min-h-[500px]">
          {/* Photographie de haute qualité d'un intérieur professionnel et lumineux (Section 12)[cite: 1] */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="Intérieur lumineux d'un bien immobilier professionnel"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071D30]/95 via-[#071D30]/80 to-[#071D30]/30" />

          <div className="flex min-h-[430px] items-center px-6 py-12 sm:min-h-[500px] sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                Votre projet, notre accompagnement
              </span>

              <h3 className="mt-7 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Construisons ensemble
                <br />
                votre prochain projet immobilier.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                Bénéficiez d’une orientation claire, d'un accompagnement sur mesure et de prestations concrètes et adaptées à vos attentes.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-sky-600 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-sky-500"
              >
                Parlons de votre projet
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-sky-500 sm:block" />
        </div>
      </div>

      {/* DOMAINES D'INTERVENTION */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 sm:text-sm">
              Prestations disponibles
            </span>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#123B5D] sm:text-4xl">
              Des solutions immobilières adaptées
            </h3>
          </div>

          <p className="max-w-lg leading-7 text-slate-600">
            Un accompagnement réaliste qui tient compte de votre situation, de vos objectifs et des biens disponibles[cite: 1].
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-50 text-[#071D30] transition duration-300 group-hover:bg-[#071D30] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h4 className="mt-7 text-xl font-bold text-[#123B5D]">
                  {service.title}
                </h4>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="/services/immobiliers"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-[#071D30]"
                >
                  Demander une information
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      {/* ENGAGEMENT & ACCOMPAGNEMENT */}
      <div className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 sm:text-sm">
              Transparence & Sérénité
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl">
              Chaque projet mérite une attention particulière.
            </h3>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Notre rôle est de vous guider à travers des informations claires et de vous proposer des options documentées correspondant à vos exigences[cite: 1].
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Contactez notre équipe
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <h4 className="text-xl font-bold text-[#071D30]">
              Notre engagement immobilier
            </h4>

            <div className="mt-7 space-y-6">
              {avantages.map((avantage) => (
                <div key={avantage} className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-sky-600"
                  />
                  <p className="text-sm leading-6 text-slate-700 sm:text-base">
                    {avantage}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-sky-600"
                />
                <p className="text-sm leading-6 text-slate-500">
                  Contactez-nous pour échanger sur vos besoins et vérifier les opportunités et mandats actuellement disponibles[cite: 1].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note de précaution explicite (Section 8 & 14)[cite: 1] */}
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
          <div className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white p-5 text-slate-600 shadow-sm">
            <Info size={20} className="mt-0.5 shrink-0 text-sky-600" />
            <p className="text-xs leading-6 text-slate-600 md:text-sm">
              <strong className="font-semibold text-[#071D30]">Avertissement :</strong> Les conseils et opportunités présentés dans le cadre de nos prestations d'orientation immobilière s'appuient sur des projets et biens réels documentés. FCG agit dans le cadre de mandats spécifiques sans garantie de rendement financier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Immobilier;