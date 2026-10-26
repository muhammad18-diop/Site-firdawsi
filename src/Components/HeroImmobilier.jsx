
import { useEffect, useState } from "react";
import {
  House,
  KeyRound,
  MapPinned,
  Building2,
  ClipboardCheck,
  ChartNoAxesCombined,
  ArrowRight,
  MoveRight,
  CheckCircle2,
} from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    label: "Achat et vente",
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    label: "Location immobilière",
  },
  {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85",
    label: "Terrains et foncier",
  },
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=85",
    label: "Gestion locative",
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85",
    label: "Conseil immobilier",
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    label: "Investissement immobilier",
  },
];

const services = [
  {
    title: "Achat & vente",
    description:
      "Achetez ou vendez un bien immobilier avec un accompagnement adapté à vos critères et à votre projet.",
    icon: House,
    link: "#achat-vente",
  },
  {
    title: "Location immobilière",
    description:
      "Recherchez un appartement, une maison ou un espace professionnel correspondant à vos besoins.",
    icon: KeyRound,
    link: "#location",
  },
  {
    title: "Terrains & foncier",
    description:
      "Préparez votre projet de construction en recherchant un terrain adapté à vos objectifs.",
    icon: MapPinned,
    link: "#terrains",
  },
  {
    title: "Gestion locative",
    description:
      "Découvrez des solutions d'accompagnement pour faciliter le suivi et la gestion de votre bien.",
    icon: Building2,
    link: "#gestion-locative",
  },
  {
    title: "Conseil immobilier",
    description:
      "Clarifiez votre projet et identifiez les démarches à anticiper avant de prendre une décision.",
    icon: ClipboardCheck,
    link: "#accompagnement",
  },
  {
    title: "Investissement immobilier",
    description:
      "Explorez les possibilités correspondant à votre budget, à vos objectifs et à votre stratégie.",
    icon: ChartNoAxesCombined,
    link: "#investissement",
  },
];

export default function HeroImmobilier() {
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
          Nos services immobiliers
        </p>

        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Votre projet immobilier commence{" "}
          <span className="text-sky-400">ici.</span>
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
          Achat, vente, location, recherche de terrains ou investissement :
          FIRDAWSI CONSULTING GROUP vous accompagne dans la préparation
          de vos projets immobiliers avec une approche adaptée à vos besoins.
        </p>

        {/* Points forts */}
        <div className="mb-9 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Accompagnement personnalisé
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
            Solutions adaptées à votre projet
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#services-immobilier"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
          >
            Découvrir nos services
            <ArrowRight size={20} />
          </a>

          <a
            href="/contact?service=immobilier"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#123B5D]"
          >
            Nous contacter
            <MoveRight size={20} />
          </a>
        </div>

        {/* Raccourcis vers les prestations */}
        <div className="mt-10 flex max-w-4xl flex-wrap gap-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href={service.link}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition duration-300 hover:border-sky-400 hover:bg-sky-500/20 sm:text-sm"
              >
                <Icon size={15} className="shrink-0 text-sky-300" />
                {service.title}
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
