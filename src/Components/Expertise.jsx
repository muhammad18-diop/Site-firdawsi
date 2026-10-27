import { Plane, Building2, ShieldCheck, ArrowRight } from "lucide-react";

// Modification selon la Section 4 : Ne conserver que les 3 cartes principales sur l'accueil[cite: 1]
const expertises = [
  {
    numero: "01",
    titre: "Voyages & mobilité",
    description:
      "Billetterie, préparation des projets de voyage et assistance dans les démarches de mobilité, selon la destination.",
    icon: Plane,
    couleur: "bg-sky-50 text-sky-700",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
    link: "/services#voyages",
  },
  {
    numero: "02",
    titre: "Expertise immobilière",
    description:
      "Recherche de biens et accompagnement des projets immobiliers selon vos objectifs.",
    icon: Building2,
    couleur: "bg-blue-50 text-blue-800",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
    link: "/services#immobilier",
  },
  {
    numero: "03",
    titre: "Assurance & protection",
    description:
      "Orientation vers les solutions d'assurance adaptées à votre situation et aux garanties disponibles.",
    icon: ShieldCheck,
    couleur: "bg-cyan-50 text-cyan-800",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85",
    link: "/services#assurance",
  },
];

function Expertises() {
  return (
    <section id="services" className="bg-gray-50 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-screen-xl">
        {/* En-tête de section */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-sky-600">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Nos domaines d'expertise
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#123B5D] md:text-5xl">
            Des expertises au service de vos{" "}
            <span className="text-sky-600">projets.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
            FIRDAWSI CONSULTING GROUP vous accompagne dans vos besoins essentiels
            grâce à des conseils adaptés, une approche humaine et un suivi personnalisé.
          </p>
        </div>

        {/* Grille des 3 domaines prioritaires[cite: 1] */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {expertises.map((expertise) => {
            const Icon = expertise.icon;

            return (
              <article
                key={expertise.numero}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image illustrative avec filtre sombre */}
                <div className="relative h-60 shrink-0 overflow-hidden">
                  <img
                    src={expertise.image}
                    alt={expertise.titre}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-xs font-bold tracking-widest text-sky-300 uppercase">
                    Domaine {expertise.numero}
                  </span>

                  <div
                    className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${expertise.couleur}`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">
                      {expertise.titre}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {expertise.description}
                    </p>
                  </div>

                  {/* Bouton commun conforme : "Découvrir le service"[cite: 1] */}
                  <a
                    href={expertise.link}
                    className="mt-8 inline-flex items-center justify-between border-t border-gray-100 pt-5 font-semibold text-sky-700 transition group-hover:text-sky-500"
                  >
                    <span>Découvrir le service</span>
                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertises;