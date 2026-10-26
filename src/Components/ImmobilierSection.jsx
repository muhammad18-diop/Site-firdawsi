
import {
  House,
  KeyRound,
  MapPinned,
  Building2,
  ClipboardCheck,
  ChartNoAxesCombined,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const prestationsImmobilier = [
  {
    id: "achat-vente",
    numero: "01",
    categorie: "Achat & vente",
    titre: "Trouvez le bien immobilier qui correspond à vos ambitions",
    description:
      "Vous souhaitez acheter votre première maison, acquérir un appartement ou vendre un bien ? Nous vous accompagnons dans la définition de vos besoins et la recherche d'une solution adaptée à votre projet.",
    avantages: [
      "Recherche selon vos critères et votre budget",
      "Accompagnement dans les différentes étapes",
      "Orientation dans la préparation du dossier",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Maison contemporaine avec jardin",
    Icon: House,
    lien: "/contact?service=achat-vente",
    bouton: "Parler de mon projet",
  },
  {
    id: "location",
    numero: "02",
    categorie: "Location immobilière",
    titre: "Le logement adapté à votre mode de vie",
    description:
      "Appartement, maison ou espace professionnel : nous vous accompagnons dans la recherche d'un bien correspondant à votre situation, à votre localisation préférée et à votre budget.",
    avantages: [
      "Recherche selon vos besoins",
      "Prise en compte de votre budget",
      "Orientation dans les démarches locatives",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Intérieur élégant d'un appartement moderne",
    Icon: KeyRound,
    lien: "/contact?service=location",
    bouton: "Trouver un logement",
  },
  {
    id: "terrains",
    numero: "03",
    categorie: "Terrains & foncier",
    titre: "Donnez vie à votre projet de construction",
    description:
      "Vous recherchez un terrain pour construire votre maison ou préparer un investissement ? Nous vous accompagnons dans la définition de vos critères et l'orientation de vos démarches.",
    avantages: [
      "Recherche selon la zone souhaitée",
      "Prise en compte de votre budget et de votre projet",
      "Orientation vers les vérifications à effectuer avant l'achat",
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Terrain dégagé dans un environnement naturel",
    Icon: MapPinned,
    lien: "/contact?service=terrains-foncier",
    bouton: "Rechercher un terrain",
  },
  {
    id: "gestion-locative",
    numero: "04",
    categorie: "Gestion locative",
    titre: "Valorisez votre bien et simplifiez sa gestion",
    description:
      "Propriétaire d'un appartement, d'une maison ou d'un immeuble ? Découvrez un accompagnement adapté à vos besoins pour faciliter le suivi de votre bien et de sa location.",
    avantages: [
      "Orientation sur les besoins de gestion du bien",
      "Accompagnement dans le suivi locatif",
      "Recherche de solutions adaptées aux propriétaires",
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    alt: "Maison résidentielle avec espaces extérieurs",
    Icon: Building2,
    lien: "/contact?service=gestion-locative",
    bouton: "Parler de mon bien",
  },
  {
    id: "accompagnement",
    numero: "05",
    categorie: "Conseil immobilier",
    titre: "Avancez dans votre projet avec une vision plus claire",
    description:
      "Un projet immobilier demande de la préparation. Nous vous aidons à clarifier vos besoins, à identifier les prochaines étapes et à mieux organiser vos démarches selon votre objectif.",
    avantages: [
      "Échange autour de votre projet",
      "Identification des étapes à anticiper",
      "Orientation selon votre situation",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Documents et notes préparés sur un bureau",
    Icon: ClipboardCheck,
    lien: "/contact?service=conseil-immobilier",
    bouton: "Demander un accompagnement",
  },
  {
    id: "investissement",
    numero: "06",
    categorie: "Investissement immobilier",
    titre: "Réfléchissez à votre prochain investissement immobilier",
    description:
      "Vous envisagez d'investir dans un terrain, un appartement ou un bien locatif ? Nous vous accompagnons dans la clarification de vos objectifs et la recherche d'options cohérentes avec votre projet.",
    avantages: [
      "Définition de vos objectifs immobiliers",
      "Recherche selon vos critères et votre budget",
      "Orientation sur les points à examiner avant de décider",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Immeubles modernes dans un quartier urbain",
    Icon: ChartNoAxesCombined,
    lien: "/contact?service=investissement-immobilier",
    bouton: "Étudier mon projet",
  },
];

export default function ImmobilierServices() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Présentation */}
      <section className="px-6 pb-16 pt-16 sm:pt-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            <span className="h-px w-8 bg-sky-500" />
            Nos services immobiliers
            <span className="h-px w-8 bg-sky-500" />
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
            Votre projet immobilier mérite un accompagnement à la hauteur.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Achat, vente, location, terrain ou investissement :
            FIRDAWSI CONSULTING GROUP vous accompagne dans la préparation
            de votre projet immobilier, selon vos besoins et vos objectifs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {prestationsImmobilier.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[#123B5D] transition duration-300 hover:border-sky-500 hover:bg-sky-500/5"
              >
                {service.categorie}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Les six prestations */}
      <section
        id="services-immobilier"
        className="px-6 pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mx-auto max-w-screen-xl space-y-24 lg:space-y-32">
          {prestationsImmobilier.map((service, index) => {
            const Icon = service.Icon;
            const imageAGauche = index % 2 !== 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`relative ${
                    imageAGauche
                      ? "lg:order-1"
                      : "lg:order-2 lg:translate-y-12"
                  }`}
                >
                  <div className="group relative h-[300px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[380px] lg:h-[420px]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/80 via-[#071D30]/10 to-transparent" />

                    <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-[#071D30]/50 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                      {service.numero} / 06
                    </span>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-md">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                          FIRDAWSI CONSULTING GROUP
                        </p>
                        <p className="mt-1 text-lg font-semibold sm:text-xl">
                          {service.categorie}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl bg-sky-500/15" />
                </div>

                {/* Texte */}
                <div
                  className={`relative py-4 lg:py-10 ${
                    imageAGauche
                      ? "lg:order-2"
                      : "lg:order-1 lg:translate-y-12"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                    {service.categorie}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-3xl lg:text-4xl">
                    {service.titre}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-7 h-px w-full bg-slate-200" />

                  <ul className="space-y-4">
                    {service.avantages.map((avantage) => (
                      <li
                        key={avantage}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-sky-600"
                        />
                        <span>{avantage}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={service.lien}
                      className="inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-sky-500"
                    >
                      {service.bouton}
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D] transition duration-300 hover:text-sky-600"
                    >
                      Poser une question
                      <ArrowRight size={17} />
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
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Construisons votre projet
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Quel est votre prochain projet immobilier ?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Parlez-nous de votre besoin. Nous échangerons avec vous sur
              les possibilités et les prochaines étapes à envisager.
            </p>
          </div>

          <a
            href="/contact?service=immobilier"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-sky-500 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#123B5D]"
          >
            Parlons de votre projet
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
