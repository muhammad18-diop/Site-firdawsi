
import { useEffect, useState } from "react";
import {
  Plane,
  House,
  ShieldCheck,
  ArrowRight,
  MoveRight,
  CheckCircle2,
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

function HeroServices() {
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
      description: "Organisez vos déplacements en toute sérénité.",
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
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">

      {/* Images du diaporama : conservées à l'identique */}
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/80 to-[#071B3A]/45" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">

        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Nos domaines d’expertise
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Des services adaptés à{" "}
          <span className="text-sky-400">
            vos ambitions.
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          FIRDAWSI CONSULTING GROUP vous accompagne dans vos projets
          de voyage, d’immobilier et d’assurance grâce à des solutions
          personnalisées et un accompagnement de qualité.
        </p>

        {/* Points forts */}
        <div className="mb-9 flex flex-col gap-3 text-sm text-gray-200 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Accompagnement personnalisé
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Solutions adaptées à vos besoins
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos services
            <ArrowRight size={20} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
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

export default HeroServices;