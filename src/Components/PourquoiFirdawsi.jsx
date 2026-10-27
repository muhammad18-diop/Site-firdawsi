import { HeartHandshake, ShieldCheck, UserCheck, Award, ArrowRight } from "lucide-react";

function PourquoiNousChoisir() {
  // Les 4 engagements exacts recommandés dans le Cahier des charges (Section 5)
  const engagements = [
    {
      icon: HeartHandshake,
      titre: "Écoute et bienveillance",
      description:
        "Chaque projet commence par la compréhension de vos besoins.",
    },
    {
      icon: ShieldCheck,
      titre: "Transparence et confiance",
      description:
        "Des informations claires sur les démarches, les conditions et les possibilités.",
    },
    {
      icon: UserCheck,
      titre: "Accompagnement personnalisé",
      description:
        "Une orientation adaptée à votre situation.",
    },
    {
      icon: Award,
      titre: "Engagement professionnel",
      description:
        "Le souci de vous accompagner avec sérieux à chaque étape.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071D30] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête de section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
            Notre philosophie
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Pourquoi choisir FCG ?
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-sky-400" />

          <p className="mt-6 text-base leading-8 text-gray-200 md:text-lg">
            Nous plaçons la qualité de la relation humaine et la clarté des conseils
            au cœur de chacun de nos accompagnements.
          </p>
        </div>

        {/* Grille de 4 blocs d'engagements (4 colonnes desktop, 2 colonnes/1 colonne mobile) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-sky-400/50 hover:bg-white/10"
              >
                {/* Icône simple au-dessus du titre */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-sky-300/40 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:bg-sky-400 group-hover:text-[#071D30]">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-white transition group-hover:text-sky-300">
                  {item.titre}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {item.description}
                </p>

                <div className="mt-6 h-0.5 w-10 bg-sky-400 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* Transition vers la présentation de l'histoire et des valeurs (Section 6) */}
        <div className="mt-20 border-t border-white/15 pt-12 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Une entreprise guidée par des valeurs humaines
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300">
            Chez FIRDAWSI CONSULTING GROUP, nous croyons que chaque projet mérite une attention particulière. Notre approche repose sur l’écoute, la bonté, la confiance et la recherche de solutions.
          </p>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/80 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#071D30]"
          >
            Découvrir notre histoire
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default PourquoiNousChoisir;