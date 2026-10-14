
import { ArrowUpRight, Compass, ShieldCheck, Handshake } from "lucide-react";

function NotreHistoire() {
  return (
    <section id="notre-histoire" className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">

        {/* En-tête */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-sky-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
                FIRDAWSI CONSULTING GROUP
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#071D30] md:text-6xl">
              Une vision.
              <br />
              <span className="font-light text-sky-600">
                Des engagements.
              </span>
              <br />
              Votre confiance.
            </h2>
          </div>

          <div className="max-w-lg md:justify-self-end">
            <p className="border-l-2 border-sky-500 pl-6 text-base leading-8 text-gray-600 md:text-lg">
              Chaque projet représente une ambition, une étape importante
              ou une nouvelle perspective. Notre rôle est de vous aider
              à avancer avec clarté, confiance et sérénité.
            </p>
          </div>
        </div>

        {/* Bloc principal */}
        <div className="grid overflow-hidden bg-[#071D30] lg:grid-cols-2">

          {/* Photographie */}
          <div className="relative min-h-[350px] lg:min-h-[580px]">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
              alt="Environnement professionnel et espace de travail"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/80 via-transparent to-[#071D30]/10"></div>

            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
                Notre engagement
              </p>
              <p className="max-w-md text-2xl font-semibold leading-snug text-white md:text-3xl">
                L’excellence au cœur de vos besoins.
              </p>
            </div>
          </div>

          {/* Histoire et identité */}
          <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-10 md:px-14 lg:px-16 lg:py-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Notre histoire
            </p>

            <h3 className="mb-7 text-3xl font-semibold leading-tight md:text-4xl">
              Donner du sens à chaque projet.
            </h3>

            <p className="mb-5 text-sm leading-8 text-gray-300 md:text-base">
              FIRDAWSI CONSULTING GROUP accompagne les particuliers
              et les professionnels dans leurs projets de voyage,
              d’immobilier et d’assurance.
            </p>

            <p className="mb-10 text-sm leading-8 text-gray-300 md:text-base">
              Notre approche repose sur la compréhension de vos besoins,
              la recherche de solutions adaptées et un accompagnement
              attentif à chaque étape. Nous souhaitons faire de chaque
              collaboration une relation fondée sur la confiance,
              la transparence et le professionnalisme.
            </p>

            <a
              href="/about"
              className="group inline-flex w-fit items-center gap-4 border-b border-sky-400 pb-3 text-sm font-semibold text-white transition hover:text-sky-300"
            >
              Découvrir notre univers
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Principes */}
        <div className="grid border-b border-gray-200 sm:grid-cols-3">
          <div className="border-b border-gray-200 py-9 sm:border-b-0 sm:border-r sm:px-7 lg:px-10">
            <Compass size={27} strokeWidth={1.5} className="mb-5 text-sky-600" />
            <h4 className="mb-3 text-lg font-bold text-[#071D30]">
              Une approche personnalisée
            </h4>
            <p className="text-sm leading-7 text-gray-500">
              Des solutions pensées en fonction de votre situation et
              de vos objectifs.
            </p>
          </div>

          <div className="border-b border-gray-200 py-9 sm:border-b-0 sm:border-r sm:px-7 lg:px-10">
            <ShieldCheck size={27} strokeWidth={1.5} className="mb-5 text-sky-600" />
            <h4 className="mb-3 text-lg font-bold text-[#071D30]">
              La confiance avant tout
            </h4>
            <p className="text-sm leading-7 text-gray-500">
              Une relation fondée sur l’écoute, la transparence et
              le sérieux.
            </p>
          </div>

          <div className="py-9 sm:px-7 lg:px-10">
            <Handshake size={27} strokeWidth={1.5} className="mb-5 text-sky-600" />
            <h4 className="mb-3 text-lg font-bold text-[#071D30]">
              Un accompagnement engagé
            </h4>
            <p className="text-sm leading-7 text-gray-500">
              Être à vos côtés pour vous aider à avancer dans vos projets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NotreHistoire;
