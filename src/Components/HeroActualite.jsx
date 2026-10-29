
import { useEffect, useState } from "react";
import {
  Plane,
  House,
  ShieldCheck,
  ArrowRight,
  MoveRight,
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

function HeroActualite() {
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
        "Découvrez nos conseils et nos guides pour bien préparer vos voyages.",
      icon: Plane,
      link: "#blog-voyages",
    },
    {
      title: "Immobilier",
      description:
        "Informez-vous sur les démarches et les opportunités immobilières.",
      icon: House,
      link: "#blog-immobilier",
    },
    {
      title: "Assurance",
      description:
        "Comprenez les garanties et découvrez comment mieux protéger vos biens.",
      icon: ShieldCheck,
      link: "#blog-assurance",
    },
  ];

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
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Actualités · Conseils · Guides pratiques
        </p>

        <h1 className="mb-6 max-w-4xl font-['Calibri',sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Découvrez nos actualités et{" "}
          <span className="text-sky-400">
            conseils d’experts.
          </span>
        </h1>

        <p className="mb-9 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          Retrouvez les actualités de FIRDAWSI CONSULTING GROUP,
          nos conseils pratiques et nos guides pour mieux préparer
          vos projets de voyage, d’immobilier et d’assurance.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#articles"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos articles
            <ArrowRight size={20} />
          </a>

          <a
            href="#categories"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950"
          >
            Explorer nos actualités
            <MoveRight size={20} />
          </a>
        </div>

        {/* Présentation des rubriques du blog */}
        <div
          id="categories"
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

export default HeroActualite;
