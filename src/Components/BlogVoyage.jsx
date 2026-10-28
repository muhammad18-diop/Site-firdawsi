
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Globe2,
  MapPin,
  BookOpen,
  Compass,
  X,
} from "lucide-react";

const NAVY = "#071B3A";
const SKY = "#38BDF8";

const destinations = [
  {
    name: "Dakar",
    location: "Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85",
    description:
      "Entre patrimoine, culture et littoral, Dakar offre une première découverte de la diversité sénégalaise.",
  },
  {
    name: "Île de Gorée",
    location: "Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
    description:
      "L’île de Gorée invite à découvrir un patrimoine historique majeur, des ruelles pittoresques et une atmosphère singulière.",
  },
  {
    name: "Delta du Saloum",
    location: "Sine-Saloum, Sénégal",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    description:
      "Mangroves, bolongs et paysages naturels font du Delta du Saloum une destination privilégiée pour les amoureux de nature.",
  },
  {
    name: "Saly",
    location: "Petite Côte, Sénégal",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    description:
      "Saly séduit par son littoral, ses plages et ses nombreuses possibilités de détente et d’activités nautiques.",
  },
  {
    name: "Saint-Louis",
    location: "Saint-Louis, Sénégal",
    image:
      "https://lp-cms-production.imgix.net/2019-06/bb71b5df2d7b4fb9796b5a5a1366eee0-pont-faidherbe.jpg?auto=format&fit=crop&w=1200&q=85",
    description:
      "Découvrez le charme historique de Saint-Louis, son architecture colorée et le célèbre pont Faidherbe.",
  },
  {
    name: "Lac Rose",
    location: "Région de Dakar, Sénégal",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
    description:
      "Le Lac Rose et ses paysages environnants offrent une escapade originale à proximité de Dakar.",
  },
  {
    name: "Casamance",
    location: "Sud du Sénégal",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85",
    description:
      "La Casamance se distingue par ses paysages verdoyants, ses plages, ses traditions et sa richesse culturelle.",
  },
];

const articles = [
  {
    id: 1,
    category: "Actualités Sénégal",
    date: "21 octobre 2026",
    readTime: "5 min",
    title: "Le Sénégal, une destination aux mille visages",
    excerpt:
      "De Dakar aux plages de la Petite Côte, en passant par Saint-Louis, le Sine-Saloum et la Casamance, le Sénégal offre une diversité de paysages, de cultures et d’expériences inoubliables. Découvrez les atouts d’un pays authentique, accueillant et riche en découvertes.",
    image: destinations[0].image,
    location: "Sénégal",
    tag: "À la une",
    content: `Le Sénégal est une destination qui rassemble une grande diversité de paysages, de cultures et d'expériences. Du dynamisme de Dakar au charme historique de l'île de Gorée, chaque étape permet de découvrir une nouvelle facette du pays.

Sur la Petite Côte, notamment à Saly, les plages invitent à la détente. Plus au nord, Saint-Louis séduit par son patrimoine architectural et culturel. Le Delta du Saloum offre des paysages naturels remarquables, tandis que la Casamance se distingue par ses forêts, ses plages et ses traditions.

Le Lac Rose, les réserves naturelles et les nombreuses localités du pays complètent cette richesse touristique.

Que vous recherchiez la nature, la culture, l'histoire ou le repos, le Sénégal propose des expériences variées adaptées à différents styles de voyage.

Avant votre départ, prenez le temps de définir votre itinéraire, de prévoir votre budget et de vérifier les moyens de transport et les possibilités d'hébergement.`,
  },
  {
    id: 2,
    category: "Conseils aux voyageurs",
    date: "Guide pratique",
    readTime: "5 min",
    title: "Voyager à l’international : les essentiels avant le départ",
    excerpt:
      "Passeport, visa, billets, hébergement et budget : les étapes indispensables pour préparer votre prochain voyage.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    location: "International",
    tag: "Guide pratique",
    content: `Un voyage à l’international se prépare bien avant le jour du départ. Commencez par vérifier les conditions d’entrée du pays visité : passeport, visa, autorisation électronique ou justificatifs complémentaires.

Comparez ensuite les billets d’avion en tenant compte des bagages, des escales et des conditions de modification. Prévoyez un budget pour l’hébergement, les repas, les déplacements et les imprévus.

Enfin, consultez les conseils officiels aux voyageurs et conservez des copies de vos documents importants.`,
  },
  {
    id: 3,
    category: "Tendances du tourisme",
    date: "Magazine Voyages",
    readTime: "4 min",
    title: "Tourisme international : les tendances à suivre",
    excerpt:
      "Tourisme durable, expériences locales et outils numériques transforment progressivement la manière de voyager.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85",
    location: "Dans le monde",
    tag: "Tendances",
    content: `Les voyageurs recherchent des expériences qui correspondent davantage à leurs envies, à leur budget et à leurs valeurs. La découverte du patrimoine local, les activités culturelles et les séjours axés sur la nature font partie des pistes à explorer.

Les outils numériques facilitent également la comparaison des transports et la réservation des hébergements. Toutefois, les informations importantes, notamment les conditions de visa et de sécurité, doivent toujours être vérifiées auprès de sources officielles.`,
  },
  {
    id: 4,
    category: "Destinations",
    date: "Guide destination",
    readTime: "5 min",
    title: "Sénégal : cinq destinations à découvrir autrement",
    excerpt:
      "De Dakar à Saint-Louis, en passant par Gorée, le Sine-Saloum et la Casamance, découvrez la diversité du pays.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
    location: "Sénégal",
    tag: "Découverte",
    content: `Le Sénégal propose une grande diversité de destinations. Dakar permet de découvrir la vie urbaine et culturelle. L’île de Gorée invite à explorer un patrimoine historique majeur.

Saint-Louis séduit par son identité architecturale et culturelle. Le Sine-Saloum offre des paysages naturels et des excursions sur les bolongs. Enfin, la Casamance permet de profiter des plages, des traditions et de la nature.

Choisissez votre itinéraire en fonction de la durée de votre séjour, de votre budget et des activités que vous souhaitez privilégier.`,
  },
];

const categories = [
  "Tous les articles",
  "Actualités Sénégal",
  "Conseils aux voyageurs",
  "Tendances du tourisme",
  "Destinations",
];

export default function BlogVoyages() {
  const [activeCategory, setActiveCategory] =
    useState("Tous les articles");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeDestination, setActiveDestination] = useState(0);

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDestination(
        (current) => (current + 1) % destinations.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const featuredArticle = {
    ...articles[0],
    image: destinations[activeDestination].image,
    location: destinations[activeDestination].location,
  };

  const filteredArticles =
    activeCategory === "Tous les articles"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <section
      id="blog-voyages"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        {/* En-tête */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              <span className="h-px w-10 bg-sky-500" />
              Le magazine voyages
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#123B5D] md:text-5xl">
              Explorez le monde,
              <span className="text-sky-500">
                {" "}restez informé.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Actualités touristiques au Sénégal et à
              l’international, conseils pratiques et inspirations
              pour préparer vos prochaines aventures avec FIRDAWSI
              CONSULTING GROUP.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#071B3A]">
            <Globe2 size={21} className="text-sky-500" />
            Sénégal & international
          </div>
        </div>

        {/* Filtres par catégorie */}
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

        {/* Carrousel automatique : aucun choix manuel */}
        {activeCategory === "Tous les articles" && (
          <div className="mb-12 grid gap-5 overflow-hidden rounded-2xl bg-[#071B3A] shadow-xl lg:grid-cols-[1fr_1fr]">
            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[470px]">
              {destinations.map((destination, index) => (
                <img
                  key={destination.name}
                  src={destination.image}
                  alt={destination.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    activeDestination === index
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/85 via-[#071B3A]/15 to-[#071B3A]/10" />

              <span className="absolute left-6 top-6 rounded-full bg-sky-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071B3A]">
                À la une
              </span>

              <div className="absolute bottom-7 left-6 right-6 md:left-8 md:bottom-8">
                <p className="text-sm font-semibold text-white/90">
                  {destinations[activeDestination].location}
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
                  {destinations[activeDestination].name}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-200">
                  {destinations[activeDestination].description}
                </p>
              </div>
            </div>

            {/* Article vedette */}
            <div className="flex flex-col justify-center p-7 md:p-10 xl:p-12">
              <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-300">
                {featuredArticle.category}
              </span>

              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-sky-300" />
                  {featuredArticle.date}
                </span>

                <span className="text-sky-300">•</span>

                <span className="flex items-center gap-2">
                  <Clock3 size={15} className="text-sky-300" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
                Le Sénégal, une destination{" "}
                <span className="text-sky-400">
                  aux mille visages
                </span>
              </h3>

              <p className="mt-5 leading-7 text-gray-300">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm text-sky-300">
                  <MapPin size={18} />
                  {destinations[activeDestination].location}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedArticle({
                      ...articles[0],
                      image: destinations[activeDestination].image,
                      location: destinations[activeDestination].location,
                    })
                  }
                  className="inline-flex items-center gap-3 font-bold text-sky-300 transition hover:gap-5 hover:text-white"
                >
                  Lire l’article
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Indicateurs visuels non cliquables */}
              <div className="mt-8 flex items-center gap-2">
                {destinations.map((destination, index) => (
                  <span
                    key={destination.name}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeDestination === index
                        ? "w-8 bg-sky-400"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}

                <span className="ml-auto text-xs text-gray-400">
                  {String(activeDestination + 1).padStart(2, "0")} /{" "}
                  {String(destinations.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Articles */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles
            .filter(
              (article) =>
                activeCategory !== "Tous les articles" ||
                article.id !== 1
            )
            .map((article) => (
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

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#071B3A] shadow">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                    <CalendarDays size={15} className="text-sky-500" />
                    {article.date}
                    <span className="text-gray-300">•</span>
                    <Clock3 size={15} className="text-sky-500" />
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

        {/* Bandeau de fin */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-sky-100 bg-sky-50 p-7 md:flex-row md:items-center md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
              <Compass size={28} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#123B5D] md:text-2xl">
                Votre prochaine destination commence ici.
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                Retrouvez nos conseils et nos inspirations pour préparer
                vos voyages au Sénégal et à travers le monde.
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
            aria-labelledby="article-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Fermer l’article"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071B3A] shadow transition hover:bg-sky-50"
            >
              <X size={20} />
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
                {selectedArticle.readTime}
              </div>

              <h2
                id="article-title"
                className="text-2xl font-extrabold leading-tight text-[#071B3A] md:text-4xl"
              >
                {selectedArticle.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                {selectedArticle.excerpt}
              </p>

              <p className="mt-5 whitespace-pre-line text-base leading-8 text-gray-600">
                {selectedArticle.content}
              </p>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="mt-8 rounded-lg bg-[#071B3A] px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
              >
                Fermer l’article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
