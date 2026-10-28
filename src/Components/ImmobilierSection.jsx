
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  KeyRound,
  House,
  MessageCircle,
  HardHat,
  ShieldCheck,
  ClipboardCheck,
  Building2,
} from "lucide-react";

const servicesImmobiliers = [
  {
    id: "location",
    numero: "01",
    categorie: "Location immobilière",
    titre: "Trouvez un espace qui vous ressemble.",
    description:
      "Vous recherchez un appartement, une maison ou un local professionnel ? FIRDAWSI vous accompagne dans votre recherche afin de trouver un bien adapté à vos besoins, à votre mode de vie et à votre budget.",
    points: [
      "Recherche de biens selon vos critères",
      "Organisation des visites",
      "Accompagnement dans les démarches locatives",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Maison moderne proposée à la location",
    icon: KeyRound,
    label: "Découvrir nos solutions de location",
  },
  {
    id: "vente",
    numero: "02",
    categorie: "Vente immobilière",
    titre: "Achetez ou vendez en toute confiance.",
    description:
      "Que vous souhaitiez acquérir un bien immobilier ou vendre votre propriété, nous vous accompagnons à chaque étape. Notre objectif est de faciliter votre démarche et de vous aider à avancer avec une meilleure visibilité sur votre projet.",
    points: [
      "Recherche de biens correspondant à votre projet d'achat",
      "Mise en relation entre acheteurs et vendeurs",
      "Accompagnement tout au long de la transaction",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Intérieur contemporain d'une propriété immobilière",
    icon: House,
    label: "Parlons de votre projet immobilier",
  },
  {
    id: "consultance",
    numero: "03",
    categorie: "Consultance immobilière",
    titre: "Prenez les bonnes décisions pour votre projet.",
    description:
      "Un projet immobilier nécessite réflexion, préparation et conseils adaptés. FIRDAWSI vous aide à clarifier vos besoins, à étudier les possibilités et à identifier les solutions cohérentes avec vos objectifs.",
    points: [
      "Conseils adaptés à votre situation",
      "Orientation dans vos démarches immobilières",
      "Accompagnement dans l'étude de votre projet",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Professionnels préparant un projet autour d'une table",
    icon: ClipboardCheck,
    label: "Demander un accompagnement",
  },
  {
    id: "construction",
    numero: "04",
    categorie: "Construction",
    titre: "Donnez vie à votre projet de construction.",
    description:
      "Vous envisagez de construire une maison ou un bâtiment ? Nous vous accompagnons dans la préparation de votre projet et dans l'identification des démarches et des interlocuteurs nécessaires à sa réalisation.",
    points: [
      "Écoute et clarification de vos besoins",
      "Orientation dans la préparation du projet",
      "Accompagnement dans les différentes étapes",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Projet architectural et construction de bâtiment",
    icon: HardHat,
    label: "Étudions votre projet de construction",
  },
];

function ServiceImmobilier({ service, index }) {
  const Icon = service.icon;
  const imageAGauche = index % 2 === 1;

  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-b border-slate-200 py-16 md:py-24 last:border-b-0"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageAGauche ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image du service */}
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-sm bg-sky-100 md:-bottom-5 md:-left-5" />

          <div className="relative overflow-hidden rounded-sm bg-slate-100">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px] lg:h-[440px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white md:bottom-7 md:left-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white text-[#123B5D]">
                <Icon size={25} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  FIRDAWSI
                </p>
                <p className="text-sm font-medium">
                  {service.categorie}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 z-10 flex h-16 w-16 items-center justify-center border-4 border-white bg-[#123B5D] text-xl font-bold text-white md:-right-5 md:-top-5 md:h-20 md:w-20 md:text-2xl">
            {service.numero}
          </div>
        </div>

        {/* Contenu du service */}
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              {service.categorie}
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl xl:text-[42px]">
            {service.titre}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {service.description}
          </p>

          <div className="my-8 h-px w-full bg-slate-200" />

          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#123B5D]">
            Notre accompagnement
          </h3>

          <ul className="space-y-4">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-sky-600"
                />
                <span className="text-sm leading-6 text-slate-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="inline-flex items-center gap-3  mt-6 rounded-lg bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#123B5D] focus:outline-none focus:ring-4 focus:ring-sky-600/30"
          >
            <span>{service.label}</span>
            <ArrowUpRight
              size={19}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ImmobilierServices() {
  return (
    <section
      id="services-immobilier"
      className="overflow-hidden bg-white"
    >
      {/* Introduction */}
      <div className="bg-slate-50 px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-sky-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                  Nos expertises immobilières
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-5xl lg:text-6xl">
                Votre projet immobilier,
                <span className="mt-2 block text-sky-600">
                  notre accompagnement.
                </span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Location, vente, consultance et construction :
                FIRDAWSI CONSULTING GROUP vous accompagne dans
                vos démarches avec une approche fondée sur l'écoute,
                le conseil et la recherche de solutions adaptées.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#123B5D] transition-colors hover:text-sky-600"
              >
                Échangeons sur votre projet
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Accès rapide aux quatre services */}
          <div className="mt-12 grid grid-cols-2 border-l border-t border-slate-200 md:grid-cols-4">
            {servicesImmobiliers.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex min-h-28 items-center gap-3 border-b border-r border-slate-200 bg-white p-4 transition-colors hover:bg-[#123B5D] sm:gap-4 sm:p-5"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="shrink-0 text-sky-600 transition-colors group-hover:text-sky-300"
                  />
                  <span className="text-sm font-semibold text-[#123B5D] transition-colors group-hover:text-white">
                    {service.categorie}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-slate-400 transition-colors group-hover:text-white"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Les quatre services */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {servicesImmobiliers.map((service, index) => (
          <ServiceImmobilier
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Appel à l'action final */}
      <div className="bg-[#071D30] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Parlons de votre projet
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Un projet immobilier en tête ?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Notre équipe est à votre écoute pour discuter de vos
              besoins et vous orienter vers un accompagnement adapté.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-sky-500 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-sky-600"
          >
            <MessageCircle size={19} />
            Contacter FIRDAWSI
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
