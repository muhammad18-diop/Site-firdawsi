
import {
  Plane,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  BriefcaseBusiness,
  FileCheck,
  Headset,
} from "lucide-react";

const expertises = [
  {
    numero: "01",
    titre: "Voyages & mobilité",
    description:
      "Nous vous accompagnons dans l'organisation de vos voyages avec des solutions adaptées à vos destinations et à vos besoins.",
    points: [
      "Conseil et accompagnement",
      "Préparation de vos projets de voyage",
      "Solutions adaptées à vos besoins",
    ],
    icon: Plane,
    couleur: "bg-sky-50 text-sky-700",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
  },
  {
    numero: "02",
    titre: "Expertise immobilière",
    description:
      "Nous vous aidons à concrétiser vos projets immobiliers en recherchant des solutions correspondant à vos objectifs.",
    points: [
      "Accompagnement immobilier",
      "Recherche de biens",
      "Conseil pour vos projets",
    ],
    icon: Building2,
    couleur: "bg-blue-50 text-blue-800",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    numero: "03",
    titre: "Assurance & protection",
    description:
      "Nous vous orientons vers des solutions de protection adaptées à vos biens et à vos besoins.",
    points: [
      "Conseil en assurance",
      "Protection de vos biens",
      "Accompagnement personnalisé",
    ],
    icon: ShieldCheck,
    couleur: "bg-cyan-50 text-cyan-800",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
  },
  {
    numero: "04",
    titre: "Conseil aux entreprises",
    description:
      "Nous accompagnons les professionnels dans leur réflexion et le développement de leurs activités.",
    points: [
      "Conseil stratégique",
      "Accompagnement des projets",
      "Solutions adaptées aux entreprises",
    ],
    icon: BriefcaseBusiness,
    couleur: "bg-indigo-50 text-indigo-800",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    numero: "05",
    titre: "Assistance administrative",
    description:
      "Nous vous aidons à mieux préparer et organiser vos démarches administratives selon vos besoins.",
    points: [
      "Orientation dans les démarches",
      "Préparation des dossiers",
      "Accompagnement personnalisé",
    ],
    icon: FileCheck,
    couleur: "bg-emerald-50 text-emerald-800",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  },
  {
    numero: "06",
    titre: "Accompagnement & assistance",
    description:
      "Nous vous proposons un accompagnement personnalisé pour faciliter vos projets et vos différentes démarches.",
    points: [
      "Écoute de vos besoins",
      "Orientation vers des solutions adaptées",
      "Suivi de votre demande",
    ],
    icon: Headset,
    couleur: "bg-amber-50 text-amber-800",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

function Expertises() {
  return (
    <section
      id="expertises"
      className="bg-gray-50 px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-screen-xl">

        {/* En-tête */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-sky-600">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Nos domaines d'expertise
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            Des expertises au service de vos{" "}
            <span className="text-sky-600">
              ambitions.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
            FIRDAWSI CONSULTING GROUP vous accompagne dans
            vos projets de voyage, d'immobilier et d'assurance,
            ainsi que dans vos besoins professionnels et
            administratifs, grâce à une approche personnalisée
            fondée sur l'écoute, le conseil et la confiance.
          </p>
        </div>

        {/* Grille de 6 cartes : 3 colonnes sur ordinateur */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((expertise) => {
            const Icon = expertise.icon;

            return (
              <article
                key={expertise.numero}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <img
                    src={expertise.image}
                    alt={expertise.titre}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-sm font-bold tracking-widest text-white">
                    EXPERTISE {expertise.numero}
                  </span>

                  <div
                    className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${expertise.couleur}`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-blue-950">
                    {expertise.titre}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {expertise.description}
                  </p>

                  {/* Points clés */}
                  <ul className="mt-6 space-y-3">
                    {expertise.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-sky-600"
                        />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Lien */}

                  
                  <a
                    href="/services"
                    className="mt-8 inline-flex items-center gap-2 border-t border-gray-100 pt-5 font-semibold text-[#071D30] transition hover:text-sky-600"
                  >
                    En savoir plus

                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
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
