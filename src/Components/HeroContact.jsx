
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MoveRight,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    label: "Un espace professionnel",
  },
  {
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90",
    label: "Une équipe à votre écoute",
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90",
    label: "Un accompagnement personnalisé",
  },
];

function HeroContact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contactOptions = [
    {
      title: "Téléphone",
      description: "Échangeons directement sur votre projet.",
      detail: "Appelez notre équipe",
      icon: Phone,
      href: "tel:+221783152094",
    },
    {
      title: "WhatsApp",
      description: "Contactez-nous simplement par message.",
      detail: "Écrire sur WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/221783152094",
    },
    {
      title: "E-mail",
      description: "Envoyez-nous vos questions et demandes.",
      detail: "Nous écrire par e-mail",
      icon: Mail,
      href: "mailto:firdawsicg@gmail.com",
    },
  ];

  return (
    <section className="relative mt-10 flex min-h-[85vh] items-center overflow-hidden bg-[#071B3A]">
      {/* Images du diaporama */}
      {images.map((image, index) => (
        <div
          key={image.url}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image.url}")` }}
        />
      ))}

      {/* Filtre bleu professionnel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B3A]/95 via-[#0B2D59]/85 to-[#071B3A]/55" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Présentation */}
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-300 sm:text-sm sm:tracking-[0.3em]">
              <span className="h-px w-10 bg-sky-400" />
              Contactez-nous
            </p>

            <h1 className="mb-6 max-w-3xl font-['Calibri',sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Parlons de votre
              <span className="block text-sky-400">
                prochain projet.
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Un projet de voyage, une recherche immobilière ou un besoin en
              assurance ? FIRDAWSI CONSULTING GROUP vous accompagne avec
              écoute, conseil et professionnalisme pour vous aider à avancer
              sereinement.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#coordonnees-contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-sky-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-sky-500"
              >
                Nos coordonnées
                <ArrowRight size={20} />
              </a>

              <a
                href="#formulaire-contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#071B3A]"
              >
                Envoyer une demande
                <MoveRight size={20} />
              </a>
            </div>

            {/* Repères de confiance */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/20 pt-7 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-white">À votre écoute</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-300">
                    Une réponse adaptée à votre besoin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-white">À Dakar</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-300">
                    Un accompagnement de proximité.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-white">Disponibilité</h2>
                  <p className="mt-1 text-sm leading-5 text-gray-300">
                    Du lundi au vendredi, 9 h–18 h.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accès rapides aux contacts */}
          
        </div>

        {/* Navigation du diaporama */}
        <div className="mt-10 flex items-center gap-3">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Afficher : ${image.label}`}
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

export default HeroContact;
