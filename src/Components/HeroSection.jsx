
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
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=90",
    label: "Voyages",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",
    label: "Immobilier",
  },
  {
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=90",
    label: "Assurance",
  },
];

function HeroHome() {
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
      description: "Explorez le monde en toute sérénité.",
      icon: Plane,
      link: "#voyages",
    },
    {
      title: "Immobilier",
      description: "Concrétisez vos projets immobiliers.",
      icon: House,
      link: "#immobilier",
    },
    {
      title: "Assurance",
      description: "Protégez vos biens et vos proches.",
      icon: ShieldCheck,
      link: "#assurance",
    },
  ];

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-blue-950 mt-10">

      {/* Images du diaporama */}
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image.url}")` }}
        />
      ))}

      {/* Filtre bleu professionnel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/80 to-[#071B3A]/35" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">

        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Voyages · Immobilier · Assurance
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Des solutions sur mesure pour vos{" "}
          <span className="text-sky-400">projets de vie.</span>
        </h1>

        <p className="mb-9 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          FIRDAWSI CONSULTING GROUP vous accompagne dans vos projets
          de voyage, d’immobilier et d’assurance grâce à des solutions
          adaptées à vos besoins et à un accompagnement de qualité.
        </p>

        {/* Boutons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:bg-sky-500"
          >
            Découvrir nos services
            <ArrowRight size={20} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-blue-950"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
        </div>

        {/* Services avec icônes professionnelles */}
        <div className="mt-14 grid max-w-4xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.link}
                className="group flex items-start gap-4 rounded-xl p-3 transition hover:bg-white/10"
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

export default HeroHome;
