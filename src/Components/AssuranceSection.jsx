
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CarFront,
  Plane,
  House,
  HardHat,
  Flame,
  Truck,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";

const servicesAssistance = [
  {
    id: "automobile",
    numero: "01",
    categorie: "Assistance automobile",
    titre: "Prenez la route avec plus de sérénité.",
    description:
      "Votre véhicule est essentiel à vos déplacements. FIRDAWSI vous accompagne dans la recherche de solutions d'assistance adaptées à vos besoins, notamment en cas de panne, d'immobilisation ou d'incident sur la route.",
    points: [
      "Orientation en cas de panne ou d'incident",
      "Recherche de solutions de dépannage et de remorquage",
      "Accompagnement dans vos démarches d'assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Véhicule sur une route",
    icon: CarFront,
  },
  {
    id: "voyage",
    numero: "02",
    categorie: "Assistance voyage",
    titre: "Voyagez l'esprit plus tranquille.",
    description:
      "Un imprévu peut survenir avant ou pendant un déplacement. Nous vous orientons vers des solutions adaptées à votre destination et à votre situation afin de préparer votre voyage dans de meilleures conditions.",
    points: [
      "Orientation vers des solutions d'assistance voyage",
      "Informations sur les garanties et les démarches",
      "Accompagnement selon votre destination et vos besoins",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Avion en vol dans le ciel",
    icon: Plane,
  },
  {
    id: "habitation",
    numero: "03",
    categorie: "Assistance habitation",
    titre: "Protégez votre foyer et vos biens.",
    description:
      "Votre logement mérite une attention particulière. FIRDAWSI vous accompagne dans l'identification de solutions adaptées pour mieux protéger votre habitation et faire face aux imprévus susceptibles d'affecter votre domicile.",
    points: [
      "Orientation vers des solutions de protection du logement",
      "Informations sur les risques et garanties possibles",
      "Accompagnement dans vos démarches en cas de sinistre",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Maison moderne entourée de verdure",
    icon: House,
  },
  {
    id: "chantier",
    numero: "04",
    categorie: "Assistance chantier",
    titre: "Sécurisez vos projets de construction.",
    description:
      "Les travaux de construction comportent des risques humains, matériels et financiers. Nous vous accompagnons dans l'identification des solutions de protection pertinentes pour votre chantier, selon la nature de votre projet.",
    points: [
      "Orientation sur les risques liés au chantier",
      "Recherche de solutions de protection adaptées",
      "Accompagnement dans la compréhension des garanties",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Plans d'architecture pour un projet de construction",
    icon: HardHat,
  },
  {
    id: "incendie",
    numero: "05",
    categorie: "Assistance incendie",
    titre: "Anticipez les risques pour mieux protéger vos biens.",
    description:
      "Un incendie peut avoir des conséquences importantes sur un logement, un commerce ou une entreprise. FIRDAWSI vous oriente vers des solutions de couverture adaptées aux risques et aux biens que vous souhaitez protéger.",
    points: [
      "Orientation vers les garanties incendie disponibles",
      "Prise en compte des biens et locaux à protéger",
      "Accompagnement dans les démarches liées à un sinistre",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Immeuble professionnel en milieu urbain",
    icon: Flame,
  },
  {
    id: "transport",
    numero: "06",
    categorie: "Assistance transport",
    titre: "Accompagnez vos déplacements et vos marchandises.",
    description:
      "Le transport de personnes et de marchandises nécessite une préparation adaptée aux risques. Nous vous aidons à identifier les solutions de protection correspondant à votre activité et à la nature de vos transports.",
    points: [
      "Orientation pour le transport de marchandises",
      "Recherche de solutions adaptées à votre activité",
      "Informations sur les garanties et les responsabilités",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Camion de transport de marchandises sur la route",
    icon: Truck,
  },
  {
    id: "maladie-accident",
    numero: "07",
    categorie: "Assistance maladie et accident",
    titre: "Votre santé et votre sécurité comptent.",
    description:
      "Face à une maladie ou à un accident, disposer d'une protection adaptée peut faire la différence. FIRDAWSI vous oriente vers des solutions d'assistance et de couverture à étudier selon votre situation personnelle ou professionnelle.",
    points: [
      "Orientation vers des solutions de couverture santé",
      "Recherche de protections contre les conséquences d'un accident",
      "Informations sur les garanties et leurs conditions",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Professionnel de santé dans un environnement médical",
    icon: HeartPulse,
  },
  {
    id: "scolaire",
    numero: "08",
    categorie: "Assistance scolaire",
    titre: "Contribuez à la protection de vos enfants à l'école.",
    description:
      "La vie scolaire comporte des activités et des déplacements qui peuvent exposer les élèves à certains risques. Nous vous accompagnons dans la recherche de solutions adaptées pour mieux protéger les enfants durant leur parcours scolaire.",
    points: [
      "Orientation vers des solutions de protection scolaire",
      "Informations sur les accidents et responsabilités couverts",
      "Accompagnement dans la compréhension des garanties",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Élèves dans une salle de classe",
    icon: GraduationCap,
  },
  {
    id: "multirisque-professionnelle",
    numero: "09",
    categorie: "Multirisque professionnelle",
    titre: "Protégez votre activité et votre outil de travail.",
    description:
      "Un commerce, un bureau ou une entreprise doit pouvoir faire face aux imprévus. FIRDAWSI vous accompagne dans l'identification des risques de votre activité et dans la recherche d'une couverture adaptée à vos locaux, équipements et responsabilités.",
    points: [
      "Étude des besoins de protection de votre activité",
      "Orientation vers des garanties adaptées aux locaux et équipements",
      "Accompagnement dans la compréhension des risques professionnels",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Espace de travail professionnel moderne",
    icon: BriefcaseBusiness,
  },
];

function ServiceAssistance({ service, index }) {
  const Icon = service.icon;
  const imageAGauche = index % 2 === 1;

  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-b border-slate-200 py-16 last:border-b-0 md:py-24"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageAGauche ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visuel du service */}
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-28 w-28 bg-sky-100 md:-bottom-5 md:-left-5" />

          <div className="relative overflow-hidden bg-slate-100">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px] lg:h-[440px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/75 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white md:bottom-7 md:left-7">
              <div className="flex h-12 w-12 items-center justify-center bg-white text-[#123B5D]">
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

        {/* Présentation du service */}
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
            href={`/contact?service=${service.id}`}
            className="group mt-9 inline-flex w-full items-center justify-between gap-4 border border-[#123B5D] px-5 py-4 text-sm font-semibold text-[#123B5D] transition-all duration-300 hover:bg-[#123B5D] hover:text-white sm:w-auto sm:min-w-[280px]"
          >
            <span>Demander des informations</span>
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

export default function AssistanceServices() {
  return (
    <section id="services-assistance" className="overflow-hidden bg-white">
      {/* En-tête */}
      <div className="bg-slate-50 px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-sky-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                  Nos solutions d'assistance
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-5xl lg:text-6xl">
                Une protection adaptée
                <span className="mt-2 block text-sky-600">
                  à chaque besoin.
                </span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Automobile, voyage, habitation, chantier, incendie,
                transport, santé, scolaire et protection professionnelle :
                FIRDAWSI CONSULTING GROUP vous accompagne dans la recherche
                de solutions adaptées à votre situation.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#123B5D] transition-colors hover:text-sky-600"
              >
                Échanger avec notre équipe
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
       
        </div>
      </div>

      {/* Présentation détaillée des neuf services */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {servicesAssistance.map((service, index) => (
          <ServiceAssistance
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Appel à l'action */}
      <div className="bg-[#071D30] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Votre tranquillité, notre priorité
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Besoin d'une solution d'assistance ?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Parlons de votre situation. Notre équipe vous aidera à
              identifier les solutions à étudier selon vos besoins.
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
