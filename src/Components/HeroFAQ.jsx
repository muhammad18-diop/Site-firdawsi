
import { useEffect, useState } from "react";
import {
  Plane,
  House,
  ShieldCheck,
  ArrowRight,
  MoveRight,
  CircleHelp,
} from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1695510757259-643081efedf0?auto=format&fit=crop&w=2000&q=85",
    label: "Voyages",
  },
  {
    url: "https://images.pexels.com/photos/30781823/pexels-photo-30781823.jpeg?auto=compress&cs=tinysrgb&w=2000",
    label: "Immobilier",
  },
  {
    url: "https://www.bhatnagarservices.in/professional-insurance-advisor-showing-policy-docu.jpg",
    label: "Assurance",
  },
];

function HeroFAQ() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Voyages",
      description:
        "Documents, formalités et préparation de vos déplacements.",
      icon: Plane,
      link: "#faq-voyages",
    },
    {
      title: "Immobilier",
      description:
        "Recherche de logement, démarches et accompagnement.",
      icon: House,
      link: "#faq-immobilier",
    },
    {
      title: "Assurance",
      description:
        "Garanties, contrats et protection de vos biens.",
      icon: ShieldCheck,
      link: "#faq-assurance",
    },
  ];

  const allerAuxQuestions = () => {
    document.getElementById("faq-questions")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">
      {/* Images professionnelles du diaporama */}
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

      {/* Filtre bleu marine pour conserver la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/80 to-[#071B3A]/45" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">
        {/* Introduction */}
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          FAQ · Aide · Accompagnement
        </p>

        {/* Titre principal */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Vous avez des questions ?
          <span className="block text-sky-400">
            Nous avons les réponses.
          </span>
        </h1>

        {/* Description */}
        <p className="mb-9 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          Retrouvez les réponses aux questions les plus fréquentes
          sur les services de FIRDAWSI CONSULTING GROUP. Informez-vous
          sur les démarches, les documents nécessaires et les étapes
          de votre projet de voyage, d’immobilier ou d’assurance.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={allerAuxQuestions}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Consulter la FAQ
            <ArrowRight size={20} />
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950"
          >
            Poser une question
            <MoveRight size={20} />
          </a>
        </div>

        {/* Présentation des rubriques de la FAQ */}
        <div
          id="faq-categories"
          className="mt-14 grid max-w-4xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.link}
                className="group flex items-start gap-4 rounded-xl p-3 transition duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="mb-2 font-bold text-white transition group-hover:text-sky-300">
                    {service.title}
                  </h2>

                  <p className="text-sm leading-6 text-gray-300">
                    {service.description}
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
              aria-label={`Afficher l’image ${image.label}`}
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

export default HeroFAQ;
