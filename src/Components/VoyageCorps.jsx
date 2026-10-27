
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
    titre: "Préparez votre dossier de visa avec méthode.",
    description:
      "Vous préparez un voyage et souhaitez mieux comprendre les démarches de visa ? FCG vous oriente sur les étapes à prévoir, les pièces généralement demandées et l’organisation de votre dossier, selon la destination et le motif du séjour.",
    avantages: [
      "Orientation selon la destination et le motif du voyage",
      "Aide à l’organisation des pièces justificatives",
      "Informations sur les étapes et les rendez-vous",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    alt: "Documents administratifs préparés pour une démarche de visa",
    Icon: FileCheck,
    lien: "/contact?service=visa",
    bouton: "Préparer mon dossier",
    note:
      "FCG accompagne la préparation du dossier, mais ne décide pas de l’octroi du visa. La décision appartient aux autorités compétentes.",
  },
  {
    id: "billets",
    numero: "02",
    categorie: "Billets d’avion",
    titre: "Trouvez un vol adapté à votre destination.",
    description:
      "Vous planifiez un déplacement personnel ou professionnel ? FCG vous accompagne dans la recherche de solutions de transport aérien en tenant compte de votre destination, de vos dates et de votre budget.",
    avantages: [
      "Recherche de vols selon votre itinéraire et vos dates",
      "Comparaison des options disponibles",
      "Accompagnement dans les démarches de réservation",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    alt: "Avion de ligne en vol au-dessus des nuages",
    Icon: Plane,
    lien: "/contact?service=billets-avion",
    bouton: "Demander un billet",
    note:
      "Les itinéraires, tarifs, conditions de modification et disponibilités doivent être confirmés au moment de la demande.",
  },
  {
    id: "etudes",
    numero: "03",
    categorie: "Études à l’étranger",
    titre: "Construisez votre projet d’études à l’international.",
    description:
      "Vous souhaitez poursuivre vos études à l’étranger ? FCG vous accompagne dans l’exploration de votre projet, la recherche d’informations sur les établissements et les formations, ainsi que la préparation des démarches de candidature.",
    avantages: [
      "Orientation sur le projet et le choix de la destination",
      "Informations sur les établissements et les conditions de candidature",
      "Accompagnement dans la préparation des documents",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    alt: "Étudiants réunis sur un campus universitaire",
    Icon: GraduationCap,
    lien: "/contact?service=etudes-etranger",
    bouton: "Parler de mon projet",
    note:
      "Une admission, une bourse, un visa ou un logement ne sont pas garantis. Les décisions appartiennent aux établissements et aux organismes compétents.",
  },
  {
    id: "hotel",
    numero: "04",
    categorie: "Réservation d’hébergement",
    titre: "Préparez un séjour qui correspond à vos attentes.",
    description:
      "Pour vos vacances, vos études ou vos déplacements professionnels, FCG peut vous orienter dans la recherche d’un hébergement selon votre destination, vos dates, votre budget et vos préférences.",
    avantages: [
      "Recherche selon la destination et les dates",
      "Prise en compte du budget et des préférences",
      "Accompagnement dans les étapes de réservation",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    alt: "Hôtel et espace d’accueil pour les voyageurs",
    Icon: Hotel,
    lien: "/contact?service=reservation-hotel",
    bouton: "Demander un hébergement",
    note:
      "Toute réservation dépend des disponibilités et des conditions du prestataire.",
  },
  {
    id: "assurance-voyage",
    numero: "05",
    categorie: "Assurance voyage",
    titre: "Voyagez en comprenant les garanties de votre couverture.",
    description:
      "Selon votre destination et votre situation, une assurance voyage peut prévoir différentes garanties, notamment pour certains frais médicaux à l’étranger, l’assistance ou les imprévus couverts par le contrat. FCG vous oriente sur les options proposées.",
    avantages: [
      "Orientation selon le voyage et les exigences de destination",
      "Informations sur les garanties, exclusions et conditions",
      "Aide à identifier une offre correspondant à votre besoin",
    ],
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Destination de voyage au bord d’un lac",
    Icon: ShieldCheck,
    lien: "/contact?service=assurance-voyage",
    bouton: "Me renseigner",
    note:
      "Les garanties, exclusions, plafonds et conditions dépendent du contrat d’assurance proposé.",
  },
  {
    id: "omra-hajj",
    numero: "06",
    categorie: "Omra & Hajj",
    titre: "Préparez votre pèlerinage avec des informations claires.",
    description:
      "Vous envisagez d’accomplir l’Omra ou le Hajj ? FCG vous informe sur les démarches et les éléments d’organisation à prévoir, selon les prestations effectivement proposées et les règles en vigueur.",
    avantages: [
      "Informations sur les étapes de préparation",
      "Orientation sur les formalités et les documents nécessaires",
      "Accompagnement selon les services disponibles",
    ],
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85",
    alt: "Architecture de la Grande Mosquée de La Mecque",
    Icon: Landmark,
    lien: "/contact?service=omra-hajj",
    bouton: "Me renseigner sur le pèlerinage",
    note:
      "Les conditions, dates, formalités et disponibilités doivent être vérifiées avant toute confirmation.",
  },
];

export default function VoyagesServices() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Introduction : sans Hero */}
      <section className="px-6 pb-14 pt-10 sm:pb-16 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#123B5D]">
            <span className="h-px w-8 bg-[#8EC9F0]" />
            Nos services de voyage
            <span className="h-px w-8 bg-[#8EC9F0]" />
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
            Chaque voyage commence par une bonne préparation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Billet d’avion, préparation d’un dossier de visa, études à
            l’étranger, hébergement, assurance voyage ou pèlerinage :
            découvrez les prestations pour lesquelles notre équipe peut vous
            orienter et vous accompagner.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {prestationsVoyage.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[#123B5D] transition duration-300 hover:border-[#8EC9F0] hover:bg-[#8EC9F0]/10"
              >
                {service.categorie}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Les six prestations : alternance image et texte conservée */}
      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-screen-xl space-y-20 lg:space-y-28">
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
                      : "lg:order-2 lg:translate-y-8"
                  }`}
                >
                  <div className="group relative h-[280px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[360px] lg:h-[420px]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D30]/80 via-[#071D30]/10 to-transparent" />

                    <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-[#071D30]/60 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                      {service.numero} / 06
                    </span>

                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-white">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-md">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                          FIRDAWSI CONSULTING GROUP
                        </p>
                        <p className="mt-1 text-lg font-semibold sm:text-xl">
                          {service.categorie}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl bg-[#8EC9F0]/25" />
                </div>

                {/* Texte */}
                <div
                  className={`relative py-2 lg:py-8 ${
                    imageAGauche
                      ? "lg:order-2"
                      : "lg:order-1 lg:translate-y-8"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#123B5D]">
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
                          className="mt-0.5 shrink-0 text-[#123B5D]"
                        />
                        <span>{avantage}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Précision utile selon la prestation */}
                  <div className="mt-6 rounded-lg border-l-4 border-[#8EC9F0] bg-slate-50 px-4 py-3">
                    <p className="text-sm leading-6 text-slate-600">
                      {service.note}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={service.lien}
                      className="inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#071D30] focus:outline-none focus:ring-4 focus:ring-[#8EC9F0]/50"
                    >
                      {service.bouton}
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D] transition duration-300 hover:text-slate-500"
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

      {/* Appel à l’action final : sans Hero supplémentaire */}
      <section className="relative overflow-hidden bg-[#071D30] px-6 py-16 sm:py-20 lg:px-10">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EC9F0]">
              Votre prochain départ
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Parlons de votre prochain voyage.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Vous avez un projet de voyage, de déplacement professionnel,
              d’études à l’étranger ou de pèlerinage ? Contactez FCG pour nous
              présenter votre besoin et connaître les démarches et prestations
              qui peuvent vous être proposées.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#8EC9F0] px-6 py-4 font-semibold text-[#071D30] transition duration-300 hover:bg-white"
          >
            Présenter mon projet
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
