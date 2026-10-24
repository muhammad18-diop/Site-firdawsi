``
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  LockKeyhole,
  UserRound,
  Database,
  ArrowRight,
  MoveRight,
  CheckCircle2,
} from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2000&q=85",
    label: "Protection des données",
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85",
    label: "Sécurité numérique",
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85",
    label: "Technologies et confidentialité",
  },
];

function HeroConfidentialite() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Données collectées",
      description:
        "Découvrez les informations susceptibles d’être recueillies lors de votre navigation.",
      icon: Database,
      link: "#donnees-collectees",
    },
    {
      title: "Protection des données",
      description:
        "Comprenez les mesures prévues pour préserver la confidentialité de vos informations.",
      icon: LockKeyhole,
      link: "#securite-donnees",
    },
    {
      title: "Vos droits",
      description:
        "Informez-vous sur vos droits concernant vos données personnelles.",
      icon: UserRound,
      link: "#vos-droits",
    },
  ];

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">
      {/* Images du diaporama */}
      {images.map((image, index) => (
        <div
          key={image.url}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image.url}")` }}
        />
      ))}

      {/* Filtre bleu marine */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/85 to-[#071B3A]/60" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Confidentialité et protection des données
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Votre confidentialité,
          <br />
          <span className="text-sky-400">
            notre engagement.
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          FIRDAWSI CONSULTING GROUP accorde une attention particulière à la
          confidentialité des informations personnelles. Découvrez comment
          notre site traite les données, les objectifs de leur utilisation
          et les moyens de mieux protéger votre vie privée.
        </p>

        {/* Points forts */}
        <div className="mb-9 flex flex-col gap-3 text-sm text-gray-200 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="shrink-0 text-sky-400"
            />
            Respect de la vie privée
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="shrink-0 text-sky-400"
            />
            Transparence sur les données
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#donnees-collectees"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Consulter la politique
            <ArrowRight size={20} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
        </div>

        {/* Accès rapides aux sections */}
        <div
          id="sections-confidentialite"
          className="mt-14 grid max-w-5xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3"
        >
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <a
                key={section.title}
                href={section.link}
                className="group flex items-start gap-4 rounded-xl p-3 transition duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-500 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="mb-2 font-bold text-white transition group-hover:text-sky-300">
                    {section.title}
                  </h2>

                  <p className="text-sm leading-6 text-gray-300">
                    {section.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Navigation du diaporama */}
        <div className="mt-8 flex items-center gap-3">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Afficher : ${image.label}`}
              aria-pressed={current === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-sky-400"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}

          <span className="ml-2 text-xs tracking-widest text-white/70">
            0{current + 1} / 0{images.length}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroConfidentialite;
