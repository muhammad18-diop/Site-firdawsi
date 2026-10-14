
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Compass,
  Users,
  ArrowUpRight,
} from "lucide-react";

const valeurs = [
  {
    numero: "01",
    titre: "Confiance",
    description:
      "Nous construisons des relations durables fondées sur la transparence, l’écoute et le respect de nos engagements.",
    icon: ShieldCheck,
  },
  {
    numero: "02",
    titre: "Excellence",
    description:
      "Nous accordons une attention particulière à la qualité de nos services et à chaque détail de votre accompagnement.",
    icon: Award,
  },
  {
    numero: "03",
    titre: "Proximité",
    description:
      "Nous prenons le temps de comprendre vos attentes afin de vous proposer des solutions adaptées à votre situation.",
    icon: HeartHandshake,
  },
  {
    numero: "04",
    titre: "Engagement",
    description:
      "Nous abordons chaque projet avec sérieux, disponibilité et la volonté de vous accompagner à chaque étape.",
    icon: Compass,
  },
  {
    numero: "05",
    titre: "Respect",
    description:
      "Nous privilégions une relation professionnelle attentive à vos besoins, à vos objectifs et à vos priorités.",
    icon: Users,
  },
];

function NosValeurs() {
  return (
    <section
      id="nos-valeurs"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">

        {/* En-tête */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Ce qui nous définit
              </p>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#071D30] md:text-6xl">
              Nos valeurs,
              <span className="block font-light text-sky-600">
                notre engagement.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-600 lg:justify-self-end">
            Nos valeurs guident chacune de nos actions et façonnent
            la relation que nous souhaitons construire avec nos clients.
            Elles sont au cœur de notre vision du conseil et du service.
          </p>
        </div>

        {/* Valeurs */}
        <div className="border-t border-gray-200">
          {valeurs.map((valeur) => {
            const Icon = valeur.icon;

            return (
              <article
                key={valeur.numero}
                className="group grid gap-5 border-b border-gray-200 py-8 transition-colors duration-300 hover:bg-slate-50/80 sm:grid-cols-[70px_1fr_2fr_40px] sm:items-center sm:gap-8 md:py-10"
              >
                <span className="text-sm font-medium tracking-widest text-sky-600">
                  {valeur.numero}
                </span>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gray-200 text-[#123B5D] transition-colors duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#071D30] md:text-2xl">
                    {valeur.titre}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                  {valeur.description}
                </p>

                <ArrowUpRight
                  size={21}
                  strokeWidth={1.5}
                  className="hidden text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-600 sm:block"
                />
              </article>
            );
          })}
        </div>

        {/* Signature */}
        <div className="mt-12 flex flex-col gap-4 border-l-2 border-sky-500 py-2 pl-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#071D30] md:text-xl">
            L’excellence au cœur de vos besoins.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#123B5D] transition hover:text-sky-600"
          >
            Parlons de votre projet
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default NosValeurs;
