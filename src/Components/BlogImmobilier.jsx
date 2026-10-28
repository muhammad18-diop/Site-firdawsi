
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  House,
  BookOpen,
  X,
} from "lucide-react";

const NAVY = "#071B3A";
const SKY = "#38BDF8";

const articles = [
  {
    id: 1,
    category: "Actualités immobilières",
    date: "14 octobre 2026",
    readTime: "5 min",
    title:
      "Dakar : le marché locatif évolue, quels changements pour les locataires ?",
    excerpt:
      "Le marché locatif dakarois connaît des évolutions, notamment dans le segment haut de gamme. Découvrez les tendances à surveiller avant de louer.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    location: "Dakar, Sénégal",
    tag: "Actualité",
    content: `Le marché immobilier de Dakar évolue et les attentes des locataires comme des propriétaires se transforment. Selon un article publié le 14 octobre 2026 par Au Sénégal, le cœur du Sénégal, certains logements haut de gamme rencontrent davantage de difficultés à trouver preneur, tandis que la question de l'accès à un logement adapté aux moyens des ménages reste centrale.

Pour les locataires, cette évolution invite à comparer plusieurs biens avant de prendre une décision. Le prix ne doit pas être le seul critère : l'emplacement, l'accès aux transports, l'état du logement, les charges et les conditions du bail comptent également.

Pour les propriétaires, connaître les besoins du marché local et proposer un logement bien entretenu à un prix cohérent peut faciliter la recherche d'un locataire.

Conseil FIRDAWSI : comparez les offres du quartier, visitez le logement et lisez attentivement les conditions du contrat avant de vous engager.`,
    source:
      "https://www.au-senegal.com/immobilier-a-dakar-les-loyers-du-luxe-baissent-le-logement-reste-un-defi%2C18553.html",
    sourceLabel: "Au Sénégal, le cœur du Sénégal",
  },
  {
    id: 2,
    category: "Foncier et sécurité",
    date: "Guide pratique",
    readTime: "6 min",
    title:
      "Acheter un terrain au Sénégal : les vérifications indispensables",
    excerpt:
      "Avant de verser de l'argent pour un terrain, prenez le temps de vérifier les documents, les droits sur le bien et sa situation administrative.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "À savoir",
    content: `L'achat d'un terrain représente un engagement financier important. Au Sénégal, il est essentiel de ne pas se limiter à une visite sur place ou à la parole du vendeur.

Avant toute transaction, faites vérifier l'identité du vendeur, l'origine de ses droits et les documents relatifs au terrain par les services compétents et un professionnel du droit immobilier.

La nature du document présenté, la situation foncière de la parcelle, les éventuelles charges, les limites du terrain et les règles d'urbanisme doivent être examinées selon le type de droit concerné.

Ne versez pas de somme importante sur la base d'une simple promesse. Demandez des justificatifs vérifiables et formalisez les étapes de la transaction.

Conseil FIRDAWSI : faites contrôler le dossier par un notaire ou un professionnel habilité avant de signer ou de payer.`,
    source:
      "https://primature.sn/publications/actualites/conseil-des-ministres-du-25-fevrier-2026",
    sourceLabel: "Primature du Sénégal",
  },
  {
    id: 3,
    category: "Logement et habitat",
    date: "25 février 2026",
    readTime: "5 min",
    title:
      "Logement au Sénégal : quelles pistes pour faciliter l'accès à la propriété ?",
    excerpt:
      "L'accès au logement reste un enjeu national. Les orientations publiques mettent notamment l'accent sur le financement, le foncier et le logement social.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Habitat",
    content: `L'accès à un logement adapté aux revenus des ménages est un enjeu important au Sénégal. Dans son communiqué du 25 février 2026, le Gouvernement a notamment évoqué les difficultés d'accès au foncier, le financement des projets et la nécessité de développer une offre de logements plus accessible.

Les orientations présentées comprennent le développement du logement social, le renforcement des coopératives d'habitat et la réflexion sur de nouveaux mécanismes de financement.

Pour les ménages qui souhaitent devenir propriétaires, la préparation du projet reste essentielle : évaluer sa capacité financière, comprendre les modalités de paiement et vérifier la fiabilité du promoteur sont des étapes déterminantes.

Conseil FIRDAWSI : avant de souscrire à un programme immobilier, demandez un dossier écrit détaillant le prix total, les échéances, les délais annoncés et les garanties applicables.`,
    source:
      "https://primature.sn/publications/actualites/conseil-des-ministres-du-25-fevrier-2026",
    sourceLabel: "Primature du Sénégal",
  },
  {
    id: 4,
    category: "Investissement immobilier",
    date: "30 septembre 2026",
    readTime: "6 min",
    title:
      "Investir dans l'immobilier au Sénégal : privilégier la sécurité et la rentabilité",
    excerpt:
      "Emplacement, documents fonciers, coûts d'entretien et revenus locatifs : les critères à analyser avant d'investir.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Investissement",
    content: `L'immobilier peut contribuer à la constitution d'un patrimoine, mais un investissement ne garantit jamais un bénéfice automatique.

Dans une analyse publiée le 30 septembre 2026 par EnQuête+, l'expert immobilier cité souligne l'importance de la sécurité des droits, de la conformité urbanistique, de la qualité des documents et de la capacité d'un bien à générer des revenus durables.

Avant d'investir, estimez le coût total du projet : prix d'achat, frais de transaction, travaux, entretien, périodes sans locataire et charges éventuelles. Évaluez ensuite les loyers réalistes du secteur et calculez le revenu net prévisible.

Il est également important de tenir compte de la demande réelle dans la zone choisie et de vérifier que le bien correspond aux besoins des futurs occupants.

Conseil FIRDAWSI : ne choisissez pas un bien uniquement sur la base d'une promesse de plus-value. Analysez les risques, les documents et les revenus potentiels avant de vous engager.`,
    source:
      "https://www.enqueteplus.com/content/immobilier-au-s%C3%A9n%C3%A9gal-en-2026",
    sourceLabel: "EnQuête+",
  },
];

const categories = [
  "Tous les articles",
  "Actualités immobilières",
  "Foncier et sécurité",
  "Logement et habitat",
  "Investissement immobilier",
];

export default function BlogImmobilier() {
  const [activeCategory, setActiveCategory] =
    useState("Tous les articles");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);

  // Rotation automatique toutes les 2 secondes.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArticleIndex(
        (current) => (current + 1) % articles.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredArticles =
    activeCategory === "Tous les articles"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  const featuredArticle =
    activeCategory === "Tous les articles"
      ? articles[activeArticleIndex]
      : null;

  const visibleArticles = filteredArticles.filter(
    (article) => article.id !== featuredArticle?.id
  );

  return (
    <section
      id="blog-immobilier"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              <span className="h-px w-10 bg-sky-500" />
              Le magazine immobilier
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#123B5D] md:text-5xl">
              L'immobilier au Sénégal,
              <span className="text-sky-500">
                {" "}mieux comprendre pour mieux investir.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Retrouvez les actualités immobilières sénégalaises,
              des conseils sur l'achat et la location, la sécurité
              foncière et les opportunités d'investissement partout
              au Sénégal.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#123B5D]">
            <MapPin size={21} className="text-sky-500" />
            100 % Sénégal
          </div>
        </div>

        {/* Catégories */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
                activeCategory === category
                  ? "border-[#071B3A] bg-[#123B5D] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-sky-400 hover:text-sky-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article principal avec rotation automatique */}
        {featuredArticle && (
          <div className="mb-12 grid overflow-hidden rounded-2xl bg-[#071B3A] shadow-xl md:grid-cols-2">
            <div className="group relative min-h-[280px] overflow-hidden md:min-h-[400px]">
              <img
                key={featuredArticle.id}
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-[#071B3A]/10 to-transparent" />

              <span className="absolute left-6 top-6 rounded-full bg-sky-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071B3A]">
                {featuredArticle.tag}
              </span>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm font-semibold text-white">
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {featuredArticle.location}
                </span>

                <span className="rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
                  0{activeArticleIndex + 1} / 0{articles.length}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-12">
              <span className="mb-4 text-sm font-semibold text-sky-300">
                {featuredArticle.category}
              </span>

              <h3 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
                {featuredArticle.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-300">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {featuredArticle.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  {featuredArticle.readTime} de lecture
                </span>
              </div>

              {/* Indicateurs visuels non interactifs */}
              <div className="mt-6 flex items-center gap-2">
                {articles.map((article, index) => (
                  <span
                    key={article.id}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeArticleIndex
                        ? "w-8 bg-sky-400"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(featuredArticle)}
                className="mt-8 inline-flex w-fit items-center gap-3 font-bold text-sky-300 transition hover:gap-5 hover:text-white"
              >
                Lire l'article
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Cartes des articles */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <article
              key={article.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#123B5D] shadow">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  <CalendarDays
                    size={15}
                    className="shrink-0 text-sky-500"
                  />
                  {article.date}
                  <span className="text-gray-300">•</span>
                  <Clock3
                    size={15}
                    className="shrink-0 text-sky-500"
                  />
                  {article.readTime}
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#123B5D] transition group-hover:text-sky-600">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {article.excerpt}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-[#123B5D] transition hover:text-sky-600"
                >
                  Lire la suite
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Message si aucun article */}
        {filteredArticles.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            Aucun article disponible dans cette catégorie.
          </p>
        )}

        {/* Bandeau de contact */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-sky-100 bg-sky-50 p-7 md:flex-row md:items-center md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
              <House size={28} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#123B5D] md:text-2xl">
                Votre projet immobilier mérite un accompagnement sérieux.
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                Vous souhaitez louer, acheter, vendre ou investir au
                Sénégal ? Échangeons sur votre projet et vos besoins.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#123B5D] px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            Nous contacter
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      {/* Fenêtre de lecture */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071B3A]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="immobilier-article-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Fermer l'article"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071B3A] shadow transition hover:bg-sky-100"
            >
              <X size={21} />
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="h-56 w-full object-cover md:h-72"
            />

            <div className="p-6 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-sky-600">
                <BookOpen size={18} />
                {selectedArticle.category}
                <span className="text-gray-300">•</span>
                {selectedArticle.readTime} de lecture
              </div>

              <h2
                id="immobilier-article-title"
                className="text-2xl font-extrabold leading-tight text-[#071B3A] md:text-4xl"
              >
                {selectedArticle.title}
              </h2>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} className="text-sky-500" />
                {selectedArticle.location}
              </div>

              <p className="mt-6 whitespace-pre-line text-base leading-8 text-gray-600">
                {selectedArticle.content}
              </p>

              {selectedArticle.source && (
                <div className="mt-8 border-t border-gray-100 pt-5">
                  <p className="mb-2 text-sm font-bold text-[#071B3A]">
                    Pour aller plus loin
                  </p>

                  <a
                    href={selectedArticle.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-[#071B3A]"
                  >
                    Consulter la source : {selectedArticle.sourceLabel}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="mt-8 rounded-lg bg-[#071B3A] px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
              >
                Fermer l'article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
