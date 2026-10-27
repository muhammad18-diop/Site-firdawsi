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

function HeroHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mis à jour selon les consignes du document (Section 3 - Accès rapides)
  const services = [
    {
      title: "Voyage & mobilité",
      description: "Préparez vos déplacements en toute sérénité.",
      icon: Plane,
      link: "#voyages",
    },
    {
      title: "Immobilier",
      description: "Donnez forme à vos projets immobiliers.",
      icon: House,
      link: "#immobilier",
    },
    {
      title: "Assurance",
      description: "Explorez les solutions adaptées à vos besoins.",
      icon: ShieldCheck,
      link: "#assurance",
    },
  ];

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">
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

      {/* Voile bleu fonce semi-transparent pour optimiser la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/85 to-[#071B3A]/50" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 lg:px-10">
        
        {/* Sous-titre recommandé */}
        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-300 md:text-sm">
          <span className="h-px w-10 bg-sky-400" />
          Voyage · Immobilier · Assurance
        </p>

        {/* Titre principal recommandé (H1 unique) */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Des solutions sur mesure pour vos{" "}
          <span className="text-sky-400">projets de vie.</span>
        </h1>

        {/* Texte de presentation recommandé */}
        <div className="mb-9 max-w-2xl space-y-3 text-base leading-7 text-gray-200 md:text-lg">
          <p>
            <strong className="font-semibold text-white">FIRDAWSI CONSULTING GROUP</strong> vous accompagne dans vos projets de voyage, d’immobilier et d’assurance avec une approche humaine, des conseils adaptés et une attention particulière portée à vos besoins.
          </p>
          <p className="text-gray-300">
            Parce que chaque projet est unique, nous prenons le temps de vous écouter et de rechercher avec vous les solutions les plus adaptées à votre situation.
          </p>
        </div>

        {/* Boutons d'action conformes au cahier des charges */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos services
            <ArrowRight size={20} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950"
          >
            Parlons de votre projet
            <MoveRight size={20} />
          </a>
        </div>

        {/* Accès rapides en bas de la bannière */}
        <div className="mt-14 grid max-w-4xl grid-cols-1 gap-4 border-t border-white/20 pt-8 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.link}
                className="group flex items-start gap-4 rounded-xl p-3 transition duration-300 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="mb-1 font-bold text-white transition group-hover:text-sky-300">
                    {service.title}
                  </h3>

                  <p className="text-xs leading-5 text-gray-300">
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

export default HeroHome;