
import { useEffect, useState } from "react";
import {
  CarFront,
  Plane,
  House,
  HardHat,
  Flame,
  Truck,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
  MoveRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85",
    label: "Automobile",
  },
  {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85",
    label: "Voyage",
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    label: "Habitation",
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85",
    label: "Chantier",
  },
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
    label: "Protection professionnelle",
  },
];

function HeroAssistance() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Automobile",
      description: "Protégez vos déplacements et votre véhicule.",
      icon: CarFront,
      link: "#automobile",
    },
    {
      title: "Voyage",
      description: "Voyagez avec une protection adaptée.",
      icon: Plane,
      link: "#voyage",
    },
    {
      title: "Habitation",
      description: "Protégez votre logement et vos biens.",
      icon: House,
      link: "#habitation",
    },
    {
      title: "Chantier",
      description: "Anticipez les risques liés aux travaux.",
      icon: HardHat,
      link: "#chantier",
    },
    {
      title: "Incendie",
      description: "Préservez vos biens contre les risques d'incendie.",
      icon: Flame,
      link: "#incendie",
    },
    {
      title: "Transport",
      description: "Identifiez des solutions pour vos activités de transport.",
      icon: Truck,
      link: "#transport",
    },
    {
      title: "Maladie et accident",
      description: "Explorez des solutions de protection santé.",
      icon: HeartPulse,
      link: "#maladie-accident",
    },
    {
      title: "Assistance scolaire",
      description: "Contribuez à la protection des élèves.",
      icon: GraduationCap,
      link: "#scolaire",
    },
    {
      title: "Multirisque professionnelle",
      description: "Protégez votre activité et vos équipements.",
      icon: BriefcaseBusiness,
      link: "#multirisque-professionnelle",
    },
  ];

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071D30]">
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071D30]/95 via-[#0B2D59]/80 to-[#071D30]/50" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Assistance et assurance
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl  font-['Calibri',sans-serif] font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Protégez ce qui compte
          <span className="block text-sky-400">
            pour vous.
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
          Particuliers, familles et professionnels, FIRDAWSI
          CONSULTING GROUP vous accompagne dans la recherche de
          solutions adaptées à vos besoins en assistance et en
          assurance, pour vos biens, vos déplacements et votre activité.
        </p>

        {/* Points forts */}
        <div className="mb-9 flex flex-col gap-3 text-sm text-gray-200 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Accompagnement personnalisé
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Solutions selon vos besoins
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="shrink-0 text-sky-400" />
            Particuliers et professionnels
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#services-assistance"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos solutions
            <ArrowRight size={20} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#071D30]"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
        </div>

        {/* Navigation rapide vers les services */}
        
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
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroAssistance;
