
import {
  ArrowRight,
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
} from "lucide-react";

const assurances = [
  {
    id: "automobile",
    numero: "01",
    titre: "Assurance automobile",
    description:
      "Protégez votre véhicule grâce à une couverture adaptée à son utilisation et à vos besoins.",
    avantages: [
      "Solutions adaptées à votre véhicule",
      "Garanties selon votre profil et votre budget",
      "Accompagnement dans vos démarches",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    icon: CarFront,
  },
  {
    id: "voyage",
    numero: "02",
    titre: "Assurance voyage",
    description:
      "Préparez vos déplacements avec une couverture pensée pour les imprévus pouvant survenir avant ou pendant votre voyage.",
    avantages: [
      "Solutions adaptées à votre destination",
      "Garanties selon le contrat souscrit",
      "Accompagnement dans la préparation de votre dossier",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    icon: Plane,
  },
  {
    id: "habitation",
    numero: "03",
    titre: "Assurance habitation",
    description:
      "Préservez votre logement et vos biens grâce à des garanties adaptées à votre situation, que vous soyez propriétaire ou locataire.",
    avantages: [
      "Protection des biens selon le contrat",
      "Garanties adaptées à votre logement",
      "Conseils pour choisir votre couverture",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    icon: House,
  },
  {
    id: "chantier",
    numero: "04",
    titre: "Assurance chantier",
    description:
      "Anticipez les risques liés à vos travaux et projets de construction avec des solutions adaptées à la nature du chantier.",
    avantages: [
      "Étude des risques du projet",
      "Garanties à définir selon les travaux",
      "Accompagnement dans le choix du contrat",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    icon: HardHat,
  },
  {
    id: "incendie",
    numero: "05",
    titre: "Assurance incendie",
    description:
      "Protégez vos biens immobiliers et vos équipements contre les risques couverts par votre contrat, notamment les dommages liés à un incendie.",
    avantages: [
      "Évaluation des biens à assurer",
      "Garanties selon votre situation",
      "Conseils sur les niveaux de couverture",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    icon: Flame,
  },
  {
    id: "transport",
    numero: "06",
    titre: "Assurance transport",
    description:
      "Sécurisez vos opérations de transport en étudiant les solutions adaptées aux marchandises, aux véhicules et aux risques de votre activité.",
    avantages: [
      "Solutions selon le type de transport",
      "Étude des marchandises et des risques",
      "Garanties adaptées à votre activité",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    icon: Truck,
  },
  {
    id: "maladie-accident",
    numero: "07",
    titre: "Assurance maladie et accident",
    description:
      "Découvrez les solutions de couverture santé et accident correspondant à votre situation personnelle ou familiale.",
    avantages: [
      "Solutions selon vos besoins",
      "Couverture selon le contrat choisi",
      "Accompagnement dans le choix des garanties",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    icon: HeartPulse,
  },
  {
    id: "scolaire",
    numero: "08",
    titre: "Assurance scolaire",
    description:
      "Contribuez à la protection des élèves avec une assurance adaptée aux exigences de leur établissement et aux garanties recherchées.",
    avantages: [
      "Solutions pour les élèves et étudiants",
      "Garanties à vérifier selon l’établissement",
      "Accompagnement dans les démarches",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    icon: GraduationCap,
  },
  {
    id: "multirisque-professionnelle",
    numero: "09",
    titre: "Assurance multirisque professionnelle",
    description:
      "Identifiez les solutions adaptées aux risques liés à vos locaux, à vos équipements et à votre activité professionnelle.",
    avantages: [
      "Analyse des risques professionnels",
      "Protection à adapter à votre activité",
      "Garanties selon le contrat souscrit",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    icon: BriefcaseBusiness,
  },
];

function AssuranceItem({ assurance, index }) {
  const Icon = assurance.icon;
  const imageAGauche = index % 2 === 1;

  return (
    <article
      id={assurance.id}
      className="scroll-mt-28 border-b border-slate-200 py-12 last:border-b-0 md:py-16"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          imageAGauche
            ? "lg:[&>div:first-child]:order-2"
            : ""
        }`}
      >
        {/* Image */}
        <div className="group relative min-h-[280px] overflow-hidden rounded-2xl bg-slate-100 sm:min-h-[360px]">
          <img
            src={assurance.image}
            alt={assurance.titre}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/80 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#123B5D] shadow-sm">
            <Icon size={24} strokeWidth={1.7} />
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
            <h3 className="max-w-md text-2xl font-bold sm:text-3xl">
              {assurance.titre}
            </h3>

            <span className="text-4xl font-light text-white/70">
              {assurance.numero}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="py-2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#123B5D]">
            Nos solutions d’assurance
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl">
            {assurance.titre}
          </h2>

          <p className="mb-7 text-base leading-8 text-gray-600">
            {assurance.description}
          </p>

          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-[#123B5D]">
              Nos solutions pour vous
            </h4>

            <ul className="space-y-3">
              {assurance.avantages.map((avantage) => (
                <li
                  key={avantage}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-600 sm:text-base"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#123B5D]"
                  />
                  <span>{avantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`/contact?service=${assurance.id}`}
            className="group inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0B2B46]"
          >
            Demander des informations
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function AssuranceServices() {
  return (
    <main className="bg-white">
      {/* Introduction de la section */}
      <section
        id="nos-assurances"
        className="px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#123B5D]">
            <span className="h-px w-8 bg-[#8EC9F0]" />
            Nos domaines d’assurance
          </div>

          <div className="mb-6 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
              Des solutions pour vos biens, votre famille et votre entreprise.
            </h2>

            <p className="leading-7 text-gray-600">
              Chaque besoin est différent. Découvrez nos solutions d’assurance
              et contactez notre équipe pour être orienté vers une couverture
              adaptée à votre situation.
            </p>
          </div>

          <div className="mt-8">
            {assurances.map((assurance, index) => (
              <AssuranceItem
                key={assurance.id}
                assurance={assurance}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#071D30] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#8EC9F0]/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#8EC9F0]">
                FIRDAWSI CONSULTING GROUP
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                Votre protection, notre priorité.
              </h2>

              <p className="leading-7 text-white/80">
                Vous ne savez pas quelle assurance choisir ? Présentez-nous
                votre besoin et échangeons sur les solutions envisageables.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 font-semibold text-[#123B5D] transition hover:bg-[#8EC9F0]"
            >
              Parlons de vos besoins
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
