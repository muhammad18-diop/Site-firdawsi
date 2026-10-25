
import {
  FileCheck,
  Plane,
  GraduationCap,
  Hotel,
  ShieldCheck,
  Landmark,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const prestationsVoyage = [
  {
    id: "visa",
    numero: "01",
    categorie: "Assistance visa",
    titre: "Préparez vos démarches de visa en toute sérénité",
    description:
      "Nous vous accompagnons dans la préparation de votre dossier de visa, de la compréhension des exigences à la vérification des documents nécessaires.",
    avantages: [
      "Orientation selon votre destination",
      "Aide à la préparation du dossier",
      "Vérification des pièces justificatives",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Documents administratifs préparés pour une démarche de visa",
    Icon: FileCheck,
    lien: "/contact?service=visa",
    bouton: "Préparer mon dossier",
  },
  {
    id: "billets",
    numero: "02",
    categorie: "Billets d’avion",
    titre: "Voyagez vers votre prochaine destination",
    description:
      "Nous vous aidons à rechercher des vols adaptés à votre destination, à vos dates de voyage et à votre budget.",
    avantages: [
      "Recherche de vols selon vos besoins",
      "Comparaison des options disponibles",
      "Accompagnement dans la réservation",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    alt: "Avion de ligne en vol",
    Icon: Plane,
    lien: "/contact?service=billets-avion",
    bouton: "Rechercher un vol",
  },
  {
    id: "etudes",
    numero: "03",
    categorie: "Études à l’étranger",
    titre: "Donnez une nouvelle dimension à vos études",
    description:
      "Vous souhaitez poursuivre vos études à l’étranger ? Nous vous accompagnons dans la préparation de votre projet et l’organisation de vos démarches.",
    avantages: [
      "Orientation dans votre projet d’études",
      "Aide à la préparation des documents",
      "Accompagnement dans les démarches",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Étudiants réunis sur un campus universitaire",
    Icon: GraduationCap,
    lien: "/contact?service=etudes-etranger",
    bouton: "Préparer mon projet",
  },
  {
    id: "hotel",
    numero: "04",
    categorie: "Réservation d’hôtel",
    titre: "Profitez d’un séjour préparé avec soin",
    description:
      "Pour vos vacances, vos études ou vos déplacements professionnels, nous vous aidons à rechercher un hébergement correspondant à vos attentes.",
    avantages: [
      "Recherche selon votre destination",
      "Prise en compte de votre budget",
      "Accompagnement dans la réservation",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Hôtel avec piscine et espace de détente",
    Icon: Hotel,
    lien: "/contact?service=reservation-hotel",
    bouton: "Trouver un hébergement",
  },
  {
    id: "assurance-voyage",
    numero: "05",
    categorie: "Assurance voyage",
    titre: "Partez avec une meilleure tranquillité d’esprit",
    description:
      "Découvrez les solutions d’assurance voyage adaptées à votre séjour et renseignez-vous sur les garanties nécessaires à votre situation.",
    avantages: [
      "Orientation selon votre voyage",
      "Informations sur les garanties",
      "Aide dans vos démarches",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Paysage de destination de voyage",
    Icon: ShieldCheck,
    lien: "/contact?service=assurance-voyage",
    bouton: "Découvrir les solutions",
  },
  {
    id: "omra-hajj",
    numero: "06",
    categorie: "Omra & Hajj",
    titre: "Préparez votre pèlerinage avec un accompagnement adapté",
    description:
      "Nous vous accompagnons dans l’organisation de votre projet de pèlerinage et vous orientons sur les différentes démarches à prévoir.",
    avantages: [
      "Informations sur l’organisation du séjour",
      "Orientation sur les démarches nécessaires",
      "Accompagnement dans la préparation",
    ],
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80",
    alt: "Architecture de la Grande Mosquée de La Mecque",
    Icon: Landmark,
    lien: "/contact?service=omra-hajj",
    bouton: "Préparer mon pèlerinage",
  },
];

export default function VoyagesServices() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Présentation */}
      <section className="px-6 pb-16 pt-16 sm:pt-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
            <span className="h-px w-8 bg-sky-500" />
            Nos services de voyage
            <span className="h-px w-8 bg-sky-500" />
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
            Chaque voyage commence par une bonne préparation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Visa, billets d’avion, études à l’étranger ou hébergement :
            FIRDAWSI CONSULTING GROUP vous accompagne dans la préparation
            de vos projets de voyage.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {prestationsVoyage.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[#123B5D] transition duration-300 hover:border-sky-500 hover:bg-sky-500/5"
              >
                {service.categorie}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Les six prestations */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-screen-xl space-y-24 lg:space-y-32">
          {prestationsVoyage.map((service, index) => {
            const Icon = service.Icon;
            const imageAGauche = index % 2 !== 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`relative ${
                    imageAGauche
                      ? "lg:order-1"
                      : "lg:order-2 lg:translate-y-12"
                  }`}
                >
                  <div className="group relative h-[300px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[380px] lg:h-[420px]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/80 via-[#071D30]/10 to-transparent" />

                    <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-[#071D30]/50 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                      {service.numero} / 06
                    </span>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-md">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                          FIRDAWSI CONSULTING GROUP
                        </p>
                        <p className="mt-1 text-lg font-semibold sm:text-xl">
                          {service.categorie}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl bg-sky-500/15" />
                </div>

                {/* Texte */}
                <div
                  className={`relative py-4 lg:py-10 ${
                    imageAGauche
                      ? "lg:order-2"
                      : "lg:order-1 lg:translate-y-12"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                    {service.categorie}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-3xl lg:text-4xl">
                    {service.titre}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="my-7 h-px w-full bg-slate-200" />

                  <ul className="space-y-4">
                    {service.avantages.map((avantage) => (
                      <li
                        key={avantage}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-0.5 shrink-0 text-sky-600"
                        />
                        <span>{avantage}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={service.lien}
                      className="inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-sky-500"
                    >
                      {service.bouton}
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D] transition duration-300 hover:text-sky-600"
                    >
                      Poser une question
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="bg-[#071D30] px-6 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
              Votre prochain départ
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Où souhaitez-vous aller ?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Présentez-nous votre projet. Nous vous aiderons à identifier
              les prochaines étapes de votre voyage.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-sky-500 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#123B5D]"
          >
            Parlons de votre projet
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
