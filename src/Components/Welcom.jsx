
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Welcome() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071B3A] px-6 text-center">

      {/* Vidéo d'arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=90"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/aeroport.mp4"
          type="video/mp4"
        />
      </video>

      {/* Filtre bleu marine */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/90 via-[#0B2D59]/70 to-[#071B3A]/50" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-4xl text-white">

        <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-sky-300 md:text-base">
          Bienvenue chez
        </p>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          FIRDAWSI
          <span className="mt-2 block text-sky-400">
            CONSULTING GROUP
          </span>
        </h1>

        <div className="mx-auto mb-7 h-1 w-24 rounded-full bg-sky-400" />

        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-gray-100 md:text-xl">
          L’EXCELLENCE AU CŒUR DE VOS BESOINS
          <span className="mt-3 block text-sm text-gray-200 md:text-base">
            Voyage, immobilier et assurance : nous vous accompagnons
            dans chacun de vos projets.
          </span>
        </p>

        <Link
          to="/accueil"
          className="group inline-flex items-center gap-3 rounded-lg bg-sky-500 px-8 py-4 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
        >
          Commencer le voyage
          <ArrowRight
            size={21}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

      <p className="absolute bottom-5 left-0 z-10 w-full px-4 text-xs text-white/70">
        © {new Date().getFullYear()} FIRDAWSI CONSULTING GROUP
      </p>

    </main>
  );
}

export default Welcome;
