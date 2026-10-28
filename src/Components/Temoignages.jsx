import { Star, Quote, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

// ⚠️ RÈGLE DU CAHIER DES CHARGES (Section 10 & 14)[cite: 1] :
// Passer `HAS_VERIFIED_REVIEWS` à `true` UNIQUEMENT après validation et autorisation des témoignages authentiques par FCG.
const HAS_VERIFIED_REVIEWS = false;

// Témoignages authentiques (à renseigner après validation de la dirigeante)[cite: 1]
const temoignagesAuthentiques = [
  {
    nom: "Nom du client réel",
    role: "Projet Immobilier",
    initiales: "N",
    note: 5,
    avis: "Témoignage réel et autorisé à insérer ici après confirmation.",
  },
];

const engagements = [
  {
    icon: HeartHandshake,
    titre: "Écoute attentive",
    description: "Une prise en compte rigoureuse de vos objectifs et de votre situation.",
  },
  {
    icon: ShieldCheck,
    titre: "Transparence totale",
    description: "Des informations claires à chaque étape de vos démarches.",
  },
  {
    icon: CheckCircle2,
    titre: "Suivi personnalisé",
    description: "Un accompagnement humain et professionnel sur le long terme.",
  },
];

function Temoignages() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* CONDITION 1 : AFFICHAGE DE LA SECTION "NOTRE ENGAGEMENT" (Par défaut, si avis non vérifiés)[cite: 1] */}
        {!HAS_VERIFIED_REVIEWS ? (
          <div>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
                <span className="h-px w-8 bg-sky-500" />
                Notre Engagement
                <span className="h-px w-8 bg-sky-500" />
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#123B5D] sm:text-4xl lg:text-5xl">
                La confiance au cœur de{" "}
                <span className="text-sky-600">nos relations.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                La satisfaction de nos clients repose sur un accompagnement éthique, une écoute bienveillante et la recherche constante de solutions adaptées[cite: 1].
              </p>
            </div>

            {/* Grille des 3 piliers d'engagement[cite: 1] */}
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {engagements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/50 p-8 text-center transition duration-300 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-[#071D30]">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-xl font-bold text-[#123B5D]">
                      {item.titre}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Vers la prise de contact */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#123B5D] px-8 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
              >
                Parlons de votre projet
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ) : (
          /* CONDITION 2 : AFFICHAGE DES TÉMOIGNAGES AUTHENTIQUES (Une fois validés par FCG)[cite: 1] */
          <div>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
                <span className="h-px w-8 bg-sky-500" />
                Témoignages
                <span className="h-px w-8 bg-sky-500" />
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#071D30] sm:text-4xl lg:text-5xl">
                Ce que nos clients{" "}
                <span className="text-sky-600">disent de nous.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Découvrez les retours authentiques de personnes et de partenaires accompagnés par FIRDAWSI CONSULTING GROUP[cite: 1].
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {temoignagesAuthentiques.map((temoignage) => (
                <article
                  key={temoignage.nom}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: temoignage.note }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    <Quote
                      size={34}
                      className="text-sky-100 transition-colors group-hover:text-sky-200"
                      fill="currentColor"
                    />
                  </div>

                  <p className="mt-6 flex-1 text-base leading-8 text-slate-600">
                    « {temoignage.avis} »
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071D30] text-sm font-bold text-white">
                      {temoignage.initiales}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#071D30]">
                        {temoignage.nom}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {temoignage.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Temoignages;