
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Welcome() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#071B3A] px-5 py-16 text-center">

      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85"
        
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/aeroport.mp4" type="video/mp4" />
      </video>

      {/* Filtre sombre */}
      <div className="absolute inset-0 bg-[#071B3A]/70" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-white">

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300 sm:text-sm sm:tracking-[0.35em]">
          Bienvenue chez
        </p>

        <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          FIRDAWSI
          <span className="mt-2 block text-sky-400">
            CONSULTING GROUP
          </span>
        </h1>

        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-sky-400 sm:w-24" />

        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-gray-100 sm:text-base md:text-xl">
          L’EXCELLENCE AU CŒUR DE VOS BESOINS
          <span className="mt-3 block text-sm text-gray-200 sm:text-base">
            Voyage, immobilier et assurance : nous vous accompagnons
            dans chacun de vos projets.
          </span>
        </p>

        <Link
          to="/accueil"
          className="group inline-flex items-center justify-center gap-3 rounded-lg bg-sky-500 px-6 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-sky-400 sm:px-8 sm:text-base"
        >
          Accéder au site
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Pied de page */}
      <p className="absolute bottom-4 left-0 z-10 w-full px-3 text-[10px] text-white/70 sm:text-xs">
        © {new Date().getFullYear()} FIRDAWSI CONSULTING GROUP. Tous droits réservés.
      </p>
    </main>
  );
}

export default Welcome;
