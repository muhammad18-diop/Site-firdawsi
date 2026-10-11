import {
  ShieldCheck,
  Users,
  Award,
  Headset,
  ArrowRight,
} from "lucide-react";

function PourquoiNousChoisir() {
  const avantages = [
    {
      icon: ShieldCheck,
      titre: "Fiabilité et confiance",
      description:
        "Nous privilégions la transparence, le sérieux et la confiance dans chacune de nos collaborations.",
    },
    {
      icon: Users,
      titre: "Accompagnement personnalisé",
      description:
        "Nous adaptons nos solutions à vos besoins pour vous proposer un accompagnement sur mesure.",
    },
    {
      icon: Award,
      titre: "Qualité de service",
      description:
        "Nous mettons notre savoir-faire et notre engagement au service de votre satisfaction.",
    },
    {
      icon: Headset,
      titre: "Écoute et disponibilité",
      description:
        "Nous restons à votre écoute pour vous conseiller et vous accompagner à chaque étape.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#123B5D] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
            Nos engagements
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Pourquoi nous choisir ?
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-sky-400" />

          <p className="mt-6 text-base leading-8 text-gray-200 md:text-lg">
            Chez FIRDAWSI Consulting Group, nous plaçons vos besoins au
            cœur de nos priorités pour vous accompagner avec sérieux,
            professionnalisme et engagement.
          </p>
        </div>

        {/* Avantages sans cartes */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {avantages.map((avantage, index) => {
            const Icon = avantage.icon;

            return (
              <div key={index} className="group">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/50 text-sky-300 transition duration-300 group-hover:bg-sky-400 group-hover:text-[#123B5D]">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {avantage.titre}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-200">
                  {avantage.description}
                </p>

                <div className="mt-5 h-0.5 w-10 bg-sky-400 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* Bouton En savoir plus */}
        <div className="mt-20 border-t border-white/20 pt-10 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">
            Votre satisfaction, notre priorité.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-200">
            Découvrez notre approche, nos engagements et les valeurs
            qui guident FIRDAWSI Consulting Group.
          </p>

          <a
            href="/a-propos"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#123B5D]"
          >
            En savoir plus
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default PourquoiNousChoisir;