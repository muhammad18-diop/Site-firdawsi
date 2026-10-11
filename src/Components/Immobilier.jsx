
import {
  Building2,
  House,
  KeyRound,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: House,
    number: "01",
    title: "Immobilier résidentiel",
    description:
      "Un accompagnement dans la recherche de maisons, d’appartements et de biens adaptés à vos besoins.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Immobilier professionnel",
    description:
      "Des solutions pour identifier des bureaux, locaux commerciaux et espaces adaptés à votre activité.",
  },
  {
    icon: KeyRound,
    number: "03",
    title: "Achat et location",
    description:
      "Une assistance personnalisée pour vous orienter dans vos démarches d’achat ou de location.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Investissement immobilier",
    description:
      "Un accompagnement pour étudier les opportunités immobilières selon vos objectifs et vos critères.",
  },
];

const avantages = [
  "Recherche adaptée à vos critères",
  "Accompagnement personnalisé",
  "Orientation dans vos démarches",
  "Échanges transparents et professionnels",
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
          <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            <span className="h-px w-9 bg-sky-500" />
            Immobilier & accompagnement
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-5xl lg:text-6xl">
            Trouvez le bien qui
            <span className="text-sky-600"> vous correspond.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Que vous recherchiez un logement, un espace professionnel ou une
            opportunité immobilière, FIRDAWSI Consulting Group vous accompagne
            dans votre démarche avec une approche personnalisée.
          </p>
        </div>
      </div>

      {/* BANNIÈRE PRINCIPALE */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative isolate min-h-[430px] overflow-hidden rounded-2xl bg-[#0b2942] sm:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
            alt="Intérieur contemporain d’une propriété"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#09243b]/95 via-[#09243b]/75 to-[#09243b]/15" />

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
                Bénéficiez d’une orientation claire et d’un accompagnement
                adapté à vos attentes.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-sky-500 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-sky-400"
              >
                Parler de votre projet
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 hidden h-2 w-1/3 bg-sky-500 sm:block" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
              Nos domaines d’intervention
            </span>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#123B5D] sm:text-4xl">
              Des solutions immobilières adaptées
            </h3>
          </div>

          <p className="max-w-lg leading-7 text-slate-600">
            Un accompagnement qui tient compte de votre situation, de vos
            priorités et de la nature de votre projet.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center bg-sky-50 text-[#123B5D] transition duration-300 group-hover:bg-[#123B5D] group-hover:text-white">
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
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-[#123B5D]"
                >
                  En savoir plus
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

      {/* ACCOMPAGNEMENT */}
      <div className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
              Un accompagnement de confiance
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl">
              Chaque projet mérite une attention particulière.
            </h3>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Nous prenons le temps de comprendre vos attentes afin de vous
              orienter vers des solutions cohérentes avec vos besoins et vos
              objectifs.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Contactez notre équipe
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <h4 className="text-xl font-bold text-[#123B5D]">
              Notre engagement
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
                  Parlons de votre projet afin d’identifier les prochaines
                  étapes adaptées à votre situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Immobilier;
