import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Car,
  Plane,
  Home,
  HardHat,
  Flame,
  Truck,
  HeartPulse,
  GraduationCap,
  Briefcase,
  FileCheck2,
  Handshake,
  Search,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Plus,
  Minus,
} from "lucide-react";

const NAVY = "#123B5D";
const DARK = "#071D30";
const SKY = "#55B8E8";

const typesAssurances = [
  {
    id: "auto",
    titre: "Assurance Automobile",
    categorie: "Véhicules & Mobilité",
    description:
      "Protection complète de votre véhicule contre les risques de circulation, le vol et les dommages matériels ou corporels.",
    garanties: [
      "Responsabilité civile",
      "Dommages tous accidents",
      "Assistance et dépannage 24/7",
      "Protection du conducteur",
    ],
    icon: Car,
    span: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: "voyage",
    titre: "Assurance Voyage",
    categorie: "Mobilité Internationale",
    description:
      "Couverture médicale d'urgence, assistance rapatriement et protection en cas d'imprévus lors de vos déplacements à l'étranger.",
    garanties: [
      "Frais médicaux et d'hospitalisation",
      "Rapatriement sanitaire",
      "Assurance bagages",
      "Responsabilité civile à l'étranger",
    ],
    icon: Plane,
    span: "col-span-1",
  },
  {
    id: "habitation",
    titre: "Assurance Habitation",
    categorie: "Logement & Patrimoine",
    description:
      "Protégez votre résidence principale ou secondaire ainsi que vos biens mobiliers contre les aléas du quotidien.",
    garanties: [
      "Incendie et dégâts des eaux",
      "Vol et vandalisme",
      "Bris de glace",
      "Responsabilité civile vie privée",
    ],
    icon: Home,
    span: "col-span-1",
  },
  {
    id: "chantier",
    titre: "Assurance Chantier",
    categorie: "Construction & BTP",
    description:
      "Sécurisez vos projets de construction ou de rénovation contre les dommages matériels et les responsabilités du maître d'ouvrage.",
    garanties: [
      "Tous risques chantier (TRC)",
      "RC du maître d'ouvrage",
      "Garantie des matériaux",
      "Protection contre les malfaçons",
    ],
    icon: HardHat,
    span: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: "incendie",
    titre: "Assurance Incendie",
    categorie: "Sécurité des Biens",
    description:
      "Garantissez vos locaux, équipements et marchandises contre les risques d'incendie, d'explosion et les dommages électriques.",
    garanties: [
      "Dommages par le feu et fumée",
      "Pertes d'exploitation",
      "Explosion et foudre",
      "Recours des voisins et tiers",
    ],
    icon: Flame,
    span: "col-span-1",
  },
  {
    id: "transport",
    titre: "Assurance Transport",
    categorie: "Logistique & Fret",
    description:
      "Couvrez vos marchandises et cargaisons contre les risques liés au transport routier, maritime ou aérien.",
    garanties: [
      "Marchandises transportées (Ad Valorem)",
      "RC du transporteur",
      "Dommages aux engins",
      "Sécurisation des flux",
    ],
    icon: Truck,
    span: "col-span-1",
  },
  {
    id: "maladie",
    titre: "Maladie et Accident",
    categorie: "Santé & Prévoyance",
    description:
      "Bénéficiez d'une couverture financière et médicale pour faire face aux aléas de santé et arrêts de travail.",
    garanties: [
      "Remboursement des frais de santé",
      "Indemnités journalières",
      "Capital en cas d'invalidité",
      "Soutien corporel",
    ],
    icon: HeartPulse,
    span: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: "scolaire",
    titre: "Assurance Scolaire",
    categorie: "Famille & Éducation",
    description:
      "Offrez à vos enfants une protection optimale pour leurs activités scolaires et parascolaires.",
    garanties: [
      "Garantie des accidents corporels",
      "Responsabilité civile de l'élève",
      "Soutien scolaire",
      "Bris de matériel",
    ],
    icon: GraduationCap,
    span: "col-span-1",
  },
  {
    id: "pro",
    titre: "Multirisque Professionnel",
    categorie: "Entreprise & Activité",
    description:
      "Solution globale pour protéger les professionnels, commerçants et entreprises contre les risques inhérents à leur métier.",
    garanties: [
      "Locaux professionnels et matériel",
      "RC professionnelle (RCP)",
      "Pertes d'exploitation",
      "Protection juridique",
    ],
    icon: Briefcase,
    span: "col-span-1",
  },
];

const demarchesAssurance = [
  {
    numero: "01",
    titre: "Évaluation & Analyse",
    texte:
      "Nous analysons en profondeur vos actifs, votre situation ou votre activité pour identifier les risques à couvrir.",
    accompagnement:
      "Audit sur mesure et écoute active de vos exigences.",
    icon: Search,
  },
  {
    numero: "02",
    titre: "Sélection & Conception",
    texte:
      "Nous comparons les meilleures offres du marché pour concevoir une police d'assurance parfaitement calibrée.",
    accompagnement:
      "Conseil neutre, transparent et ajusté à votre budget.",
    icon: FileCheck2,
  },
  {
    numero: "03",
    titre: "Souscription & Suivi",
    texte:
      "Nous simplifions vos démarches administratives pour une mise en place rapide et un suivi rigoureux en cas de sinistre.",
    accompagnement:
      "Assistance permanente et gestion proactive de votre dossier.",
    icon: Handshake,
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

export default function Assurance() {
  const [carteActive, setCarteActive] = useState(null);

  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-slate-700">
      {/* 1. SECTION INTRODUCTION */}
      <section className="relative border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">
          <Etiquette>
            FIRDAWSI CONSULTING GROUP · Pôle Assurances
          </Etiquette>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-[#123B5D] leading-[1.1] sm:text-5xl lg:text-6xl">
                Sécurisez l'essentiel avec des{" "}
                <span className="text-[#287FAE]">
                  solutions sur mesure.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Automobile, voyage, habitation, chantier ou multirisque
                professionnelle : découvrez nos gammes de garanties et
                bénéficiez d'un accompagnement rigoureux de l'analyse à
                la souscription.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="#catalogue-assurances"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#071D30] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#123B5D]/20 transition hover:bg-[#071D30]"
              >
                <span>Explorer nos assurances</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATALOGUE DES ASSURANCES */}
      <section
        id="catalogue-assurances"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 lg:px-10"
      >
        <div className="mb-12 max-w-3xl">
          <Etiquette>Nos Domaines de Couverture</Etiquette>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl">
            Des garanties complètes pour chaque aspect de votre vie et de
            votre activité
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Cliquez sur une carte pour afficher le détail des garanties
            incluses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {typesAssurances.map((item) => {
            const Icon = item.icon;
            const estActif = carteActive === item.id;

            return (
              <div
                key={item.id}
                onClick={() =>
                  setCarteActive(estActif ? null : item.id)
                }
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 ${
                  estActif
                    ? "scale-[1.02] border-[#55B8E8] bg-[#071D30] text-white shadow-2xl"
                    : "border-slate-200 bg-white hover:border-[#55B8E8]/60 hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                        estActif
                          ? "bg-white/10 text-sky-300"
                          : "bg-sky-50 text-[#123B5D]"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        estActif
                          ? "bg-white/10 text-sky-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.categorie}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-xl font-bold tracking-tight ${
                      estActif ? "text-white" : "text-[#123B5D]"
                    }`}
                  >
                    {item.titre}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      estActif ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-200/20 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span
                      className={
                        estActif ? "text-sky-300" : "text-[#287FAE]"
                      }
                    >
                      {estActif
                        ? "Masquer les garanties"
                        : "Afficher les garanties"}
                    </span>

                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform ${
                        estActif
                          ? "bg-white/20 text-white"
                          : "bg-sky-50 text-[#123B5D]"
                      }`}
                    >
                      {estActif ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </div>
                  </div>

                  {estActif && (
                    <ul className="mt-4 animate-fadeIn space-y-2">
                      {item.garanties.map((garantie) => (
                        <li
                          key={garantie}
                          className="flex items-start gap-2.5 text-xs font-medium text-slate-200"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-sky-300"
                          />
                          <span>{garantie}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DÉMARCHES ET ACCOMPAGNEMENT FIRDAWSI */}
      <section className="border-y border-slate-200/80 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <Etiquette>Méthode et Rigueur</Etiquette>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl">
              Comment FIRDAWSI vous accompagne pas à pas
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Souscrire une assurance ne doit pas être un parcours complexe.
              Notre cabinet structure chaque démarche pour vous garantir
              une sérénité absolue.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {demarchesAssurance.map((etape) => {
              const Icon = etape.icon;

              return (
                <div
                  key={etape.numero}
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 transition hover:border-[#55B8E8] hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-[#55B8E8]/40">
                        {etape.numero}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#123B5D] shadow-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#123B5D]">
                      {etape.titre}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {etape.texte}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-200/60 pt-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#287FAE]">
                      <UserCheck size={14} />
                      <span>Apport FIRDAWSI :</span>
                    </div>

                    <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
                      {etape.accompagnement}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APPEL À L'ACTION FINAL */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#071D30] px-8 py-12 shadow-2xl sm:px-12 md:flex md:items-center md:justify-between md:gap-10 md:px-16 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.04]"
          />

          <div className="relative max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sky-200 backdrop-blur-md">
              <Sparkles size={13} />
              <span>Conseil & Protection</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Besoin d'une couverture ou d'un conseil en assurance ?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Nos experts vous conseillent pour trouver la formule
              parfaitement adaptée à vos exigences personnelles ou
              professionnelles.
            </p>
          </div>

          <a
            href="/contact"
            className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#55B8E8] px-8 py-4 text-sm font-bold text-[#08243B] shadow-lg transition hover:bg-white md:mt-0"
          >
            <span>Parler à un conseiller</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}