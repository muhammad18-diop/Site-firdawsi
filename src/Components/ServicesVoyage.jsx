
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  FileText,
  CalendarDays,
  Plane,
  CheckCircle2,
  Search,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  ChevronDown,
  MapPin,
  Clock3,
  Mail,
  ExternalLink,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const paysSchengen = [
  { nom: "Allemagne", organisme: "VIDEX / TLScontact", categorie: "TLScontact" },
  { nom: "Autriche", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Belgique", organisme: "TLScontact", categorie: "TLScontact" },
  { nom: "Bulgarie", organisme: "Ambassade / Centre agréé", categorie: "Autres" },
  { nom: "Croatie", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Danemark", organisme: "VFS Global", categorie: "VFS Global" },
  { nom: "Espagne", organisme: "BLS International", categorie: "BLS International" },
  { nom: "Estonie", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Finlande", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "France", organisme: "France-Visas / TLScontact", categorie: "TLScontact" },
  { nom: "Grèce", organisme: "Ambassade / Centre agréé", categorie: "Autres" },
  { nom: "Hongrie", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Islande", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Italie", organisme: "VFS Global", categorie: "VFS Global" },
  { nom: "Lettonie", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Liechtenstein", organisme: "Représentation compétente", categorie: "Autres" },
  { nom: "Lituanie", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Luxembourg", organisme: "TLScontact / Ambassade", categorie: "TLScontact" },
  { nom: "Malte", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Norvège", organisme: "VFS Global", categorie: "VFS Global" },
  { nom: "Pays-Bas", organisme: "VFS Global", categorie: "VFS Global" },
  { nom: "Pologne", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Portugal", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "République tchèque", organisme: "VFS Global / Ambassade", categorie: "VFS Global" },
  { nom: "Roumanie", organisme: "Ambassade / Centre agréé", categorie: "Autres" },
  { nom: "Slovaquie", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Slovénie", organisme: "Ambassade / Représentation", categorie: "Autres" },
  { nom: "Suède", organisme: "VFS Global", categorie: "VFS Global" },
  { nom: "Suisse", organisme: "VFS Global", categorie: "VFS Global" },
];

const services = [
  {
    numero: "01",
    titre: "Visa Schengen",
    description:
      "Préparez votre demande de visa pour un séjour touristique, familial ou professionnel dans l’espace Schengen.",
    icon: Globe2,
    detail: "Court séjour",
  },
  {
    numero: "02",
    titre: "Visa long séjour",
    description:
      "Bénéficiez d’un accompagnement pour organiser votre dossier selon votre projet d’études, de travail ou d’installation.",
    icon: BriefcaseBusiness,
    detail: "Séjour prolongé",
  },
  {
    numero: "03",
    titre: "Préparation du dossier",
    description:
      "Structurez vos documents, vérifiez les pièces nécessaires et préparez un dossier cohérent avec votre situation.",
    icon: ClipboardCheck,
    detail: "Documents",
  },
  {
    numero: "04",
    titre: "Rendez-vous visa",
    description:
      "Obtenez des informations sur les démarches de prise de rendez-vous et les plateformes officielles concernées.",
    icon: CalendarDays,
    detail: "Accompagnement",
  },
];

const exemptions = [
  "Certains titulaires de passeports diplomatiques ou de service, selon les accords applicables.",
  "Les personnes bénéficiant d’une exemption prévue par les règles en vigueur.",
  "Les voyageurs dont la nationalité ou le statut permet une entrée sans visa pour le séjour envisagé.",
];

const etapes = [
  {
    numero: "01",
    titre: "Échange initial",
    description:
      "Nous échangeons sur votre destination, votre motif de voyage et votre situation.",
    icon: Mail,
  },
  {
    numero: "02",
    titre: "Analyse du dossier",
    description:
      "Nous identifions les documents à préparer en fonction de votre projet.",
    icon: FileText,
  },
  {
    numero: "03",
    titre: "Préparation",
    description:
      "Vous organisez vos pièces et vérifiez les informations nécessaires avant le dépôt.",
    icon: ClipboardCheck,
  },
  {
    numero: "04",
    titre: "Dépôt de la demande",
    description:
      "Vous effectuez les démarches auprès de l’organisme officiel compétent.",
    icon: CheckCircle2,
  },
];

const filtres = [
  "Tous",
  "VFS Global",
  "TLScontact",
  "BLS International",
  "Autres",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
      {children}
    </div>
  );
}

function SectionHeading({ label, title, description, centered = false }) {
  return (
    <div
      className={`mb-10 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <SectionLabel>{label}</SectionLabel>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function VoyagesServices() {
  const [recherche, setRecherche] = useState("");
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [paysSelectionne, setPaysSelectionne] = useState(null);
  const [afficherTous, setAfficherTous] = useState(false);

  const paysFiltres = useMemo(() => {
    const terme = recherche.trim().toLowerCase();

    return paysSchengen.filter((pays) => {
      const correspondRecherche =
        pays.nom.toLowerCase().includes(terme) ||
        pays.organisme.toLowerCase().includes(terme);

      const correspondFiltre =
        filtreActif === "Tous" || pays.categorie === filtreActif;

      return correspondRecherche && correspondFiltre;
    });
  }, [recherche, filtreActif]);

  const paysAffiches = afficherTous
    ? paysFiltres
    : paysFiltres.slice(0, 9);

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* INTRODUCTION : pas de deuxième Hero */}
      <section className="px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1fr_330px]">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <a
                  href="/"
                  className="transition hover:text-[#123B5D]"
                >
                  Accueil
                </a>
                <span>/</span>
                <span className="font-medium text-[#123B5D]">
                  Voyages & visas
                </span>
              </div>

              <SectionLabel>Voyages & mobilité internationale</SectionLabel>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
                Votre projet de voyage,
                <span className="block text-sky-700">
                  préparé avec méthode.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Découvrez nos services d’accompagnement pour vos démarches de
                visa, la préparation de votre dossier et l’organisation de votre
                projet de mobilité internationale.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#123B5D] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b2d48]"
                >
                  Parler de mon projet
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-[#123B5D] transition hover:border-[#123B5D] hover:bg-slate-50"
                >
                  Découvrir les services
                  <ArrowDownIcon />
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#123B5D] shadow-sm ring-1 ring-slate-200">
                <ShieldCheck size={25} />
              </div>

              <h2 className="text-lg font-bold text-[#123B5D]">
                Un accompagnement structuré
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Des informations claires pour vous aider à préparer vos
                démarches, sans remplacer les décisions des autorités
                consulaires.
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                <Clock3 size={15} />
                Chaque dossier dépend de votre situation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Nos prestations"
            title="Un accompagnement adapté à votre démarche"
            description="Nous vous aidons à mieux comprendre les étapes et à organiser les documents nécessaires à votre projet."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.numero}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#123B5D]/[0.06] text-[#123B5D] transition group-hover:bg-[#123B5D] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-semibold text-slate-300">
                      {service.numero}
                    </span>
                  </div>

                  <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-sky-700">
                    {service.detail}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#123B5D]">
                    {service.titre}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D] transition hover:text-sky-700"
                  >
                    En savoir plus
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESPACE SCHENGEN */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionLabel>Espace Schengen</SectionLabel>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
                Préparez votre demande en fonction de votre destination.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Les modalités de dépôt, les prestataires et les documents
                exigés peuvent varier selon le pays de destination, votre
                résidence et le motif du séjour.
              </p>

              <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#123B5D] ring-1 ring-slate-200">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#123B5D]">
                      Vérifiez le centre compétent
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Les informations affichées sont indicatives. Consultez
                      toujours le site officiel de l’ambassade ou du prestataire
                      compétent avant toute démarche.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#123B5D] transition hover:text-sky-700"
              >
                Être accompagné
                <ArrowRight size={17} />
              </a>
            </div>

            <div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#123B5D]">
                      Destinations Schengen
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Recherchez un pays ou un organisme.
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {paysFiltres.length} résultat
                    {paysFiltres.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="relative mt-5">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="search"
                    value={recherche}
                    onChange={(e) => {
                      setRecherche(e.target.value);
                      setAfficherTous(false);
                    }}
                    placeholder="Ex. : France, Italie, VFS..."
                    aria-label="Rechercher un pays ou un organisme"
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {filtres.map((filtre) => (
                    <button
                      type="button"
                      key={filtre}
                      onClick={() => {
                        setFiltreActif(filtre);
                        setAfficherTous(false);
                      }}
                      className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                        filtreActif === filtre
                          ? "border-[#123B5D] bg-[#123B5D] text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-[#123B5D]"
                      }`}
                    >
                      {filtre}
                    </button>
                  ))}
                </div>

                <div className="mt-5 divide-y divide-slate-100">
                  {paysAffiches.map((pays) => (
                    <div
                      key={pays.nom}
                      className="flex items-center justify-between gap-3 py-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#123B5D]">
                          <Plane size={17} />
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-semibold text-slate-800">
                            {pays.nom}
                          </h4>
                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            {pays.organisme}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setPaysSelectionne(
                            paysSelectionne === pays.nom ? null : pays.nom
                          )
                        }
                        aria-label={`Afficher les informations pour ${pays.nom}`}
                        aria-expanded={paysSelectionne === pays.nom}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:text-[#123B5D]"
                      >
                        <ChevronDown
                          size={17}
                          className={`transition ${
                            paysSelectionne === pays.nom ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/*
                        Le détail est affiché juste après la ligne concernée
                        dans le bloc conditionnel ci-dessous.
                      */}
                    </div>
                  ))}

                  {paysSelectionne &&
                    paysFiltres.some(
                      (pays) => pays.nom === paysSelectionne
                    ) && (
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="font-semibold text-[#123B5D]">
                          {paysSelectionne}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Les procédures et prestataires peuvent évoluer.
                          Confirmez l’organisme compétent auprès des sources
                          officielles avant de prendre rendez-vous.
                        </p>
                      </div>
                    )}

                  {paysFiltres.length === 0 && (
                    <div className="py-10 text-center">
                      <Search
                        size={25}
                        className="mx-auto text-slate-300"
                      />
                      <p className="mt-3 font-semibold text-slate-700">
                        Aucun résultat
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Essayez un autre pays ou un autre filtre.
                      </p>
                    </div>
                  )}
                </div>

                {paysFiltres.length > 9 && (
                  <button
                    type="button"
                    onClick={() => setAfficherTous((precedent) => !precedent)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-[#123B5D] transition hover:bg-slate-50"
                  >
                    {afficherTous
                      ? "Afficher moins"
                      : `Afficher les ${paysFiltres.length} pays`}
                    <ChevronDown
                      size={16}
                      className={afficherTous ? "rotate-180" : ""}
                    />
                  </button>
                )}

                <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                  <p className="text-xs leading-5 text-slate-500">
                    <span className="font-semibold text-slate-600">
                      À vérifier :
                    </span>{" "}
                    l’organisme de dépôt et les modalités doivent être confirmés
                    auprès des sources officielles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA LONG SÉJOUR */}
      <section className="bg-[#071D30] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-sky-100">
              <GraduationCap size={15} />
              Projets de mobilité
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Vous envisagez un séjour de longue durée ?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
              Études, emploi, regroupement familial ou installation : les
              formalités dépendent du pays, du motif et de votre situation.
              Préparez votre projet en identifiant les exigences officielles
              applicables.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-[#123B5D] transition hover:bg-slate-100"
            >
              Présenter mon projet
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
            <h3 className="text-xl font-bold">
              Des points à vérifier avant de commencer
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  titre: "Le motif du séjour",
                  texte:
                    "Études, travail, famille ou autre motif prévu par la réglementation.",
                },
                {
                  titre: "Les justificatifs requis",
                  texte:
                    "Passeport, ressources, hébergement et pièces spécifiques selon la procédure.",
                },
                {
                  titre: "Les délais et modalités",
                  texte:
                    "Délais de traitement, rendez-vous, frais et procédure de dépôt officiels.",
                },
              ].map((element, index) => (
                <div key={element.titre} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-200">
                    {index === 0 ? (
                      <BriefcaseBusiness size={18} />
                    ) : index === 1 ? (
                      <FileText size={18} />
                    ) : (
                      <CalendarDays size={18} />
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold">{element.titre}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-200">
                      {element.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPTIONS */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Informations pratiques</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
              Certaines situations peuvent bénéficier de règles particulières.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Les exemptions de visa dépendent notamment de la nationalité, du
              passeport, de la durée et du motif du séjour. Il est essentiel de
              vérifier les règles qui s’appliquent à votre cas.
            </p>
          </div>

          <div className="space-y-4">
            {exemptions.map((exemption, index) => (
              <div
                key={exemption}
                className="flex gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-sky-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#123B5D]">
                  <BadgeCheck size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#123B5D]">
                    Situation particulière {index + 1}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {exemption}
                  </p>
                </div>
              </div>
            ))}

            <p className="rounded-lg bg-slate-50 p-4 text-xs leading-6 text-slate-500">
              Ces exemples ne constituent pas une liste exhaustive. Une
              exemption doit toujours être confirmée à partir des règles
              officielles applicables à votre situation.
            </p>
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Notre méthode"
            title="Les étapes de votre accompagnement"
            description="Une démarche structurée pour avancer avec davantage de clarté dans la préparation de votre projet."
            centered
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {etapes.map((etape, index) => {
              const Icon = etape.icon;

              return (
                <article
                  key={etape.numero}
                  className="relative rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#123B5D] text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-2xl font-bold text-slate-200">
                      {etape.numero}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#123B5D]">
                    {etape.titre}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {etape.description}
                  </p>

                  {index < etapes.length - 1 && (
                    <div className="absolute -right-3 top-11 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 lg:flex">
                      <ArrowRight size={13} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#071D30] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-4 -top-8 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Passons à l’étape suivante
                </span>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Parlons de votre projet de voyage.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-200">
                  Contactez notre équipe pour présenter votre besoin et
                  découvrir les possibilités d’accompagnement adaptées à votre
                  situation.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#123B5D] transition hover:bg-slate-100"
              >
                Nous contacter
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowDownIcon() {
  return <ChevronDown size={17} className="rotate-[-90deg]" />;
}
