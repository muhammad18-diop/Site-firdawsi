
import { useEffect, useState } from "react";
import {
  Plane,
  FileCheck,
  GraduationCap,
  Hotel,
  ShieldCheck,
  Landmark,
  ArrowRight,
  MoveRight,
  CheckCircle2,
} from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1695510757259-643081efedf0?auto=format&fit=crop&w=2000&q=85",
    label: "Assistance visa",
  },
  {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85",
    label: "Billets d’avion",
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85",
    label: "Études à l’étranger",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    label: "Réservation d’hôtel",
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85",
    label: "Assurance voyage",
  },
  {
    url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2000&q=85",
    label: "Omra & Hajj",
  },
];

const services = [
  {
    title: "Assistance visa",
    description:
      "Préparez votre dossier et vos démarches administratives avec un accompagnement adapté à votre destination.",
    icon: FileCheck,
    link: "#visa",
  },
  {
    title: "Billets d’avion",
    description:
      "Recherchez un vol adapté à votre destination, à vos dates et à votre budget.",
    icon: Plane,
    link: "#billets",
  },
  {
    title: "Études à l’étranger",
    description:
      "Préparez votre projet d’études et avancez dans vos démarches pour poursuivre votre formation à l’international.",
    icon: GraduationCap,
    link: "#etudes",
  },
  {
    title: "Réservation d’hôtel",
    description:
      "Trouvez un hébergement correspondant à vos besoins pour organiser votre séjour.",
    icon: Hotel,
    link: "#hotel",
  },
  {
    title: "Assurance voyage",
    description:
      "Informez-vous sur les garanties adaptées à votre séjour pour voyager plus sereinement.",
    icon: ShieldCheck,
    link: "#assurance-voyage",
  },
  {
    title: "Omra & Hajj",
    description:
      "Préparez votre pèlerinage et renseignez-vous sur les démarches nécessaires à votre voyage.",
    icon: Landmark,
    link: "#omra-hajj",
  },
];

export default function HeroVoyages() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071D30]">
      {/* Diaporama */}
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

      {/* Filtre aux couleurs de FIRDAWSI */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071D30]/95 via-[#123B5D]/85 to-[#071D30]/45" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Nos services de voyage
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Votre prochain voyage commence{" "}
          <span className="text-sky-400">ici.</span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
          De la préparation de votre visa à la réservation de votre séjour,
          FIRDAWSI CONSULTING GROUP vous accompagne dans vos projets de voyage,
          d’études à l’étranger et de pèlerinage.
        </p>

        {/* Points forts */}
        <div className="mb-9 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Accompagnement personnalisé
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Solutions adaptées à vos besoins
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos services
            <ArrowRight size={20} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#123B5D]"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
        </div>

        {/* Raccourcis vers les prestations */}
        

        {/* Navigation du diaporama */}
        <div className="mt-8 flex items-center gap-3">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Afficher l’image : ${image.label}`}
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
