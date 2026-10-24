
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  House,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
} from "lucide-react";

const NAVY = "#071B3A";
const SKY = "#38BDF8";

const faqData = [
  {
    id: "faq-voyages",
    category: "Voyages",
    icon: Plane,
    intro: "Préparez votre voyage avec davantage de clarté.",
    questions: [
      {
        question: "Quels services propose FIRDAWSI en matière de voyages ?",
        answer:
          "FIRDAWSI CONSULTING GROUP vous accompagne dans la préparation de vos projets de voyage, notamment pour comprendre les démarches administratives, préparer votre dossier et vous orienter selon votre destination.",
      },
      {
        question: "Pouvez-vous m'accompagner dans une demande de visa ?",
        answer:
          "Nous pouvons vous accompagner dans la préparation de votre dossier et vous orienter vers les démarches adaptées à votre destination. Les conditions dépendent du pays, du motif du séjour et de votre situation personnelle.",
      },
      {
        question: "Quels documents faut-il préparer pour une demande de visa ?",
        answer:
          "Les documents varient selon la destination, le type de visa et votre situation. Il peut notamment s'agir d'un passeport, de justificatifs de ressources, d'hébergement, d'assurance ou de documents liés au motif du séjour. La liste officielle doit toujours être vérifiée auprès des autorités compétentes.",
      },
      {
        question: "Travaillez-vous avec VFS Global, TLScontact ou BLS ?",
        answer:
          "Ces organismes interviennent dans certaines procédures de visa selon le pays et la destination. Nous pouvons vous aider à mieux comprendre le parcours à suivre. Le prestataire compétent doit être vérifié auprès des sources officielles pour chaque demande.",
      },
      {
        question: "Pouvez-vous garantir l'obtention de mon visa ?",
        answer:
          "Non. La décision d'accorder ou de refuser un visa appartient exclusivement aux autorités compétentes. Notre rôle est de vous accompagner dans la préparation de votre démarche, sans garantir une décision favorable.",
      },
    ],
  },
  {
    id: "faq-immobilier",
    category: "Immobilier",
    icon: House,
    intro: "Avancez dans votre projet immobilier avec un accompagnement adapté.",
    questions: [
      {
        question: "Quels types de projets immobiliers accompagnez-vous ?",
        answer:
          "Nous vous accompagnons dans la réflexion et la préparation de votre projet immobilier, notamment pour la recherche d'un logement ou d'un bien correspondant à vos besoins. Les possibilités d'accompagnement sont précisées en fonction de votre demande.",
      },
      {
        question: "Pouvez-vous m'aider à trouver un logement ?",
        answer:
          "Oui, vous pouvez nous présenter votre recherche afin que nous puissions mieux comprendre vos critères : localisation, type de bien, budget indicatif et besoins particuliers. Les possibilités seront étudiées selon votre demande et les biens disponibles.",
      },
      {
        question: "Comment se déroule un accompagnement immobilier ?",
        answer:
          "La première étape consiste à nous expliquer votre projet et vos critères. Nous échangeons ensuite sur vos besoins afin de déterminer l'accompagnement envisageable et les prochaines démarches à entreprendre.",
      },
      {
        question: "Puis-je vous contacter avant d'avoir défini tout mon projet ?",
        answer:
          "Bien sûr. Vous pouvez nous contacter même si votre projet est encore en réflexion. Nous pourrons échanger sur vos objectifs, vos contraintes et les informations nécessaires pour mieux orienter votre demande.",
      },
    ],
  },
  {
    id: "faq-assurance",
    category: "Assurance",
    icon: ShieldCheck,
    intro: "Mieux comprendre les solutions de protection adaptées à vos besoins.",
    questions: [
      {
        question: "Quels besoins en assurance pouvez-vous m'aider à étudier ?",
        answer:
          "Nous pouvons échanger avec vous sur vos besoins de protection et vous aider à mieux cerner les garanties à examiner selon votre situation et les solutions disponibles.",
      },
      {
        question: "Comment choisir une assurance adaptée à mes besoins ?",
        answer:
          "Il est important de prendre en compte les biens ou les risques à protéger, les garanties proposées, les exclusions, les franchises et le coût. Nous vous invitons à présenter votre situation afin de mieux orienter votre demande.",
      },
      {
        question: "Pourquoi faut-il comparer les garanties avant de souscrire ?",
        answer:
          "Deux contrats peuvent proposer des niveaux de protection différents malgré des intitulés similaires. Lire les garanties, les exclusions, les plafonds et les conditions de prise en charge permet de mieux comprendre ce qui est effectivement couvert.",
      },
      {
        question: "Puis-je demander des renseignements avant de prendre une décision ?",
        answer:
          "Oui. Vous pouvez nous contacter pour exposer votre besoin et poser vos questions avant de prendre une décision. Les conditions applicables dépendent de la solution étudiée et des documents contractuels correspondants.",
      },
    ],
  },
  {
    id: "faq-general",
    category: "Général",
    icon: CircleHelp,
    intro: "Tout ce qu'il faut savoir pour prendre contact avec notre équipe.",
    questions: [
      {
        question: "Comment contacter FIRDAWSI CONSULTING GROUP ?",
        answer:
          "Vous pouvez passer par notre page Contact pour nous transmettre votre demande. Précisez le service concerné, votre besoin et les informations utiles afin de faciliter notre compréhension de votre projet.",
      },
      {
        question: "Comment obtenir un accompagnement personnalisé ?",
        answer:
          "Présentez-nous votre projet, vos objectifs et vos principales contraintes. Nous pourrons ainsi examiner votre demande et vous indiquer les possibilités d'accompagnement adaptées à votre situation.",
      },
      {
        question: "Les démarches et les conditions sont-elles les mêmes pour tous ?",
        answer:
          "Non. Les démarches varient selon la nature du projet, la destination, les organismes concernés et votre situation personnelle. C'est pourquoi nous privilégions un échange permettant de comprendre précisément votre besoin.",
      },
      {
        question: "Comment connaître les tarifs de vos services ?",
        answer:
          "Les tarifs dépendent de la nature de la prestation et des besoins exprimés. Contactez-nous en précisant votre projet afin de demander les informations tarifaires correspondant à votre situation.",
      },
    ],
  },
];

const categories = [
  { label: "Toutes les questions", value: "Toutes", icon: CircleHelp },
  { label: "Voyages", value: "Voyages", icon: Plane },
  { label: "Immobilier", value: "Immobilier", icon: House },
  { label: "Assurance", value: "Assurance", icon: ShieldCheck },
  { label: "Général", value: "Général", icon: MessageCircle },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-5"
      >
        <span
          className={`min-w-0 flex-1 text-sm font-semibold leading-6 transition-colors sm:text-base ${
            isOpen ? "text-sky-700" : "text-slate-800"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
            isOpen
              ? "bg-[#071B3A] text-white"
              : "bg-slate-100 text-[#071B3A]"
          }`}
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pr-2 sm:pr-12">
          <p className="text-sm leading-7 text-slate-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function SectionFAQ() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [search, setSearch] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const filteredSections = useMemo(() => {
    const term = search.trim().toLowerCase();

    return faqData
      .filter(
        (section) =>
          activeCategory === "Toutes" ||
          section.category === activeCategory
      )
      .map((section) => ({
        ...section,
        questions: section.questions.filter(
          ({ question, answer }) =>
            !term ||
            question.toLowerCase().includes(term) ||
            answer.toLowerCase().includes(term)
        ),
      }))
      .filter((section) => section.questions.length > 0);
  }, [activeCategory, search]);

  const totalResults = filteredSections.reduce(
    (total, section) => total + section.questions.length,
    0
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setOpenQuestion(null);
  }

  function handleSearch(value) {
    setSearch(value);
    setOpenQuestion(null);
  }

  return (
    <section
      id="faq-questions"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-24 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-slate-100/80 blur-3xl" />

      <div className="relative mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2">
            <CircleHelp size={17} style={{ color: SKY }} />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#071B3A]">
              Centre d'aide
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Toutes les réponses à{" "}
            <span style={{ color: SKY }}>vos questions.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Un projet de voyage, une recherche immobilière ou un besoin
            d'assurance ? Retrouvez les informations essentielles pour mieux
            comprendre nos domaines d'accompagnement et préparer votre demande.
          </p>
        </div>

        {/* Recherche corrigée pour mobile */}

        
{/* Recherche mobile corrigée */}
<div className="mx-auto mb-8 w-full max-w-2xl">
  <label htmlFor="faq-search" className="sr-only">
    Rechercher une question
  </label>

  <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm transition-colors focus-within:border-sky-400 sm:px-4 sm:py-4">
    <Search
      className="shrink-0 text-slate-400"
      size={21}
    />

    <input
      id="faq-search"
      type="search"
      value={search}
      onChange={(event) => handleSearch(event.target.value)}
      placeholder="Rechercher une question..."
      style={{
        width: "100%",
        minWidth: 0,
        maxWidth: "100%",
        fontSize: "16px",
        transform: "none",
        zoom: 1,
      }}
      className="flex-1 appearance-none border-0 bg-transparent p-0 text-base text-slate-700 outline-none placeholder:text-slate-400 focus:border-0 focus:outline-none focus:ring-0"
    />

    {search && (
      <button
        type="button"
        onClick={() => handleSearch("")}
        className="shrink-0 whitespace-nowrap text-xs font-semibold text-slate-500 hover:text-[#071B3A]"
      >
        Effacer
      </button>
    )}
  </div>
</div>


        {/* Catégories */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(({ label, value, icon: Icon }) => {
            const isActive = activeCategory === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() => handleCategoryChange(value)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-xs font-semibold transition-all sm:text-sm ${
                  isActive
                    ? "border-[#071B3A] bg-[#071B3A] text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-[#071B3A]"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Questions */}
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              <span className="font-bold text-[#071B3A]">
                {totalResults}
              </span>{" "}
              {totalResults > 1
                ? "questions trouvées"
                : "question trouvée"}
            </p>

            {activeCategory !== "Toutes" && (
              <button
                type="button"
                onClick={() => handleCategoryChange("Toutes")}
                className="text-xs font-semibold text-sky-700 hover:text-[#071B3A]"
              >
                Voir toutes les questions
              </button>
            )}
          </div>

          {filteredSections.length > 0 ? (
            <div className="space-y-10">
              {filteredSections.map((section) => {
                const Icon = section.icon;

                return (
                  <div
                    key={section.category}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <div className="mb-3 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#071B3A] text-white">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#071B3A] sm:text-xl">
                          {section.category}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {section.intro}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:px-7">
                      {section.questions.map((item) => {
                        const questionKey = `${section.category}-${item.question}`;

                        return (
                          <FAQItem
                            key={questionKey}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openQuestion === questionKey}
                            onToggle={() =>
                              setOpenQuestion((previous) =>
                                previous === questionKey
                                  ? null
                                  : questionKey
                              )
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center">
              <Search
                className="mx-auto mb-4 text-slate-400"
                size={32}
              />

              <h3 className="font-bold text-[#071B3A]">
                Aucune question trouvée
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Essayez un autre mot-clé ou sélectionnez une autre catégorie.
              </p>

              <button
                type="button"
                onClick={() => {
                  handleSearch("");
                  handleCategoryChange("Toutes");
                }}
                className="mt-5 text-sm font-semibold text-sky-700 hover:text-[#071B3A]"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#071B3A] px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sky-300">
                <MessageCircle size={19} />
                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  Besoin d'aide ?
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Votre projet mérite une réponse personnalisée.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Vous n'avez pas trouvé la réponse à votre question ? Présentez
                votre besoin à notre équipe pour échanger sur les possibilités
                d'accompagnement.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex max-w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-sky-400 px-5 py-4 text-sm font-bold text-[#071B3A] transition hover:bg-white sm:px-6"
            >
              Contacter notre équipe
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-400">
          Les démarches, conditions et garanties peuvent varier selon votre
          situation et les organismes concernés. Les informations officielles
          et les documents contractuels applicables restent les références.
        </p>
      </div>
    </section>
  );
}
