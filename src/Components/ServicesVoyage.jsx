
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Globe2,
  FileText,
  CalendarDays,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  ChevronDown,
  Clock3,
  ExternalLink,
  ClipboardCheck,
  BadgeCheck,
  Search,
  CheckCircle2,
} from "lucide-react";

const NAVY = "#123B5D";
const DARK = "#08243B";
const SKY = "#55B8E8";
const LIGHT = "#F3F7FA";

const paysSchengen = [
  { nom: "Allemagne", organisme: "VIDEX / TLScontact", details: "Consultez les instructions consulaires allemandes pour identifier le portail et le centre compétent.", url: "https://www.auswaertiges-amt.de/" },
  { nom: "Autriche", organisme: "BMEIA / VFS Global", details: "Consultez les autorités autrichiennes pour confirmer les conditions et les modalités de dépôt.", url: "https://www.bmeia.gv.at/" },
  { nom: "Belgique", organisme: "TLScontact", details: "Consultez les instructions officielles et les modalités de dépôt correspondant à votre situation.", url: "https://diplomatie.belgium.be/" },
  { nom: "Bulgarie", organisme: "Services consulaires", details: "Vérifiez quelle représentation consulaire traite les demandes depuis votre pays de résidence.", url: "https://www.mfa.bg/" },
  { nom: "Croatie", organisme: "Services consulaires", details: "Consultez les autorités croates pour connaître les documents et le lieu de dépôt.", url: "https://mvep.gov.hr/" },
  { nom: "Danemark", organisme: "Services consulaires", details: "Consultez les informations officielles sur les procédures de visa.", url: "https://um.dk/" },
  { nom: "Espagne", organisme: "BLS", details: "Vérifiez les modalités de dépôt et les documents demandés auprès des autorités espagnoles.", url: "https://www.exteriores.gob.es/" },
  { nom: "Estonie", organisme: "Services consulaires", details: "Consultez les autorités estoniennes pour identifier la représentation compétente.", url: "https://vm.ee/" },
  { nom: "Finlande", organisme: "VFS Global", details: "Consultez les informations officielles sur les demandes de visa et les modalités de dépôt.", url: "https://um.fi/" },
  { nom: "France", organisme: "France-Visas / VFS Global", details: "France-Visas permet de déterminer le type de visa, les justificatifs et les modalités de dépôt adaptées à votre situation.", url: "https://france-visas.gouv.fr/" },
  { nom: "Grèce", organisme: "Services consulaires", details: "Consultez les autorités grecques pour connaître les modalités de demande.", url: "https://www.mfa.gr/" },
  { nom: "Hongrie", organisme: "Services consulaires", details: "Vérifiez les coordonnées de la représentation compétente et les modalités de dépôt.", url: "https://konzinfo.mfa.gov.hu/" },
  { nom: "Islande", organisme: "Représentation consulaire compétente", details: "Identifiez la représentation qui traite les demandes depuis votre pays de résidence.", url: "https://island.is/en" },
  { nom: "Italie", organisme: "BLS / Consulat", details: "Consultez les autorités italiennes pour connaître les procédures applicables à votre séjour.", url: "https://vistoperitalia.esteri.it/" },
  { nom: "Lettonie", organisme: "Services consulaires", details: "Consultez les instructions officielles sur les modalités de visa.", url: "https://www.mfa.gov.lv/" },
  { nom: "Liechtenstein", organisme: "Représentation compétente", details: "Vérifiez auprès des autorités suisses ou de la représentation compétente les modalités applicables.", url: "https://www.eda.admin.ch/" },
  { nom: "Lituanie", organisme: "Services consulaires", details: "Consultez les informations officielles sur les modalités de visa.", url: "https://keliauk.urm.lt/" },
  { nom: "Luxembourg", organisme: "Services consulaires", details: "Vérifiez le service compétent et les documents demandés.", url: "https://maee.gouvernement.lu/" },
  { nom: "Malte", organisme: "Services consulaires", details: "Consultez les autorités maltaises pour connaître les modalités de dépôt.", url: "https://identita.gov.mt/" },
  { nom: "Norvège", organisme: "VFS Global / Services consulaires", details: "Vérifiez les modalités de dépôt applicables aux demandes présentées depuis votre pays de résidence.", url: "https://www.udi.no/" },
  { nom: "Pays-Bas", organisme: "VFS Global", details: "Consultez les instructions officielles pour confirmer le centre compétent et les étapes de demande.", url: "https://www.netherlandsworldwide.nl/" },
  { nom: "Pologne", organisme: "Portail e-Konsulat", details: "Consultez le portail consulaire pour les formalités et la prise de rendez-vous.", url: "https://secure.e-konsulat.gov.pl/" },
  { nom: "Portugal", organisme: "VFS Global / Services consulaires", details: "Consultez les informations officielles sur les visas et les modalités de dépôt.", url: "https://vistos.mne.gov.pt/" },
  { nom: "République tchèque", organisme: "Services consulaires", details: "Consultez les autorités tchèques pour identifier la représentation compétente.", url: "https://mzv.gov.cz/" },
  { nom: "Roumanie", organisme: "Portail eVisa", details: "Consultez le portail officiel pour connaître les modalités de demande.", url: "https://eviza.mae.ro/" },
  { nom: "Slovaquie", organisme: "Services consulaires / VFS Global", details: "Confirmez le canal de dépôt applicable auprès des autorités slovaques.", url: "https://www.mzv.sk/" },
  { nom: "Slovénie", organisme: "Services consulaires", details: "Vérifiez les modalités de dépôt auprès de la représentation compétente.", url: "https://www.gov.si/" },
  { nom: "Suède", organisme: "VFS Global / Services consulaires", details: "Consultez les instructions officielles pour connaître la procédure applicable.", url: "https://www.migrationsverket.se/" },
  { nom: "Suisse", organisme: "Ambassade / Consulat", details: "Consultez les autorités suisses pour connaître les modalités de dépôt et les pièces requises.", url: "https://www.eda.admin.ch/" },
].map((p) => ({ ...p, region: "Europe — Schengen" }));

const paysAmerique = [
  {
    nom: "Canada",
    region: "Amérique",
    organisme: "Immigration, Réfugiés et Citoyenneté Canada",
    details: "Les formalités dépendent de votre nationalité et du motif du séjour. Consultez les conditions de visa de visiteur, d'études ou de travail.",
    url: "https://www.canada.ca/fr/immigration-refugies-citoyennete.html",
  },
  {
    nom: "États-Unis",
    region: "Amérique",
    organisme: "Département d'État américain",
    details: "Les conditions varient selon le motif du voyage, le type de visa et votre nationalité.",
    url: "https://travel.state.gov/",
  },
  {
    nom: "Mexique",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Vérifiez les formalités d'entrée selon votre passeport, la durée et le motif du séjour.",
    url: "https://www.gob.mx/sre",
  },
  {
    nom: "Brésil",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Consultez les règles de visa correspondant à votre nationalité et à votre projet de voyage.",
    url: "https://www.gov.br/mre/",
  },
  {
    nom: "Argentine",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Les formalités dépendent de la nationalité et de la durée du séjour.",
    url: "https://www.cancilleria.gob.ar/",
  },
  {
    nom: "Colombie",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Vérifiez les exigences d'entrée selon votre passeport et le type de séjour envisagé.",
    url: "https://www.cancilleria.gov.co/",
  },
  {
    nom: "Chili",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Consultez les conditions d'entrée et les exigences documentaires avant votre départ.",
    url: "https://www.minrel.gob.cl/",
  },
  {
    nom: "Pérou",
    region: "Amérique",
    organisme: "Ministère des Affaires étrangères",
    details: "Les conditions d'entrée dépendent de la nationalité et du motif du séjour.",
    url: "https://www.gob.pe/rree",
  },
  {
    nom: "Cuba",
    region: "Amérique",
    organisme: "Portail officiel du tourisme",
    details: "Consultez les formalités de voyage, les exigences documentaires et les conditions d'entrée applicables.",
    url: "https://www.cuba.travel/",
  },
  {
    nom: "Costa Rica",
    region: "Amérique",
    organisme: "Direction générale de la migration",
    details: "Vérifiez les conditions d'entrée selon votre nationalité et la durée du séjour.",
    url: "https://www.migracion.go.cr/",
  },
];

const paysAsie = [
  {
    nom: "Japon",
    region: "Asie",
    organisme: "Ministère des Affaires étrangères",
    details: "Consultez les règles de visa correspondant à votre nationalité et au motif de votre voyage.",
    url: "https://www.mofa.go.jp/",
  },
  {
    nom: "Chine",
    region: "Asie",
    organisme: "Service officiel des visas chinois",
    details: "Les exigences dépendent du type de séjour et de votre nationalité. Vérifiez les pièces requises avant le dépôt.",
    url: "https://www.visaforchina.cn/",
  },
  {
    nom: "Corée du Sud",
    region: "Asie",
    organisme: "Portail officiel des visas",
    details: "Vérifiez les conditions de visa et les formalités d'entrée selon votre situation.",
    url: "https://www.visa.go.kr/",
  },
  {
    nom: "Inde",
    region: "Asie",
    organisme: "Portail officiel des visas indiens",
    details: "Un visa ou un visa électronique peut être nécessaire selon votre nationalité et le motif du voyage.",
    url: "https://indianvisaonline.gov.in/",
  },
  {
    nom: "Thaïlande",
    region: "Asie",
    organisme: "Portail officiel e-Visa",
    details: "Consultez les règles applicables à votre nationalité, à la durée et au motif du séjour.",
    url: "https://www.thaievisa.go.th/",
  },
  {
    nom: "Émirats arabes unis",
    region: "Asie",
    organisme: "Portail officiel du gouvernement",
    details: "Les formalités dépendent de la nationalité et du type de séjour envisagé.",
    url: "https://u.ae/en/information-and-services/visa-and-emirates-id",
  },
  {
    nom: "Arabie saoudite",
    region: "Asie",
    organisme: "Portail officiel des visas touristiques",
    details: "Consultez les conditions de visa et d'entrée selon votre passeport et le motif du voyage.",
    url: "https://visa.visitsaudi.com/",
  },
  {
    nom: "Turquie",
    region: "Asie",
    organisme: "Portail officiel e-Visa",
    details: "Vérifiez si votre nationalité nécessite un visa et si une demande électronique est possible.",
    url: "https://www.evisa.gov.tr/",
  },
  {
    nom: "Malaisie",
    region: "Asie",
    organisme: "Département de l'immigration",
    details: "Consultez les exigences d'entrée et les formalités applicables à votre nationalité.",
    url: "https://www.imi.gov.my/",
  },
  {
    nom: "Indonésie",
    region: "Asie",
    organisme: "Portail officiel de l'immigration",
    details: "Vérifiez les conditions de visa et les formalités avant le départ.",
    url: "https://evisa.imigrasi.go.id/",
  },
  {
    nom: "Singapour",
    region: "Asie",
    organisme: "Immigration & Checkpoints Authority",
    details: "Consultez les conditions d'entrée et les documents nécessaires selon votre nationalité.",
    url: "https://www.ica.gov.sg/",
  },
  {
    nom: "Vietnam",
    region: "Asie",
    organisme: "Portail officiel e-Visa",
    details: "Vérifiez les conditions d'obtention d'un visa électronique et les règles applicables à votre séjour.",
    url: "https://evisa.gov.vn/",
  },
];

const tousLesPays = [...paysSchengen, ...paysAmerique, ...paysAsie];

const services = [
  {
    numero: "01",
    icon: Globe2,
    titre: "Visa Schengen",
    description: "Comprendre les démarches et identifier les informations utiles à votre demande de visa de court séjour.",
  },
  {
    numero: "02",
    icon: GraduationCap,
    titre: "Visa long séjour",
    description: "Préparer votre projet de séjour pour les études, le travail ou certains motifs familiaux.",
  },
  {
    numero: "03",
    icon: ClipboardCheck,
    titre: "Préparation du dossier",
    description: "Organiser les justificatifs nécessaires selon votre destination et votre situation personnelle.",
  },
  {
    numero: "04",
    icon: CalendarDays,
    titre: "Rendez-vous visa",
    description: "Repérer les canaux de prise de rendez-vous et vérifier les modalités officielles de dépôt.",
  },
];

const exemptions = [
  "Époux de Français, sous réserve des conditions applicables",
  "Certains membres de famille de citoyens européens ou suisses",
  "Travailleurs saisonniers dans les situations prévues",
  "Certains travailleurs et membres de leur famille bénéficiant de dispositions spécifiques",
  "Enseignants de français dans les cas prévus",
  "Assistants et lecteurs de langue étrangère dans les cas prévus",
  "Certains bénéficiaires d'un visa vacances-travail",
  "Titulaires de passeports diplomatiques ou de service dans les cas prévus",
  "Certains étudiants boursiers",
  "Invités de certaines organisations intergouvernementales",
  "Certaines catégories bénéficiant de dispositions particulières",
];

const etapes = [
  {
    numero: "01",
    titre: "Définir votre projet",
    texte: "Précisez votre destination, le motif du séjour et la durée envisagée.",
  },
  {
    numero: "02",
    titre: "Constituer votre dossier",
    texte: "Consultez la liste officielle des pièces justificatives adaptées à votre situation.",
  },
  {
    numero: "03",
    titre: "Déposer votre demande",
    texte: "Vérifiez le canal de dépôt, prenez rendez-vous si nécessaire et respectez les délais officiels.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#55B8E8]" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287FAE]">
        {children}
      </span>
    </div>
  );
}

export default function VoyagesServices() {
  const [recherche, setRecherche] = useState("");
  const [regionActive, setRegionActive] = useState("Toutes");
  const [organismeActif, setOrganismeActif] = useState("Tous");
  const [afficherTous, setAfficherTous] = useState(false);
  const [paysOuvert, setPaysOuvert] = useState(null);

  const paysFiltres = useMemo(() => {
    const terme = recherche.trim().toLocaleLowerCase("fr");

    return tousLesPays.filter((pays) => {
      const correspondRecherche =
        pays.nom.toLocaleLowerCase("fr").includes(terme) ||
        pays.organisme.toLocaleLowerCase("fr").includes(terme) ||
        pays.region.toLocaleLowerCase("fr").includes(terme);

      const correspondRegion =
        regionActive === "Toutes" || pays.region === regionActive;

      const organisme = pays.organisme.toLowerCase();

      const correspondOrganisme =
        organismeActif === "Tous" ||
        (organismeActif === "VFS Global" && organisme.includes("vfs")) ||
        (organismeActif === "TLScontact" && organisme.includes("tls")) ||
        (organismeActif === "BLS" && organisme.includes("bls")) ||
        (organismeActif === "Autres" && !/vfs|tls|bls/i.test(organisme));

      return correspondRecherche && correspondRegion && correspondOrganisme;
    });
  }, [recherche, regionActive, organismeActif]);

  const paysAffiches = afficherTous ? paysFiltres : paysFiltres.slice(0, 9);

  function reinitialiserAffichage() {
    setAfficherTous(false);
    setPaysOuvert(null);
  }

  function modifierRecherche(value) {
    setRecherche(value);
    reinitialiserAffichage();
  }

  function modifierRegion(value) {
    setRegionActive(value);
    reinitialiserAffichage();
  }

  function modifierOrganisme(value) {
    setOrganismeActif(value);
    reinitialiserAffichage();
  }

  function reinitialiserFiltres() {
    setRecherche("");
    setRegionActive("Toutes");
    setOrganismeActif("Tous");
    reinitialiserAffichage();
  }

  return (
    <main className="overflow-hidden bg-white text-slate-700">
      {/* INTRODUCTION : sans deuxième Hero */}
      <section className="border-b border-slate-200 bg-[#F3F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-12 lg:px-10">
          <SectionLabel>Voyages & mobilité internationale</SectionLabel>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
                Toutes vos destinations, au même endroit.
              </h1>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Explorez les informations officielles pour préparer vos
                démarches de voyage en Europe, en Amérique et en Asie.
              </p>
            </div>
            <a
              href="#pays-destinations"
              className="inline-flex w-fit items-center gap-3 border border-[#123B5D] px-5 py-3.5 text-sm font-bold text-[#123B5D] transition hover:bg-[#123B5D] hover:text-white"
            >
              Explorer les pays
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Globe2 size={17} className="text-[#287FAE]" />
              {tousLesPays.length} destinations répertoriées
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText size={17} className="text-[#287FAE]" />
              Informations par pays
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#287FAE]" />
              Liens vers les sources officielles
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <SectionLabel>Nos services de voyage</SectionLabel>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
              Des repères clairs pour préparer vos démarches.
            </h2>
          </div>
          <p className="max-w-2xl leading-8 text-slate-600 md:justify-self-end">
            Identifiez les principales étapes de votre projet avant de contacter
            l'organisme compétent pour votre destination.
          </p>
        </div>
        <div className="mt-10 grid border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.numero}
                className={`group py-7 sm:px-6 lg:px-5 ${
                  index % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""
                } ${
                  index < 2 ? "sm:border-b sm:border-slate-200 lg:border-b-0" : ""
                } ${
                  index !== 3 ? "lg:border-r lg:border-slate-200" : ""
                } first:pl-0 last:pr-0`}
              >
                <div className="flex items-center justify-between">
                  <Icon size={25} strokeWidth={1.6} className="text-[#287FAE] transition group-hover:-translate-y-1" />
                  <span className="text-xs font-semibold tracking-widest text-slate-300">{service.numero}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#123B5D]">{service.titre}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="pays-destinations" className="scroll-mt-20 bg-[#F3F7FA] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Guide des destinations</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#123B5D] sm:text-4xl">
                Trouvez votre destination
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Cliquez sur un pays pour afficher les informations utiles et
                accéder à son portail officiel.
              </p>
            </div>
            <div className="flex w-fit items-center gap-3 border border-slate-200 bg-white px-5 py-3">
              <Globe2 size={21} className="text-[#287FAE]" />
              <div>
                <p className="text-xl font-bold text-[#123B5D]">{tousLesPays.length}</p>
                <p className="text-xs text-slate-500">destinations</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border border-slate-200 bg-white p-4 md:grid-cols-[1fr_220px_220px] md:p-5">
            <label className="relative block">
              <span className="sr-only">Rechercher un pays ou un organisme</span>
              <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
             <input
              type="search"
               value={recherche}
               onChange={(e) => modifierRecherche(e.target.value)}
               placeholder="Rechercher un pays..."
               className="w-full min-w-0 border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-base outline-none transition placeholder:text-slate-400 focus:border-[#55B8E8] focus:ring-2 focus:ring-sky-100"
               />
            </label>
            <label>
              <span className="sr-only">Filtrer par région</span>
              <select
                value={regionActive}
                onChange={(e) => modifierRegion(e.target.value)}
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#55B8E8] focus:ring-2 focus:ring-sky-100"
              >
                <option value="Toutes">Toutes les régions</option>
                <option value="Europe — Schengen">Europe — Schengen</option>
                <option value="Amérique">Amérique</option>
                <option value="Asie">Asie</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Filtrer par organisme</span>
              <select
                value={organismeActif}
                onChange={(e) => modifierOrganisme(e.target.value)}
                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#55B8E8] focus:ring-2 focus:ring-sky-100"
              >
                <option value="Tous">Tous les organismes</option>
                <option value="VFS Global">VFS Global</option>
                <option value="TLScontact">TLScontact</option>
                <option value="BLS">BLS</option>
                <option value="Autres">Autres organismes</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <p className="text-slate-500">
              <span className="font-bold text-[#123B5D]">{paysFiltres.length}</span>{" "}
              résultat{paysFiltres.length > 1 ? "s" : ""}
            </p>
            {(recherche || regionActive !== "Toutes" || organismeActif !== "Tous") && (
              <button
                type="button"
                onClick={reinitialiserFiltres}
                className="font-semibold text-[#287FAE] hover:text-[#123B5D]"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          <div className="mt-5 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {paysAffiches.map((pays) => {
              const ouvert = paysOuvert === pays.nom;
              const detailId = `details-${pays.nom.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

              return (
                <article key={pays.nom} className="flex flex-col bg-white transition hover:bg-sky-50/40">
                  <button
                    type="button"
                    aria-expanded={ouvert}
                    aria-controls={detailId}
                    onClick={() => setPaysOuvert(ouvert ? null : pays.nom)}
                    className="flex min-h-[155px] w-full flex-1 flex-col p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#55B8E8] sm:p-6"
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <h3 className="font-bold text-[#123B5D]">{pays.nom}</h3>
                      <span className="shrink-0 border border-sky-100 bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#287FAE]">
                        {pays.region === "Europe — Schengen" ? "Schengen" : pays.region}
                      </span>
                    </div>
                    <div className="mt-5 flex items-start gap-3">
                      <FileText size={17} className="mt-0.5 shrink-0 text-[#287FAE]" />
                      <p className="text-sm leading-6 text-slate-600">{pays.organisme}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <span className="text-xs font-medium text-slate-400">
                        {ouvert ? "Masquer les informations" : "Voir les informations"}
                      </span>
                      <ChevronDown size={18} className={`shrink-0 text-[#287FAE] transition-transform ${ouvert ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  {ouvert && (
                    <div id={detailId} className="border-t border-slate-200 bg-white p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#287FAE]">
                        Informations utiles
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{pays.details}</p>
                      <a
                        href={pays.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123B5D] transition hover:text-[#287FAE]"
                      >
                        Consulter le site officiel
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {paysFiltres.length === 0 && (
            <div className="border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <Search size={30} className="mx-auto text-slate-400" />
              <h3 className="mt-4 font-bold text-[#123B5D]">Aucune destination trouvée</h3>
              <p className="mt-2 text-sm text-slate-500">Essayez un autre terme ou modifiez les filtres.</p>
            </div>
          )}

          {paysFiltres.length > 9 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setAfficherTous((value) => !value)}
                className="inline-flex items-center gap-3 border border-[#123B5D] px-6 py-3.5 text-sm font-bold text-[#123B5D] transition hover:bg-[#123B5D] hover:text-white"
              >
                {afficherTous ? "Afficher moins" : "Afficher toutes les destinations"}
                <ChevronDown size={18} className={`transition-transform ${afficherTous ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}

          <div className="mt-8 flex items-start gap-3 border-l-2 border-[#55B8E8] bg-white px-5 py-4">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#287FAE]" />
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#123B5D]">Information importante :</strong>{" "}
              les exigences de visa varient selon la nationalité, le motif du
              voyage et la durée du séjour. Les liens proposés servent à
              retrouver les sources officielles ; confirmez toujours la
              procédure applicable avant de déposer votre demande.
            </p>
          </div>
        </div>
      </section>

      {/* VISA LONG SÉJOUR */}
      <section id="visa-long-sejour" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionLabel>Préparer un séjour prolongé</SectionLabel>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#123B5D] sm:text-4xl">
              Le visa long séjour pour la France
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Pour un séjour de plus de trois mois en France, un visa long séjour
              peut être requis selon la nationalité, le motif du séjour et la
              situation du demandeur. Les autorités consulaires déterminent les
              conditions applicables.
            </p>
            <div className="mt-9 border-y border-slate-200">
              {[
                {
                  icon: GraduationCap,
                  titre: "Études et formation",
                  texte: "Préparez les justificatifs liés à votre admission et à votre projet d’études.",
                },
                {
                  icon: BriefcaseBusiness,
                  titre: "Activité professionnelle",
                  texte: "Vérifiez les autorisations et documents nécessaires selon le poste et le contrat.",
                },
                {
                  icon: Globe2,
                  titre: "Motifs familiaux",
                  texte: "Les conditions dépendent de votre lien familial et du régime applicable.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.titre} className={`flex gap-5 py-6 ${index !== 2 ? "border-b border-slate-200" : ""}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sky-50 text-[#123B5D]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#123B5D]">{item.titre}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.texte}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://france-visas.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#287FAE] transition hover:text-[#123B5D]"
            >
              Consulter France-Visas <ExternalLink size={16} />
            </a>
          </div>

          <aside className="bg-[#08243B] p-7 text-white sm:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center bg-white/10 text-sky-300">
                <BadgeCheck size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
                Informations à connaître
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-snug">
              Exemptions de frais : certaines situations particulières
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Certaines catégories peuvent bénéficier d’une exemption, sous
              réserve des conditions applicables. Cette liste est indicative
              et ne garantit pas l’éligibilité.
            </p>
            <ul className="mt-7 space-y-4">
              {exemptions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-sky-300" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/15 pt-5">
              <p className="text-xs leading-6 text-slate-400">
                Vérifiez les règles actuelles et les justificatifs requis auprès
                des autorités compétentes.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ÉTAPES */}
      <section id="etapes" className="scroll-mt-20 bg-[#F3F7FA] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <SectionLabel>Votre parcours</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#123B5D] sm:text-4xl">
              Les étapes essentielles de votre demande
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Une préparation méthodique vous aide à identifier les exigences
              et à limiter les oublis avant le dépôt de votre dossier.
            </p>
          </div>
          <div className="mt-12 grid border-t border-slate-200 md:grid-cols-3">
            {etapes.map((etape, index) => (
              <article
                key={etape.numero}
                className={`relative py-8 md:pr-8 ${
                  index !== 2 ? "md:border-r md:border-slate-200" : ""
                } ${index !== 0 ? "md:pl-8" : ""} ${
                  index !== 2 ? "border-b border-slate-200 md:border-b-0" : ""
                }`}
              >
                <span className="text-5xl font-light tracking-tight text-[#55B8E8]">{etape.numero}</span>
                <h3 className="mt-5 text-xl font-bold text-[#123B5D]">{etape.titre}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{etape.texte}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 border border-slate-200 bg-white p-5">
            <Clock3 size={20} className="mt-0.5 shrink-0 text-[#287FAE]" />
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#123B5D]">Anticipez les délais.</strong>{" "}
              Les délais de rendez-vous et de traitement varient selon le pays,
              la période et le type de demande. Vérifiez les délais officiels
              avant de réserver votre voyage.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-[#08243B] px-7 py-10 sm:px-10 md:px-14 md:py-14">
            <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.06]" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  Votre projet mérite une bonne préparation
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Vous préparez un voyage ?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-200">
                  Échangez avec FIRDAWSI CONSULTING GROUP pour découvrir nos
                  services et connaître les possibilités d’accompagnement
                  correspondant à votre projet.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#55B8E8] px-6 py-4 text-sm font-bold text-[#08243B] transition hover:bg-white"
              >
                Contacter notre équipe <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
