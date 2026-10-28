
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
  CarFront,
  House,
  HeartPulse,
  Plane,
  BookOpen,
  X,
  Umbrella,
} from "lucide-react";

const NAVY = "#071B3A";
const SKY = "#38BDF8";

const articles = [
  {
    id: 1,
    category: "Assurance automobile",
    date: "Guide pratique",
    readTime: "5 min",
    title:
      "Assurance automobile au Sénégal : ce qu'il faut savoir avant de prendre la route",
    excerpt:
      "Responsabilité civile, garanties complémentaires et documents : découvrez les points essentiels pour choisir votre assurance automobile.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "À savoir",
    icon: CarFront,
    content: `Au Sénégal, l'assurance automobile est un élément essentiel de la protection des conducteurs et des autres usagers de la route. Avant de circuler, vérifiez que votre véhicule dispose de l'assurance de responsabilité civile exigée par la réglementation applicable.

Cette couverture concerne les dommages causés à des tiers dans les conditions prévues au contrat. Elle ne signifie pas nécessairement que les dommages subis par votre propre véhicule seront indemnisés.

Selon vos besoins, vous pouvez étudier d'autres garanties, par exemple contre le vol, l'incendie ou les dommages au véhicule. Les garanties, exclusions, franchises et plafonds varient selon les contrats.

Avant de signer, comparez les offres et demandez une explication claire des situations couvertes.

Conseil FIRDAWSI : ne choisissez pas uniquement en fonction du prix. Vérifiez les garanties, les exclusions et les démarches à suivre en cas d'accident.`,
  },
  {
    id: 2,
    category: "Assurance habitation",
    date: "Conseil immobilier",
    readTime: "5 min",
    title:
      "Propriétaire ou locataire : comment protéger son logement au Sénégal ?",
    excerpt:
      "Incendie, dégâts des eaux, dommages aux biens : identifiez les risques à prendre en compte pour protéger votre habitation.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Protection",
    icon: House,
    content: `Un logement représente souvent un investissement important. Pourtant, les risques liés aux incendies, à certains dégâts des eaux, aux dommages matériels ou aux responsabilités envers des tiers sont parfois négligés.

L'assurance habitation peut proposer plusieurs types de garanties, mais leur contenu dépend du contrat souscrit. Certaines protections peuvent concerner le bâtiment, d'autres les meubles et effets personnels, ou encore la responsabilité civile de l'assuré.

Avant de choisir une formule, précisez votre situation : propriétaire occupant, propriétaire bailleur ou locataire. Faites également le point sur les biens à protéger et les risques auxquels votre logement est exposé.

Lisez attentivement les exclusions, les plafonds d'indemnisation et les franchises. En cas de sinistre, prenez des photos et contactez rapidement votre assureur en respectant les délais prévus au contrat.

Conseil FIRDAWSI : demandez une proposition adaptée à votre logement et vérifiez précisément ce qui est couvert avant de vous engager.`,
  },
  {
    id: 3,
    category: "Assurance santé",
    date: "Guide pratique",
    readTime: "6 min",
    title:
      "Assurance santé au Sénégal : comprendre les garanties et les remboursements",
    excerpt:
      "Consultations, hospitalisation, médicaments et prise en charge : les critères à examiner pour choisir une couverture santé adaptée.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Bien-être",
    icon: HeartPulse,
    content: `Les dépenses de santé peuvent représenter une charge importante pour un individu ou une famille. Une couverture santé adaptée peut aider à mieux anticiper certains frais médicaux, selon les conditions prévues au contrat.

Avant de souscrire, vérifiez les consultations prises en charge, les frais d'hospitalisation, les médicaments concernés et les éventuelles limites annuelles de remboursement.

Renseignez-vous aussi sur les délais de carence, les exclusions, les démarches de remboursement et les établissements de santé partenaires. Certaines formules exigent une autorisation préalable pour certaines prestations.

Si vous bénéficiez déjà d'une couverture par votre employeur, une mutuelle ou un autre dispositif, comparez les protections afin de comprendre les frais restant à votre charge.

Conseil FIRDAWSI : demandez un tableau écrit des garanties et des plafonds. Vérifiez les modalités de prise en charge avant de choisir votre contrat.`,
  },
  {
    id: 4,
    category: "Assurance voyage",
    date: "Conseil aux voyageurs",
    readTime: "4 min",
    title:
      "Préparer un voyage depuis le Sénégal : faut-il souscrire une assurance voyage ?",
    excerpt:
      "Frais médicaux à l'étranger, assistance, annulation et bagages : découvrez les garanties à examiner avant votre départ.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal & international",
    tag: "Voyage",
    icon: Plane,
    content: `Lors d'un voyage à l'étranger, un imprévu peut entraîner des dépenses importantes. Selon la destination et le contrat, une assurance voyage peut couvrir certains frais médicaux urgents, l'assistance, le rapatriement ou des incidents liés au déplacement.

Certaines formules prévoient également des garanties en cas d'annulation ou de retard, ou concernant les bagages. Ces protections sont soumises à des conditions et à des exclusions spécifiques.

Avant de souscrire, vérifiez la durée de couverture, les pays concernés, les plafonds de remboursement et les démarches à effectuer en cas d'urgence.

Si vous demandez un visa, consultez les exigences officielles du pays concerné : une assurance particulière peut être demandée selon la destination et le type de séjour.

Conseil FIRDAWSI : comparez les garanties de votre assurance voyage avec celles déjà incluses dans vos autres contrats ou moyens de paiement, sans supposer qu'elles sont identiques.`,
  },
  {
    id: 5,
    category: "Conseils et prévention",
    date: "Guide pratique",
    readTime: "5 min",
    title:
      "Comment choisir une compagnie d'assurance au Sénégal ?",
    excerpt:
      "Avant de signer un contrat, apprenez à comparer les garanties, à examiner les exclusions et à vérifier les conditions d'indemnisation.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Nos conseils",
    icon: ShieldCheck,
    content: `Choisir une assurance ne consiste pas seulement à trouver le tarif le plus bas. Il faut surtout comprendre la protection proposée et les conditions dans lesquelles l'assureur intervient.

Commencez par identifier vos besoins et les risques que vous souhaitez couvrir. Demandez ensuite plusieurs propositions écrites afin de comparer les garanties, les plafonds, les franchises et les exclusions.

Vérifiez l'identité de l'organisme, son habilitation à exercer l'activité concernée et les coordonnées de son service de réclamation. Au Sénégal, le secteur des assurances s'inscrit notamment dans le cadre réglementaire de la Conférence interafricaine des marchés d'assurances (CIMA).

Avant de signer, prenez connaissance des conditions générales et particulières. Demandez des explications lorsque certains termes ou délais ne sont pas clairs.

Conseil FIRDAWSI : conservez votre contrat, vos quittances et les justificatifs importants dans un endroit facilement accessible.`,
  },
  {
    id: 6,
    category: "Sinistres et indemnisation",
    date: "Guide pratique",
    readTime: "5 min",
    title:
      "Un sinistre vient de se produire : quelles démarches effectuer ?",
    excerpt:
      "Accident, dégât matériel ou autre incident : les bons réflexes pour documenter la situation et contacter votre assureur.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Démarches",
    icon: Umbrella,
    content: `Lorsqu'un sinistre survient, commencez par assurer la sécurité des personnes et contacter les services d'urgence si nécessaire.

Documentez ensuite la situation lorsque cela peut être fait sans danger : photographies, coordonnées des personnes concernées, factures et autres justificatifs utiles. Selon la nature de l'incident, un constat ou un document établi par les autorités peut être nécessaire.

Contactez votre assureur dans les délais et selon la procédure prévus au contrat. Décrivez les faits avec précision et conservez une copie de votre déclaration ainsi que les échanges effectués.

Ne présumez pas qu'une indemnisation est automatiquement acquise : elle dépend notamment des garanties souscrites, des exclusions et des circonstances du sinistre.

Conseil FIRDAWSI : préparez à l'avance les coordonnées de votre assureur et gardez votre numéro de contrat à portée de main.`,
  },
];

const categories = [
  "Tous les articles",
  "Assurance automobile",
  "Assurance habitation",
  "Assurance santé",
  "Assurance voyage",
  "Conseils et prévention",
  "Sinistres et indemnisation",
];

export default function BlogAssurances() {
  const [activeCategory, setActiveCategory] =
    useState("Tous les articles");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);

  // Défilement automatique toutes les deux secondes.
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
      id="blog-assurance"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              <span className="h-px w-10 bg-sky-500" />
              Le magazine assurances
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#123B5D] md:text-5xl">
              Comprenez vos garanties,
              <span className="text-sky-500">
                {" "}protégez l'essentiel.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Découvrez nos conseils sur les assurances au Sénégal :
              automobile, habitation, santé, voyage et protection
              de vos biens. Des informations pratiques pour mieux
              comprendre vos contrats et faire des choix éclairés.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#123B5D]">
            <MapPin size={21} className="text-sky-500" />
            Sénégal
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
                  {String(activeArticleIndex + 1).padStart(2, "0")} /{" "}
                  {String(articles.length).padStart(2, "0")}
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

        {/* Grille des autres articles */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => {
            const ArticleIcon = article.icon;

            return (
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

                  <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#123B5D] shadow">
                    <ArticleIcon size={15} className="text-sky-500" />
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
            );
          })}
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
              <ShieldCheck size={28} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#123B5D] md:text-2xl">
                Protégez ce qui compte pour vous.
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                Besoin d'informations sur une assurance automobile,
                habitation, santé ou voyage ? Contactez notre équipe
                pour échanger sur vos besoins.
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
            aria-labelledby="assurance-article-title"
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
                id="assurance-article-title"
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

              <p className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-gray-600">
                <strong className="text-[#071B3A]">
                  À retenir :{" "}
                </strong>
                les garanties et les conditions varient selon les
                contrats. Consultez les documents contractuels et
                demandez conseil à un professionnel habilité avant
                toute souscription.
              </p>

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
