
import {
  Plane,
  FileCheck,
  GraduationCap,
  Hotel,
  ShieldCheck,
  MoonStar,
  ArrowUpRight,
  ArrowRight,
  Globe2,
} from "lucide-react";

function ServicesVoyage() {
  const services = [
    {
      number: "01",
      category: "FORMALITÉS & DOCUMENTS",
      title: "Assistance visa",
      icon: FileCheck,
      description:
        "Préparez votre demande de visa avec un accompagnement adapté à votre destination et au motif de votre séjour.",
      details: [
        "Information sur les documents requis",
        "Organisation et vérification du dossier",
        "Orientation sur les rendez-vous consulaires",
      ],
    },
    {
      number: "02",
      category: "TRANSPORT AÉRIEN",
      title: "Billets d’avion",
      icon: Plane,
      description:
        "Trouvez une solution de transport adaptée à votre itinéraire, à vos dates de départ et à votre budget.",
      details: [
        "Recherche et comparaison des vols",
        "Accompagnement à la réservation",
        "Informations sur les conditions du billet",
      ],
    },
    {
      number: "03",
      category: "MOBILITÉ ACADÉMIQUE",
      title: "Études à l’étranger",
      icon: GraduationCap,
      description:
        "Préparez votre projet d’études à l’international grâce à une orientation sur les démarches académiques et administratives.",
      details: [
        "Orientation sur les possibilités d’études",
        "Informations sur les dossiers de candidature",
        "Préparation des démarches liées au départ",
      ],
    },
    {
      number: "04",
      category: "HÉBERGEMENT",
      title: "Réservation d’hôtel",
      icon: Hotel,
      description:
        "Identifiez un hébergement correspondant à votre destination, à la durée de votre séjour et à vos préférences.",
      details: [
        "Recherche d’hébergements",
        "Comparaison des options disponibles",
        "Accompagnement à la réservation",
      ],
    },
    {
      number: "05",
      category: "PROTECTION & SÉCURITÉ",
      title: "Assurance voyage",
      icon: ShieldCheck,
      description:
        "Explorez les solutions d’assurance adaptées à votre déplacement et informez-vous sur les garanties nécessaires avant le départ.",
      details: [
        "Orientation sur les garanties disponibles",
        "Informations sur les frais médicaux couverts",
        "Vérification des conditions et exclusions",
      ],
    },
    {
      number: "06",
      category: "VOYAGES SPIRITUELS",
      title: "Omra & Hajj",
      icon: MoonStar,
      description:
        "Préparez votre pèlerinage avec une orientation sur les formalités et les différentes étapes de votre voyage vers les lieux saints.",
      details: [
        "Informations sur les formalités du pèlerinage",
        "Orientation sur les vols et l’hébergement",
        "Préparation pratique du départ",
      ],
    },
  ];

  return (
    <section
      id="voyages"
      className="overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* EN-TÊTE */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-sky-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Voyages & mobilité internationale
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#071D30] sm:text-5xl lg:text-6xl">
              Chaque destination commence par{" "}
              <span className="text-sky-600">
                une bonne préparation.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="max-w-xl text-base leading-8 text-gray-600">
              De vos formalités administratives à l’organisation de
              votre séjour, nous vous aidons à préparer votre projet
              de voyage avec méthode, clarté et un accompagnement
              adapté à vos besoins.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#071D30] pb-2 text-sm font-semibold text-[#071D30] transition hover:border-sky-600 hover:text-sky-600"
            >
              Échanger sur mon projet
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* BANNIÈRE IMMERSIVE AVEC NOUVELLE IMAGE */}
        <div className="relative isolate min-h-[440px] overflow-hidden bg-[#071D30] md:min-h-[480px]">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2000&q=90')",
            }}
            aria-hidden="true"
          />

          {/* Filtre bleu marine pour un rendu professionnel */}
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071D30]/95 via-[#071D30]/75 to-[#071D30]/25"
            aria-hidden="true"
          />

          <div className="flex min-h-[440px] flex-col justify-between p-7 sm:p-10 md:min-h-[480px] md:p-14 lg:p-16">
            <div className="flex items-center gap-3">
              <Globe2 size={19} className="text-sky-300" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                Votre projet, notre accompagnement
              </span>
            </div>

            <div className="max-w-3xl py-12">
              <p className="mb-5 text-sm font-medium text-sky-300">
                UN ACCOMPAGNEMENT À CHAQUE ÉTAPE
              </p>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Préparez votre départ avec plus de sérénité.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
                Voyage touristique, projet d’études, déplacement
                professionnel ou pèlerinage : bénéficiez d’une
                orientation claire pour organiser les démarches
                liées à votre destination.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-4 bg-sky-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#071D30]"
              >
                Parlons de votre projet
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-5 text-xs font-medium uppercase tracking-[0.12em] text-white/80 sm:text-sm">
              <span>Voyages</span>
              <span className="text-sky-400">/</span>
              <span>Études</span>
              <span className="text-sky-400">/</span>
              <span>Pèlerinages</span>
              <span className="text-sky-400">/</span>
              <span>Mobilité internationale</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION AUX PRESTATIONS */}
        <div className="mb-10 mt-20 flex flex-col gap-5 md:mt-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
              Nos prestations
            </p>

            <h3 className="text-3xl font-semibold tracking-tight text-[#071D30] md:text-4xl">
              Des solutions pour votre voyage.
            </h3>
          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-500">
            Découvrez nos six domaines d’accompagnement et identifiez
            les services correspondant à votre projet.
          </p>
        </div>

        {/* CARDS PROFESSIONNELLES */}
        <div className="grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex flex-col overflow-hidden border-b border-r border-slate-200 bg-white p-7 transition-all duration-300 hover:bg-[#F8FAFC] sm:p-8 lg:p-9"
              >
                {/* Accent supérieur animé */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-sky-600 transition-all duration-500 group-hover:w-full" />

                {/* Icône et numéro */}
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-slate-200 bg-slate-50 text-[#123B5D] transition-all duration-300 group-hover:border-[#123B5D] group-hover:bg-[#123B5D] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                    {service.number}
                  </span>
                </div>

                {/* Catégorie */}
                <p className="mb-3 text-[10px] font-bold uppercase leading-5 tracking-[0.18em] text-sky-700">
                  {service.category}
                </p>

                {/* Titre */}
                <h4 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-[#071D30] transition-colors duration-300 group-hover:text-sky-700 sm:text-2xl">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="mb-8 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Prestations incluses */}
                <div className="mb-8 border-t border-slate-200 pt-5">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#071D30]">
                    Notre accompagnement
                  </p>

                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-sky-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lien aligné en bas */}
                <div className="mt-auto border-t border-slate-200 pt-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[#123B5D] transition-colors duration-300 hover:text-sky-600"
                  >
                    <span>En savoir plus</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* BANDEAU DE CONTACT */}
        <div className="mt-16 grid gap-8 bg-[#071D30] p-8 sm:p-10 md:mt-20 md:grid-cols-12 md:items-center md:p-12 lg:p-14">
          <div className="md:col-span-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              Votre prochaine étape
            </p>

            <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              Un projet de voyage en préparation ?
              <span className="text-sky-400"> Parlons-en.</span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
              Présentez-nous votre destination et vos besoins.
              Notre équipe pourra vous renseigner sur les services
              proposés et les démarches à envisager.
            </p>
          </div>

          <div className="md:col-span-4 md:justify-self-end">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-[#071D30] transition hover:bg-sky-400 sm:w-auto"
            >
              Contacter notre équipe
              <ArrowRight size={19} />
            </a>
          </div>
        </div>

        {/* MENTION INFORMATIVE */}
        <p className="mt-6 max-w-4xl text-xs leading-6 text-gray-500">
          Les prestations sont proposées selon les services effectivement
          disponibles. Les décisions de délivrance des visas et d’admission
          dans les établissements relèvent des autorités et organismes
          concernés. Les garanties d’assurance dépendent du contrat souscrit.
        </p>
      </div>
    </section>
  );
}

export default ServicesVoyage;
