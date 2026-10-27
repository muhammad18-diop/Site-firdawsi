
import { useEffect, useState } from "react";
import {
  Building2,
  Target,
  Eye,
  ArrowRight,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    label: "Notre environnement",
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90",
    label: "Notre équipe",
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90",
    label: "Notre expertise",
  },
];

function HeroApropos() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      title: "Notre histoire",
      description: "Une entreprise engagée à vos côtés.",
      icon: Building2,
      link: "#notre-histoire",
    },
    {
      title: "Notre mission",
      description: "Vous accompagner vers vos objectifs.",
      icon: Target,
      link: "#notre-mission",
    },
    {
      title: "Notre vision",
      description: "Construire des solutions durables.",
      icon: Eye,
      link: "#notre-vision",
    },
  ];

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/85 to-[#071B3A]/45" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">

        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Qui sommes nous ?
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          FIRDAWSI CONSULTING GROUP, l'excellence au coeur de vos besions.
          <span className="block text-sky-400">
            
          </span>
        </h1>

        

        {/* Boutons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#notre-histoire"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-500"
          >
            Découvrir notre histoire
            <ArrowRight size={20} />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#071B3A]"
          >
            Parlons de votre projet
            <MoveRight size={20} />
          </Link>
        </div>

        {/* Présentation des valeurs */}
        <div className="mt-14 grid max-w-4xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <a
                key={value.title}
                href={value.link}
                className="group flex items-start gap-4 rounded-xl p-3 transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="mb-2 font-bold text-white transition group-hover:text-sky-300">
                    {value.title}
                  </h2>

                  <p className="text-sm leading-6 text-gray-300">
                    {value.description}
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

export default HeroApropos;
