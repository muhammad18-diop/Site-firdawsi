
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Welcome() {
  const langues = [
    "Bienvenue chez",
    "Welcome to",
    "Bienvenido a",
    "Benvenuti da",
    "Willkommen bei",
    "Bem-vindo à",
    "مرحبًا بكم في",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((ancienIndex) => (ancienIndex + 1) % langues.length);
        setVisible(true);
      }, 250);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#071B3A] px-5 py-16 text-center">

      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"

        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/aeroport.mp4" type="video/mp4" />
      </video>

      {/* Filtre sombre */}
      <div className="absolute inset-0 bg-[#071B3A]/70" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-white">

        {/* Bienvenue multilingue animé */}
        <div className="mb-6 flex flex-col items-center">
          <p
            key={index}
            aria-live="polite"
            className={`min-h-7 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300 sm:min-h-8 sm:text-sm sm:tracking-[0.4em] ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "-translate-y-3 opacity-0 blur-sm"
            } transition-all duration-500 ease-in-out`}
          >
            {langues[index]}
          </p>

          <span className="mt-3 h-[2px] w-12 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-all duration-700 sm:w-16" />
        </div>

        {/* Nom de l'entreprise */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          FIRDAWSI
          <span className="mt-2 block text-sky-400">
            CONSULTING GROUP
          </span>
        </h1>

        {/* Séparateur */}
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-sky-400 sm:w-24" />

        {/* Slogan et description */}
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-100 sm:text-base md:text-xl">
          L’EXCELLENCE AU CŒUR DE VOS BESOINS

          <span className="mt-3 block text-sm text-gray-200 sm:text-base">
            Voyage, immobilier et assurance : nous vous accompagnons
            dans chacun de vos projets.
          </span>
        </p>

        {/* Bouton d'accès au site */}
        <Link
          to="/accueil"
          className="group inline-flex items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-4 text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-sky-500/25 sm:px-8 sm:text-base"
        >
          Commencer le voyage

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Pied de page */}
      <p className="absolute bottom-4 left-0 z-10 w-full px-3 text-[10px] text-white/70 sm:text-xs">
        © {new Date().getFullYear()} FIRDAWSI CONSULTING GROUP.
        Tous droits réservés.
      </p>
    </main>
  );
}

export default Welcome;
