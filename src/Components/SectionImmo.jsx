import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  House,
  KeyRound,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  MapPin,
  FileCheck2,
  Handshake,
  Landmark,
  Search,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  UserCheck,
  BadgeCheck,
} from "lucide-react";

const NAVY = "#123B5D";
const DARK = "#08243B";
const SKY = "#55B8E8";

const branchesImmobilier = [
  {
    numero: "01",
    titre: "Immobilier résidentiel",
    sousTitre: "Habiter et investir dans le logement",
    description:
      "Cette branche concerne les biens destinés à l'habitation : appartements, maisons, villas, studios et résidences. Elle répond aux besoins des particuliers qui souhaitent acheter, vendre, louer ou investir dans un logement.",
    services: [
      "Achat et vente de logements",
      "Location d'appartements et de maisons",
      "Recherche d'un bien selon vos critères",
      "Accompagnement dans un projet résidentiel",
    ],
    icon: House,
    badge: "Résidentiel",
  },
  {
    numero: "02",
    titre: "Immobilier commercial",
    sousTitre: "Des espaces pour développer votre activité",
    description:
      "L'immobilier commercial regroupe les locaux utilisés pour exercer une activité économique. Il s'adresse notamment aux commerçants, entrepreneurs, professions libérales et entreprises recherchant un emplacement stratégique.",
    services: [
      "Location de boutiques et magasins",
      "Recherche de bureaux professionnels",
      "Locaux commerciaux et espaces de travail",
      "Accompagnement dans le choix d'un emplacement",
    ],
    icon: BriefcaseBusiness,
    badge: "Commercial",
  },
  {
    numero: "03",
    titre: "Immobilier d'entreprise",
    sousTitre: "Des infrastructures adaptées aux organisations",
    description:
      "Cette branche porte sur les biens immobiliers nécessaires au fonctionnement des structures : immeubles de bureaux, entrepôts, plateformes logistiques, ateliers et locaux d'activité professionnelle.",
    services: [
      "Recherche de bureaux et sièges sociaux",
      "Locaux d'activité et entrepôts",
      "Solutions immobilières pour les entreprises",
      "Identification de biens selon les contraintes opérationnelles",
    ],
    icon: Building2,
    badge: "Entreprise",
  },
  {
    numero: "04",
    titre: "Immobilier foncier",
    sousTitre: "Terrains et potentiel de développement",
    description:
      "L'immobilier foncier concerne les terrains nus ou aménagés destinés à un projet résidentiel, commercial ou industriel. Leur acquisition nécessite une attention particulière à la situation juridique et aux règles d'urbanisme.",
    services: [
      "Recherche de terrains viabilisés ou nus",
      "Identification de parcelles selon le projet",
      "Orientation sur les vérifications foncières",
      "Préparation d'un projet d'acquisition sécurisé",
    ],
    icon: MapPin,
    badge: "Foncier",
  },
  {
    numero: "05",
    titre: "Gestion locative",
    sousTitre: "Valoriser et administrer un patrimoine",
    description:
      "La gestion locative consiste à accompagner le propriétaire dans l'administration globale de son bien loué : suivi des loyers, échanges avec les locataires, gestion des documents et coordination des interventions.",
    services: [
      "Suivi administratif des locations",
      "Gestion rigoureuse des relations avec les locataires",
      "Suivi des loyers et des échéances",
      "Coordination des interventions et de l'entretien",
    ],
    icon: KeyRound,
    badge: "Gestion",
  },
  {
    numero: "06",
    titre: "Investissement immobilier",
    sousTitre: "Construire une stratégie patrimoniale",
    description:
      "L'investissement immobilier vise à acquérir un bien pour générer des revenus locatifs, développer un patrimoine ou rechercher une valorisation à long terme, en tenant compte des réalités et des risques du marché.",
    services: [
      "Recherche de biens à fort potentiel locatif",
      "Analyse des caractéristiques et tendances du marché",
      "Comparaison des possibilités d'investissement",
      "Préparation d'un projet patrimonial sur mesure",
    ],
    icon: ChartNoAxesCombined,
    badge: "Investissement",
  },
];

const etapesLogement = [
  {
    numero: "01",
    titre: "Définir vos besoins",
    texte:
      "Nous identifions minutieusement votre budget, la zone géographique souhaitée, la typologie du bien et vos critères indispensables.",
    accompagnement: "Écoute attentive et conseil personnalisé par nos experts.",
    icon: Search,
  },
  {
    numero: "02",
    titre: "Rechercher les biens adaptés",
    texte:
      "Nous activons notre réseau et notre base de données pour sélectionner les options correspondant rigoureusement à vos exigences.",
    accompagnement: "Sélection ciblée, filtrage qualitatif et orientation.",
    icon: Building2,
  },
  {
    numero: "03",
    titre: "Visiter et évaluer",
    texte:
      "Vous visitez les biens sélectionnés. Nous vous guidons dans l'évaluation de l'état général, de l'environnement, de l'accessibilité et de la sécurité.",
    accompagnement: "Organisation fluide des visites et assistance à l'évaluation.",
    icon: Landmark,
  },
  {
    numero: "04",
    titre: "Vérifier et sécuriser",
    texte:
      "Avant tout engagement, nous examinons les conditions, le contrat, les charges et les documents administratifs ou fonciers essentiels.",
    accompagnement: "Clarification des formalités et prévention des risques juridiques.",
    icon: FileCheck2,
  },
  {
    numero: "05",
    titre: "Finaliser et emménager",
    texte:
      "Nous vous accompagnons jusqu'à la conclusion de l'accord, la signature, la remise des clés et votre installation en toute quiétude.",
    accompagnement: "Suivi complet et rigoureux de votre dossier jusqu'au terme.",
    icon: Handshake,
  },
];

const pointsVigilance = [
  {
    titre: "Sécurité juridique et documentaire",
    texte:
      "Vérification rigoureuse des titres de propriété, de l'identité des parties et des éventuelles charges ou litiges fonciers.",
  },
  {
    titre: "Transparence financière",
    texte:
      "Anticipation claire des coûts globaux : prix d'acquisition ou loyer, frais de dossier, charges courantes et fiscalité associée.",
  },
  {
    titre: "Qualité de l'emplacement",
    texte:
      "Analyse de l'environnement immédiat, de l'accès aux commodités, des infrastructures de transport et du potentiel de valorisation.",
  },
  {
    titre: "Sécurisation contractuelle",
    texte:
      "Relecture attentive des clauses des contrats de bail ou des promesses de vente pour garantir les intérêts de chaque partie.",
  },
];

function Etiquette({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="h-px w-8 bg-[#55B8E8]" />
      <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#287FAE]">
        {children}
      </span>
    </div>
  );
}

function BrancheCard({ branche }) {
  const [ouverte, setOuverte] = useState(false);
  const Icon = branche.icon;

  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#55B8E8]/50 hover:shadow-2xl hover:shadow-[#123B5D]/10">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-black tracking-widest text-slate-300">
            {branche.numero}
          </span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#287FAE]">
            {branche.badge}
          </span>
        </div>

        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#F3F7FA] text-[#123B5D] transition-colors group-hover:bg-[#123B5D] group-hover:text-white">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-[#123B5D]">
          {branche.titre}
        </h3>

        <p className="mt-1.5 text-xs font-bold text-[#287FAE]">
          {branche.sousTitre}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {branche.description}
        </p>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <button
          type="button"
          aria-expanded={ouverte}
          onClick={() => setOuverte(!ouverte)}
          className="flex w-full items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-[#123B5D] transition hover:text-[#287FAE]"
        >
          <span>{ouverte ? "Masquer les services" : "Découvrir les services"}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              ouverte ? "rotate-180" : ""
            }`}
          />
        </button>

        {ouverte && (
          <ul className="mt-4 space-y-2.5 rounded-lg bg-[#F3F7FA] p-4">
            {branche.services.map((service) => (
              <li key={service} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-[#287FAE]"
                />
                <span className="text-xs leading-5 font-medium text-slate-700">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center justify-between pt-2">
          <a
            href={`/contact?service=${encodeURIComponent(branche.titre)}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#123B5D] transition hover:text-[#287FAE]"
          >
            <span>Étudier mon projet</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ImmobilierSection() {
  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* 1. SECTION INTRODUCTIVE SOBRE & ÉPURÉE (SANS EFFET HERO) */}
      <section className="border-b border-slate-200 bg-[#F3F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          <Etiquette>FIRDAWSI CONSULTING GROUP · Pôle Immobilier</Etiquette>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
                L'expertise immobilière au service de vos projets.
              </h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Découvrez nos différents domaines d'intervention, comprenez les étapes clés pour concrétiser 
                votre acquisition ou votre location, et bénéficiez de l'accompagnement sur mesure de notre équipe.
              </p>
            </div>
            <a
              href="#branches-immobilier"
              className="inline-flex w-fit items-center gap-3 border border-[#123B5D] px-5 py-3.5 text-sm font-bold text-[#123B5D] transition hover:bg-[#123B5D] hover:text-white"
            >
              Explorer les branches
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. PARCOURS CLIENT : LES 5 ÉTAPES POUR OBTENIR UN BON LOGEMENT */}
      <section id="etapes-logement" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="max-w-3xl">
          <Etiquette>Parcours client structuré</Etiquette>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl">
            Les 5 étapes clés pour obtenir un bon logement
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Un processus clair et transparent, conçu pour vous guider sereinement de votre première recherche 
            jusqu’à la remise des clés, avec l'appui constant de nos conseillers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {etapesLogement.map((etape) => {
            const CurrentIcon = etape.icon;
            return (
              <div
                key={etape.numero}
                className="relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 transition-all hover:border-[#55B8E8] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#55B8E8]">
                      {etape.numero}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-[#123B5D]">
                      <CurrentIcon size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#123B5D]">
                    {etape.titre}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {etape.texte}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#287FAE]">
                    <UserCheck size={14} />
                    <span>Accompagnement FIRDAWSI :</span>
                  </div>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
                    {etape.accompagnement}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col justify-between rounded-xl bg-[#07243B] p-7 text-white shadow-xl lg:col-span-1">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                <BadgeCheck size={22} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">
                Prêt à lancer votre projet ?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Bénéficiez d'une expertise terrain et d'un suivi sur mesure pour sécuriser votre investissement ou votre futur lieu de vie.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#55B8E8] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#08243B] transition hover:bg-white"
            >
              <span>Initier mon projet</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. LES 6 BRANCHES DE L'IMMOBILIER */}
      <section id="branches-immobilier" className="bg-[#F3F7FA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <Etiquette>Domaines d'intervention</Etiquette>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl">
              Nos branches immobilières spécialisées
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Chaque secteur immobilier obéit à des règles et des exigences spécifiques. 
              Explorez nos domaines d'expertises adaptés à vos ambitions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {branchesImmobilier.map((branche) => (
              <BrancheCard key={branche.numero} branche={branche} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SÉCURISER VOTRE DÉMARCHE : POINTS DE VIGILANCE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Etiquette>Rigueur et conformité</Etiquette>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl">
              Les points de vigilance essentiels à ne pas négliger.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Un bien attractif requiert une vérification rigoureuse de sa situation juridique, 
              financière et structurelle. FIRDAWSI vous aide à anticiper chaque détail pour éviter les imprévus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pointsVigilance.map((item) => (
              <div
                key={item.titre}
                className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-[#55B8E8]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-[#287FAE]">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-bold text-[#123B5D]">{item.titre}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPEL À L'ACTION FINAL */}
      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#07243B] px-8 py-12 sm:px-12 md:flex md:items-center md:justify-between md:gap-10 md:px-16 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.04]"
          />

          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              FIRDAWSI CONSULTING GROUP
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à concrétiser votre projet immobilier ?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Que vous recherchiez un logement, un local commercial, un terrain ou un accompagnement 
              en gestion locative, échangeons dès aujourd'hui sur vos objectifs.
            </p>
          </div>

          <a
            href="/contact"
            className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#55B8E8] px-8 py-4 text-sm font-bold text-[#08243B] shadow-lg transition hover:bg-white md:mt-0"
          >
            <span>Discuter de mon projet</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}