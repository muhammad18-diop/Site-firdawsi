
import {
  ArrowUpRight,
  Plane,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "voyages",
    number: "01",
    title: "Voyages & mobilité",
    subtitle: "Donnez vie à vos projets de voyage",
    description:
      "Bénéficiez d’un accompagnement dans la préparation de vos démarches de voyage, la constitution de vos dossiers et l’organisation de votre projet.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    icon: Plane,
    features: [
      "Accompagnement dans les démarches de visa",
      "Conseils et préparation de dossiers",
      "Orientation selon votre destination",
    ],
    link: "/services/voyages",
    label: "Découvrir nos services voyage",
  },
  {
    id: "immobilier",
    number: "02",
    title: "Immobilier",
    subtitle: "Trouvez un bien adapté à vos besoins",
    description:
      "Explorez des solutions immobilières pour vos projets de location, d’acquisition ou de recherche de logement, avec un accompagnement adapté à vos attentes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
    icon: Building2,
    features: [
      "Recherche et orientation immobilière",
      "Accompagnement dans votre projet",
      "Solutions adaptées à vos besoins",
    ],
    link: "/services/immobilier",
    label: "Découvrir nos services immobiliers",
  },
  {
    id: "assurance",
    number: "03",
    title: "Assurance",
    subtitle: "Protégez ce qui compte pour vous",
    description:
      "Bénéficiez d’une orientation dans vos démarches d’assurance afin d’identifier les solutions correspondant à votre situation et à vos besoins.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    icon: ShieldCheck,
    features: [
      "Orientation dans vos démarches",
      "Présentation des solutions adaptées",
      "Accompagnement selon vos besoins",
    ],
    link: "/services/assurance",
    label: "Découvrir nos services d’assurance",
  },
];

function ServicesCard() {
  return (
    <main className="bg-white">
      {/* Introduction */}
      <section className="px-6 pb-12 pt-16 sm:pt-20 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              <span className="h-px w-10 bg-sky-500" />
              Nos domaines d’expertise
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#123B5D] sm:text-5xl lg:text-6xl">
              Des solutions pensées
              <span className="text-sky-500"> pour vos projets.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Voyage, immobilier et assurance : FIRDAWSI CONSULTING GROUP
              vous accompagne dans vos démarches avec une approche fondée
              sur l’écoute, le conseil et la recherche de solutions adaptées.
            </p>
          </div>

          {/* Indicateurs des trois domaines */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-y border-slate-200 py-5">
            {[
              "Voyages & mobilité",
              "Solutions immobilières",
              "Assurance & protection",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-[#123B5D]"
              >
                <CheckCircle2 size={18} className="text-sky-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards des services */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl hover:shadow-[#123B5D]/10"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden sm:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/85 via-[#071D30]/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#071D30]/50 px-4 py-2 text-xs font-bold tracking-[0.15em] text-white backdrop-blur-md">
                    DOMAINE {service.number}
                  </span>

                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <p className="text-sm font-semibold text-white">
                      FIRDAWSI CONSULTING GROUP
                    </p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-2xl font-bold text-[#123B5D] transition group-hover:text-sky-600">
                    {service.title}
                  </h2>

                  <p className="mt-2 font-semibold text-sky-600">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-6 h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-sky-500"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton en bas de la card */}
                  <div className="mt-auto pt-8">
                    <a
                      href={service.link}
                      aria-label={service.label}
                      className="inline-flex w-full items-center justify-between gap-3 rounded-xl bg-[#123B5D] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600"
                    >
                      <span>En savoir plus</span>
                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="bg-[#071D30] px-6 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Parlons de votre projet
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Vous avez un projet en tête ?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Présentez-nous votre besoin et échangeons sur les solutions
              qui pourraient vous convenir.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-bold text-white transition hover:bg-sky-400"
          >
            Demander un accompagnement
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ServicesCard;
