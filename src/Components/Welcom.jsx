
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const langues = [
  "Bienvenue chez",
  "Welcome to",
  "Bienvenido a",
  "Benvenuti da",
  "Willkommen bei",
  "Bem-vindo à",
  "مرحبًا بكم في",
];

export default function Welcome() {
  const [langueIndex, setLangueIndex] = useState(0);

  // Animation multilingue
  useEffect(() => {
    const interval = setInterval(() => {
      setLangueIndex((prev) => (prev + 1) % langues.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071B3A] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

        {/* Vidéo d'arrière-plan */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/aeroport.mp4" type="video/mp4" />
        </video>

        {/* Superposition sombre */}
        <div className="absolute inset-0 bg-[#071B3A]/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071B3A]/20 via-transparent to-[#071B3A]/70" />

        {/* Contenu principal */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center">

          {/* Texte multilingue */}
          <p
            key={langueIndex}
            className="mb-5 text-sm font-medium tracking-[0.2em] text-sky-300 sm:text-base"
          >
            {langues[langueIndex]}
          </p>

          {/* Nom de l'entreprise */}
          <h1 className="text-4xl font-light tracking-[0.12em] sm:text-6xl md:text-7xl">
            FIRDAWSI
            <span className="mt-2 block font-semibold text-sky-400">
              CONSULTING GROUP
            </span>
          </h1>

          {/* Séparateur */}
          <div className="mx-auto my-7 h-px w-24 bg-sky-400" />

          {/* Slogan */}
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/90 sm:text-base">
            L’EXCELLENCE AU CŒUR DE VOS BESOINS
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Voyage, immobilier et assurance : nous vous accompagnons
            dans chacun de vos projets avec professionnalisme et engagement.
          </p>

          {/* Bouton Commencer le voyage */}
          <Link
            to="/accueil"
            className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-sky-300/40 bg-sky-400 px-7 py-4 text-sm font-semibold text-[#071B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20"
          >
            Commencer le voyage

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Signature en bas de page */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
          <span className="h-px w-8 bg-sky-400/60" />

          Votre partenaire de confiance

          <span className="h-px w-8 bg-sky-400/60" />
        </div>
      </section>
    </main>
  );
}
