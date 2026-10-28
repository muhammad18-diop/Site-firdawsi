
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

        {/* Image d'avion en arrière-plan */}
        <img
  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85"
  alt="Avion commercial pour FIRDAWSI CONSULTING GROUP"
  className="absolute inset-0 h-full w-full object-cover object-center"
/>

        {/* Superposition sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-[#071B3A]/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071B3A]/20 via-transparent to-[#071B3A]/80" />

        {/* Contenu principal */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center">

          {/* Texte multilingue */}
          <p
            key={langueIndex}
            className="mb-5 text-sm font-medium tracking-[0.2em] text-sky-300 sm:text-base"
          >
            {langues[langueIndex]}
          </p>

          {/* Nom de l'entreprise */}
          <h1 className="text-4xl font-semibold tracking-[0.12em] sm:text-6xl md:text-7xl">
            FIRDAWSI
            <span className="mt-3 block text-2xl font-semibold tracking-[0.16em] sm:text-4xl md:text-5xl">
              CONSULTING GROUP
            </span>
          </h1>

          {/* Séparateur */}
          <div className="mx-auto my-7 h-px w-24 bg-sky-400" />

          {/* Slogan */}
          <p className="text-sm font-medium uppercase leading-7 tracking-[0.12em] text-white/90 sm:text-base sm:tracking-[0.18em]">
            L’EXCELLENCE AU CŒUR DE VOS BESOINS
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
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3 px-4 text-center text-[10px] uppercase tracking-[0.15em] text-white/70 sm:tracking-[0.2em]">
          <span className="h-px w-8 shrink-0 bg-sky-400/60" />

          Votre partenaire de confiance

          <span className="h-px w-8 shrink-0 bg-sky-400/60" />
        </div>
      </section>
    </main>
  );
}
