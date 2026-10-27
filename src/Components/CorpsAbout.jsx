import {
  ArrowRight,
  Heart,
  Handshake,
  Ear,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Plane,
  House,
  BriefcaseBusiness,
  Target,
  Globe2,
  CheckCircle2,
  Quote,
  Users,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "La confiance",
    description:
      "Construire des relations professionnelles basées sur la clarté, l’honnêteté et le respect des engagements.",
    icon: ShieldCheck,
  },
  {
    title: "La bonté",
    description:
      "Privilégier la bienveillance et la considération dans nos relations avec les clients et les partenaires.",
    icon: Heart,
  },
  {
    title: "L’écoute",
    description:
      "Comprendre les besoins avant de proposer une orientation ou une solution.",
    icon: Ear,
  },
  {
    title: "La recherche de solutions",
    description:
      "Aborder les difficultés avec méthode, patience et détermination.",
    icon: Lightbulb,
  },
  {
    title: "La foi et l’espérance",
    description:
      "Rester attachés à une philosophie personnelle qui encourage la persévérance, la sérénité et l’espoir.",
    icon: Sparkles,
  },
  {
    title: "L’excellence",
    description:
      "Rechercher continuellement l’amélioration de nos méthodes de travail et de la qualité de notre accompagnement.",
    icon: Target,
  },
];

const domains = [
  {
    title: "Voyage",
    description:
      "Nous accompagnons les projets liés au voyage et aux déplacements, en tenant compte des besoins et des objectifs de chaque client.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85",
    icon: Plane,
    link: "/voyages",
    number: "01",
  },
  {
    title: "Immobilier",
    description:
      "Nous intervenons dans le domaine immobilier pour accompagner les projets et les démarches de nos clients selon les services proposés par l’entreprise.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    icon: House,
    link: "/immobilier",
    number: "02",
  },
  {
    title: "Assurance",
    description:
      "Nous orientons nos clients dans leurs besoins d’assurance et recherchons avec eux des solutions adaptées à leur situation, selon les garanties et les offres disponibles.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    icon: BriefcaseBusiness,
    link: "/assurance",
    number: "03",
  },
];

const commitments = [
  "Une écoute attentive de votre projet.",
  "Des informations présentées avec clarté.",
  "Une approche humaine et professionnelle.",
  "Une recherche de solutions adaptées à votre situation.",
  "Une relation fondée sur le respect et la transparence.",
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span
        className={`mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#8EC9F0]" : "text-[#123B5D]"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
        <span className="h-px w-8 bg-current" />
      </span>

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#123B5D]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
            light ? "text-slate-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold transition duration-300 ${
        light
          ? "bg-white text-[#123B5D] hover:bg-[#8EC9F0]"
          : "bg-[#123B5D] text-white hover:bg-[#071D30]"
      }`}
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

function DomainCard({ domain }) {
  const Icon = domain.icon;

  return (
    <article className="group overflow-hidden border border-gray-100 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={domain.image}
          alt={`Illustration du domaine ${domain.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/90 via-[#071D30]/20 to-transparent" />

        <span className="absolute left-5 top-5 text-sm font-semibold tracking-widest text-white">
          {domain.number}
        </span>

        <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center border border-white/40 bg-[#123B5D]/70">
            <Icon size={22} />
          </span>
          <h3 className="text-2xl font-bold">{domain.title}</h3>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="min-h-28 text-sm leading-7 text-gray-600">
          {domain.description}
        </p>

        <Link
          to={domain.link}
          className="mt-5 inline-flex items-center gap-2 border-b border-[#8EC9F0] pb-2 text-sm font-semibold text-[#123B5D] transition hover:gap-3"
        >
          Découvrir nos services
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function AboutCorps() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">
      {/* 2. NOTRE HISTOIRE */}
      <section
        id="notre-histoire"
        className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-2 border-t-2 border-[#8EC9F0] sm:-left-6 sm:-top-6" />

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Illustration d’un environnement de travail collaboratif"
              loading="lazy"
              className="relative z-10 h-[380px] w-full object-cover sm:h-[480px]"
            />

            <div className="absolute -bottom-5 -right-4 z-20 max-w-xs bg-[#071D30] px-6 py-5 text-white sm:-right-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8EC9F0]">
                Notre philosophie
              </p>
              <p className="mt-2 text-lg font-semibold">
                Écouter, comprendre et rechercher des solutions.
              </p>
            </div>
          </div>

          <div className="pt-3 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
              01 — Notre histoire
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl">
              Une entreprise née d’une philosophie
            </h2>

            <h3 className="mt-4 text-xl font-semibold text-[#123B5D]">
              Une vision humaine, une ambition durable.
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
              <p>
                FIRDAWSI CONSULTING GROUP a été créée en 2024 avec une
                philosophie qui va au-delà des activités commerciales.
              </p>
              <p>
                Le nom « Firdawsi » évoque pour sa fondatrice un idéal de
                bonté, de foi, de sourire et de recherche de solutions plutôt
                que de conflits. Il représente une manière d’aborder la vie et
                les relations humaines avec bienveillance, sérénité et espoir.
              </p>
              <p>
                Cette philosophie inspire l’identité de l’entreprise : écouter
                avant d’agir, rechercher des solutions et traiter chaque
                personne avec considération.
              </p>
              <p>
                Depuis ses débuts dans les domaines du voyage, de l’immobilier
                et de l’assurance, FCG porte l’ambition de développer une
                entreprise structurée, crédible et tournée vers l’avenir.
              </p>
            </div>

            <div className="mt-8 h-1 w-20 bg-[#8EC9F0]" />
          </div>
        </div>
      </section>

      {/* 3. LE MOT DE LA FONDATRICE */}
      <section className="bg-[#F3F8FC] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
              02 — Un engagement personnel
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl">
              Le mot de la fondatrice
            </h2>
            <p className="mt-4 text-xl font-semibold text-[#123B5D]">
              Une vision portée par une ambition.
            </p>
          </div>

          <div className="relative border-l-2 border-[#8EC9F0] pl-6 sm:pl-10">
            <Quote size={46} className="mb-5 text-[#8EC9F0]" />

            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                À l’origine de FIRDAWSI CONSULTING GROUP se trouve une
                conviction personnelle : il est toujours important de chercher
                une solution avec patience, bonté et détermination.
              </p>
              <p>
                En fondant FCG, j’ai souhaité construire une entreprise qui ne
                se limite pas à proposer des services, mais qui place également
                la qualité des relations humaines au cœur de son développement.
              </p>
              <p>
                Mon ambition est de faire grandir cette entreprise, de renforcer
                sa crédibilité et de développer sa présence au Sénégal comme à
                l’international.
              </p>
              <p>
                Chaque étape de cette évolution doit rester fidèle à nos
                principes : le respect, la confiance, l’écoute et la volonté de
                progresser.
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="font-bold text-[#123B5D]">La Fondatrice</p>
              <p className="mt-1 text-sm tracking-wide text-gray-500">
                FIRDAWSI CONSULTING GROUP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS DOMAINES D’ACTIVITÉ */}
      <section
        id="nos-domaines"
        className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 — Nos expertises"
            title="Nos domaines d’activité"
            description="Des domaines complémentaires pour accompagner vos projets."
          />

          <p className="mx-auto mb-12 max-w-3xl text-center leading-8 text-gray-600">
            FCG a démarré ses activités autour de trois domaines
            complémentaires, avec la volonté de proposer un accompagnement
            adapté aux besoins de ses clients.
          </p>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <DomainCard key={domain.number} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. NOTRE MISSION */}
      <section className="bg-[#071D30] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="flex h-24 w-24 items-center justify-center border border-[#8EC9F0]/60 bg-white/5 text-[#8EC9F0]">
            <Handshake size={44} strokeWidth={1.4} />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8EC9F0]">
              04 — Notre mission
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Apporter des solutions, créer de la confiance.
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-100 sm:text-lg">
              Notre mission est d’accompagner les particuliers et les
              professionnels dans leurs projets en leur proposant une écoute
              attentive, des informations claires et des solutions adaptées à
              leurs besoins.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-gray-200">
              Nous souhaitons rendre chaque démarche plus compréhensible et
              construire une relation professionnelle fondée sur le sérieux, le
              respect et la transparence.
            </p>
          </div>
        </div>
      </section>

      {/* 6. NOTRE VISION */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#8EC9F0]/30" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#8EC9F0]/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
              05 — Notre vision
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123B5D] sm:text-5xl">
              Devenir une référence au Sénégal et à l’international.
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#8EC9F0]" />

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              Notre ambition est de faire de FIRDAWSI CONSULTING GROUP une
              entreprise de référence au Sénégal, puis de renforcer
              progressivement son développement à l’international.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Nous voulons construire cette croissance grâce à la qualité de
              nos services, à la confiance de nos clients, au développement de
              nos compétences et à des collaborations pertinentes.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Cette ambition repose sur une progression durable, une
              organisation rigoureuse et la fidélité à nos valeurs.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#071D30] sm:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=1200&q=85"
              alt="Illustration d’un environnement professionnel"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071D30] via-[#071D30]/25 to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 sm:p-10">
              <Globe2 size={38} className="mb-5 text-[#8EC9F0]" />
              <p className="max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                Une ambition durable, fidèle à nos valeurs.
              </p>
              <p className="mt-4 text-sm text-gray-300">
                FIRDAWSI CONSULTING GROUP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NOS VALEURS */}
      <section className="bg-[#F3F8FC] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="06 — Ce qui nous guide"
            title="Nos valeurs"
            description="Les principes qui inspirent notre approche et nos relations au quotidien."
          />

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="group">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#123B5D]">
                      0{index + 1}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center border border-[#8EC9F0] bg-white text-[#123B5D] transition duration-300 group-hover:bg-[#123B5D] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#123B5D]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {value.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-gray-200 transition-colors group-hover:bg-[#8EC9F0]" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. POURQUOI CHOISIR FCG */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#123B5D]">
              07 — Notre engagement
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#123B5D] sm:text-5xl">
              Pourquoi choisir FCG ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choisir FIRDAWSI CONSULTING GROUP, c’est privilégier une
              approche attentive à vos besoins et à vos objectifs.
            </p>

            <div className="mt-8 flex items-center gap-4 border-l-2 border-[#8EC9F0] py-2 pl-5">
              <Users size={30} className="shrink-0 text-[#123B5D]" />
              <p className="text-sm font-medium leading-6 text-[#123B5D]">
                Une approche humaine et professionnelle, centrée sur vos
                besoins.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-7 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Nous souhaitons vous offrir
            </p>

            <ul className="space-y-5">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-4 border-b border-gray-100 pb-5"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#F3F8FC] text-[#123B5D]">
                    <CheckCircle2 size={19} />
                  </span>
                  <span className="pt-1 leading-7 text-gray-700">
                    {commitment}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-l-2 border-[#123B5D] pl-5 text-sm leading-7 text-gray-500">
              Notre engagement est de vous accompagner avec sérieux, en
              expliquant clairement les possibilités, les conditions et les
              limites de chaque démarche.
            </p>
          </div>
        </div>
      </section>

      {/* 9. APPEL À L’ACTION FINAL */}
      <section className="relative overflow-hidden bg-[#071D30] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8EC9F0]">
              Échangeons ensemble
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              Chaque projet mérite une attention particulière.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Vous avez un projet de voyage, d’immobilier ou d’assurance ?
              Notre équipe est à votre écoute pour échanger sur vos besoins et
              vous orienter vers les solutions adaptées.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
            <PrimaryLink to="/contact" light>
              <MessageCircle size={18} />
              Parlons de votre projet
            </PrimaryLink>

            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8EC9F0] hover:bg-white/5"
            >
              Découvrir nos services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6">
          <p className="text-center text-xs font-medium tracking-wide text-gray-400 sm:text-sm">
            FIRDAWSI CONSULTING GROUP — L’Excellence au cœur de vos besoins
          </p>
        </div>
      </section>
    </main>
  );
}