import { Calendar, ArrowUpRight, Tag } from "lucide-react";

// Section 7 : Publier des informations utiles, datées et vérifiées sur les activités de FCG[cite: 1]
const articles = [
  {
    id: 1,
    titre: "Préparer son projet d'études ou de mobilité à l'international",
    categorie: "Voyage & Mobilité",
    date: "15 Octobre 2026",
    extrait: "Les étapes clés et conseils pratiques pour bien anticiper vos démarches d'accompagnement à l'étranger.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
    lien: "/actualite",
  },
  {
    id: 2,
    titre: "Les critères essentiels pour évaluer un projet immobilier",
    categorie: "Immobilier",
    date: "02 Octobre 2026",
    extrait: "Découvrez les aspects fondamentaux à étudier avant d'engager vos démarches d'acquisition ou de location.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    lien: "/actualite",
  },
  {
    id: 3,
    titre: "Comprendre les garanties essentielles de votre assurance",
    categorie: "Assurance",
    date: "20 Septembre 2026",
    extrait: "Un point d'information clair pour mieux appréhender les niveaux de protection adaptés à vos biens.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=85",
    lien: "/actualite",
  },
];

function Actualites() {
  return (
    <section id="actualites" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* En-tête de section */}
        <div className="flex flex-col justify-between gap-6 border-b border-gray-200 pb-10 md:flex-row md:items-end md:pb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-950">
                Informations & Conseils
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
              Dernières <span className="text-sky-600">actualités.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-gray-600">
            Retrouvez nos informations utiles, nos guides pratiques et l’actualité des services de FIRDAWSI CONSULTING GROUP[cite: 1].
          </p>
        </div>

        {/* Grille d'actualités */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image d'illustration */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titre}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#071D30]/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  <Tag size={12} className="text-sky-300" />
                  {item.categorie}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={14} className="text-sky-600" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071D30] transition group-hover:text-sky-600">
                    {item.titre}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.extrait}
                  </p>
                </div>

                <a
                  href={item.lien}
                  className="mt-6 inline-flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-bold text-sky-700 transition group-hover:text-[#071D30]"
                >
                  <span>Lire l'article</span>
                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Actualites;