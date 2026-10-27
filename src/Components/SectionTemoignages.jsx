
import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const NAVY = "#123B5D";
const DARK = "#071D30";
const SKY = "#38BDF8";

const temoignages = [
  {
    id: 1,
    nom: "Awa Diouf",
    role: "Cliente — Voyage",
    initiales: "AD",
    service: "Voyages",
    note: 5,
    message:
      "Une équipe professionnelle et très réactive. Mon dossier de voyage a été traité avec sérieux et je me suis sentie accompagnée à chaque étape.",
  },
  {
    id: 2,
    nom: "Cheikh Mbaye",
    role: "Client — Immobilier",
    initiales: "CM",
    service: "Immobilier",
    note: 5,
    message:
      "J'ai apprécié la qualité de l'accompagnement dans ma recherche de logement. Les explications étaient claires et le suivi très satisfaisant.",
  },
  {
    id: 3,
    nom: "Khady Ndiaye",
    role: "Cliente — Assurance",
    initiales: "KN",
    service: "Assurance",
    note: 5,
    message:
      "Une prise en charge attentive et des conseils adaptés à mes besoins. L'équipe a pris le temps de répondre à toutes mes questions.",
  },
  {
    id: 4,
    nom: "Ousmane Diallo",
    role: "Client — Voyage",
    initiales: "OD",
    service: "Voyages",
    note: 5,
    message:
      "L'organisation de mon voyage s'est déroulée dans de bonnes conditions. J'ai particulièrement apprécié la disponibilité de l'équipe.",
  },
  {
    id: 5,
    nom: "Sokhna Gueye",
    role: "Cliente — Immobilier",
    initiales: "SG",
    service: "Immobilier",
    note: 5,
    message:
      "Un accompagnement rassurant du début à la fin. J'ai bénéficié de conseils utiles pour mieux définir mes critères de recherche.",
  },
  {
    id: 6,
    nom: "Modou Kane",
    role: "Client — Assurance",
    initiales: "MK",
    service: "Assurance",
    note: 4,
    message:
      "Une équipe à l'écoute, qui prend le temps d'expliquer les différentes possibilités. L'expérience a été globalement très positive.",
  },
  {
    id: 7,
    nom: "Ndeye Fall",
    role: "Cliente — Voyage",
    initiales: "NF",
    service: "Voyages",
    note: 5,
    message:
      "J'ai trouvé une équipe disponible et organisée. Les informations communiquées m'ont permis d'avancer sereinement dans mes démarches.",
  },
  {
    id: 8,
    nom: "Babacar Sy",
    role: "Client — Immobilier",
    initiales: "BS",
    service: "Immobilier",
    note: 5,
    message:
      "Le service est sérieux et l'accueil professionnel. J'ai apprécié les échanges et la volonté de proposer une solution adaptée.",
  },
  {
    id: 9,
    nom: "Adama Diagne",
    role: "Cliente — Assurance",
    initiales: "AD",
    service: "Assurance",
    note: 5,
    message:
      "Une bonne expérience avec des explications accessibles et un accompagnement attentif. Je recommande de prendre contact avec l'équipe.",
  },
  {
    id: 10,
    nom: "Mamadou Sarr",
    role: "Client — Voyage",
    initiales: "MS",
    service: "Voyages",
    note: 5,
    message:
      "Le suivi de mon dossier a été appréciable. L'équipe est restée disponible pour répondre à mes interrogations et m'orienter.",
  },
  {
    id: 11,
    nom: "Fatou Cissé",
    role: "Cliente — Immobilier",
    initiales: "FC",
    service: "Immobilier",
    note: 5,
    message:
      "J'ai reçu des conseils utiles pour organiser ma recherche immobilière. Le contact a été professionnel et les échanges agréables.",
  },
  {
    id: 12,
    nom: "Ibrahima Ba",
    role: "Client — Assurance",
    initiales: "IB",
    service: "Assurance",
    note: 4,
    message:
      "Une équipe accueillante qui prend le temps d'expliquer les démarches. J'ai apprécié la clarté des informations fournies.",
  },
  {
    id: 13,
    nom: "Mariama Sow",
    role: "Cliente — Voyage",
    initiales: "MS",
    service: "Voyages",
    note: 5,
    message:
      "Un accompagnement sérieux et une communication appréciable. Je me suis sentie guidée pendant les différentes étapes de mon dossier.",
  },
  {
    id: 14,
    nom: "Abdoulaye Faye",
    role: "Client — Immobilier",
    initiales: "AF",
    service: "Immobilier",
    note: 5,
    message:
      "L'équipe a été attentive à mes besoins et m'a aidé à mieux comprendre les étapes de ma recherche de logement.",
  },
  {
    id: 15,
    nom: "Aminata Touré",
    role: "Cliente — Assurance",
    initiales: "AT",
    service: "Assurance",
    note: 5,
    message:
      "Une expérience positive grâce à l'écoute et à la qualité des explications. L'accompagnement m'a permis d'avancer plus sereinement.",
  },
];

const filtres = ["Tous", "Voyages", "Immobilier", "Assurance"];

export default function SectionTemoignages() {
  const [filtre, setFiltre] = useState("Tous");
  const [page, setPage] = useState(1);

  const temoignagesFiltres =
    filtre === "Tous"
      ? temoignages
      : temoignages.filter(
          (item) => item.service === filtre
        );

  const nombreParPage = 3;
  const nombrePages = Math.ceil(
    temoignagesFiltres.length / nombreParPage
  );

  const temoignagesAffiches = temoignagesFiltres.slice(
    (page - 1) * nombreParPage,
    page * nombreParPage
  );

  const changerFiltre = (service) => {
    setFiltre(service);
    setPage(1);
  };

  const pagePrecedente = () => {
    setPage((anciennePage) =>
      Math.max(1, anciennePage - 1)
    );
  };

  const pageSuivante = () => {
    setPage((anciennePage) =>
      Math.min(nombrePages, anciennePage + 1)
    );
  };

  return (
    <section
      id="avis-clients"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Décoration de fond */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
            style={{
              color: NAVY,
              borderColor: "#D8E8F3",
              backgroundColor: "#F0F9FF",
            }}
          >
            <MessageSquareQuote size={17} />
            Témoignages clients
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#123B5D]"
            
          >
            Vos expériences,
            <span
              className="block text-sky-600"
             
            >
              notre plus belle référence.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            La confiance de nos clients est au cœur de notre
            engagement. Découvrez leurs retours sur les services
            et l'accompagnement proposés par FIRDAWSI CONSULTING
            GROUP.
          </p>
        </div>

        {/* Indicateurs */}
        

        {/* Cartes des témoignages */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {temoignagesAffiches.map((temoignage) => (
            <article
              key={temoignage.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-7"
            >
              {/* Bordure supérieure bleu marine uni */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: NAVY }}
              />

              {/* Avatar et citation */}
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-base font-bold text-white shadow-sm"
                  style={{ backgroundColor: NAVY }}
                >
                  {temoignage.initiales}
                </div>

                <div
                  className="rounded-xl p-2.5"
                  style={{
                    color: "#8DB9D5",
                    backgroundColor: "#F0F9FF",
                  }}
                >
                  <Quote size={23} fill="currentColor" />
                </div>
              </div>

              {/* Étoiles */}
              <div
                className="mb-4 flex items-center gap-1"
                aria-label={`Note : ${temoignage.note} sur 5`}
              >
                {[1, 2, 3, 4, 5].map((etoile) => (
                  <Star
                    key={etoile}
                    size={17}
                    fill={
                      etoile <= temoignage.note
                        ? "currentColor"
                        : "none"
                    }
                    className={
                      etoile <= temoignage.note
                        ? "text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}

                <span className="ml-2 text-xs font-semibold text-slate-500">
                  {temoignage.note}/5
                </span>
              </div>

              {/* Message */}
              <blockquote className="flex-1 text-[15px] leading-7 text-slate-600">
                « {temoignage.message} »
              </blockquote>

              {/* Client et service */}
              <div className="mt-7 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      className="truncate font-bold"
                      style={{ color: DARK }}
                    >
                      {temoignage.nom}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {temoignage.role}
                    </p>
                  </div>

                  <span
                    className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold"
                    style={{
                      color: NAVY,
                      backgroundColor: "#EAF6FD",
                    }}
                  >
                    {temoignage.service}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {nombrePages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-5">
            <p className="text-sm text-slate-500">
              Page{" "}
              <span
                className="font-bold"
                style={{ color: NAVY }}
              >
                {page}
              </span>{" "}
              sur{" "}
              <span
                className="font-bold"
                style={{ color: NAVY }}
              >
                {nombrePages}
              </span>
            </p>

            <nav
              className="flex flex-wrap items-center justify-center gap-2"
              aria-label="Pagination des témoignages"
            >
              <button
                type="button"
                onClick={pagePrecedente}
                disabled={page === 1}
                aria-label="Page précédente"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from(
                { length: nombrePages },
                (_, index) => index + 1
              ).map((numero) => (
                <button
                  key={numero}
                  type="button"
                  onClick={() => setPage(numero)}
                  aria-label={`Aller à la page ${numero}`}
                  aria-current={
                    page === numero ? "page" : undefined
                  }
                  className={`h-11 w-11 rounded-full text-sm font-bold transition-all duration-200 ${
                    page === numero
                      ? "text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700"
                  }`}
                  style={
                    page === numero
                      ? { backgroundColor: NAVY }
                      : undefined
                  }
                >
                  {numero}
                </button>
              ))}

              <button
                type="button"
                onClick={pageSuivante}
                disabled={page === nombrePages}
                aria-label="Page suivante"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-300 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={20} />
              </button>
            </nav>

            <p className="text-center text-sm text-slate-400">
              Consultez les témoignages page par page.
            </p>
          </div>
        )}

        {/* Appel à l'action */}
        <div
          className="relative mt-16 overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-12"
          style={{ backgroundColor: DARK }}
        >
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg[#07212D] " />

          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Et si vous étiez notre prochain témoignage ?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Vous avez un projet de voyage, d'immobilier ou
              d'assurance ? Notre équipe est disponible pour vous
              accompagner avec professionnalisme et attention.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg bg-sky-600"
              
            >
              Parlons de votre projet
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
