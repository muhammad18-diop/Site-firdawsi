
import { useEffect, useState } from "react";
import { Users, HeartHandshake, Globe2, TrendingUp } from "lucide-react";

const statistiques = [
  {
    valeur: 2000,
    suffixe: "+",
    titre: "Clients accompagnés",
    description: "Des projets suivis avec attention.",
    icon: Users,
  },
  {
    valeur: 95,
    suffixe: "%",
    titre: "Taux de satisfaction",
    description: "La qualité au cœur de notre engagement.",
    icon: HeartHandshake,
  },
  {
    valeur: 50,
    suffixe: "+",
    titre: "Pays couverts",
    description: "Une ouverture sur l’international.",
    icon: Globe2,
  },
  {
    valeur: 3,
    suffixe: "",
    titre: "Domaines d’expertise",
    description: "Voyages, immobilier et assurance.",
    icon: TrendingUp,
  },
];

function Statistiques() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    const section = document.getElementById("statistiques");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="statistiques"
      className="relative overflow-hidden bg-[#071D30] py-20 md:py-28"
    >
      {/* Décoration discrète */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/[0.06]" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        {/* En-tête */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-sky-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                Nos chiffres clés
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              La confiance se construit.
              <span className="block font-light text-slate-400">
                L’engagement se mesure.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Notre engagement se traduit par une attention constante
            portée à vos projets et à la qualité de notre accompagnement.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {statistiques.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.titre}
                className={`group py-9 transition duration-500 hover:bg-white/[0.04] md:px-7 lg:px-8 ${
                  index !== statistiques.length - 1
                    ? "border-b border-white/15 sm:border-r lg:border-b-0"
                    : ""
                } ${
                  index === 1 ? "lg:border-r" : ""
                } ${
                  index === 2 ? "lg:border-r" : ""
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    0{index + 1}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-sky-400 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <p className="mb-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {visible ? stat.valeur : 0}
                  <span className="text-sky-400">{stat.suffixe}</span>
                </p>

                <h3 className="mb-3 text-base font-semibold text-white">
                  {stat.titre}
                </h3>

                <p className="max-w-[230px] text-sm leading-6 text-slate-400">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Signature */}
        <div className="mt-8 flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>FIRDAWSI CONSULTING GROUP</p>
          <p className="tracking-wide">
            L’EXCELLENCE AU CŒUR DE VOS BESOINS
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistiques;
