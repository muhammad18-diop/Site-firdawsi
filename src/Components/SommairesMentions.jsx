
import { useState } from "react";
import {
  Scale,
  Building2,
  Server,
  Copyright,
  ShieldCheck,
  LockKeyhole,
  Cookie,
  ExternalLink,
  RefreshCw,
  Mail,
  Phone,
  ChevronRight,
  FileText,
} from "lucide-react";

const rubriques = [
  {
    numero: "01",
    titre: "Éditeur du site",
    icon: Building2,
    contenu: (
      <>
        <p>
          Le présent site est édité par{" "}
          <strong>FIRDAWSI CONSULTING GROUP</strong>, une structure proposant
          des services de conseil et d’accompagnement.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Info
            label="Nom de l’entreprise"
            value="FIRDAWSI CONSULTING GROUP"
          />
          <Info label="Forme juridique" value="???" />
          <Info
            label="Adresse"
            value="ZAC Mbao, rond-point Sipress, Dakar, Sénégal"
          />
          <Info label="Directeur de publication" value="MOUHAMED DIOP" />
          <Info label="N° d'immatriculation" value="???" />
          <Info
            label="Contact"
            value="firdawsicg@gmail.com"
          />
        </div>
      </>
    ),
  },
  {
    numero: "02",
    titre: "Hébergement du site",
    icon: Server,
    contenu: (
      <>
        <p>
          Le site est hébergé par un prestataire technique assurant le stockage
          des fichiers et leur mise à disposition en ligne.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-semibold text-slate-800">Hébergeur</p>
          <p className="mt-2">Nom : Waneekoo</p>
          <p>Adresse : Dakar, Sénégal</p>
          <p>Site web : ....</p>
        </div>
      </>
    ),
  },
  {
    numero: "03",
    titre: "Propriété intellectuelle",
    icon: Copyright,
    contenu: (
      <>
        <p>
          Les éléments présents sur ce site, notamment les textes, visuels,
          logos, éléments graphiques et contenus originaux, sont susceptibles
          d’être protégés par les règles relatives à la propriété intellectuelle.
        </p>
        <p className="mt-4">
          Sauf autorisation préalable ou disposition légale contraire, toute
          reproduction, représentation, adaptation ou réutilisation de ces
          éléments doit respecter les droits de leurs titulaires.
        </p>
        <p className="mt-4">
          Les marques, logos et contenus appartenant à des tiers restent la
          propriété de leurs détenteurs respectifs.
        </p>
      </>
    ),
  },
  {
    numero: "04",
    titre: "Responsabilité",
    icon: ShieldCheck,
    contenu: (
      <>
        <p>
          FIRDAWSI CONSULTING GROUP s’efforce de publier des informations
          utiles, compréhensibles et actualisées. Toutefois, des erreurs,
          omissions ou interruptions techniques peuvent survenir.
        </p>
        <p className="mt-4">
          Les informations présentées sur le site ont une vocation informative.
          Elles ne remplacent pas, lorsqu’il y a lieu, une étude personnalisée
          ou un conseil professionnel adapté à une situation particulière.
        </p>
        <p className="mt-4">
          Les conditions de responsabilité doivent être interprétées
          conformément aux règles applicables et aux circonstances de chaque
          situation.
        </p>
      </>
    ),
  },
  {
    numero: "05",
    titre: "Données personnelles",
    icon: LockKeyhole,
    contenu: (
      <>
        <p>
          Lorsque vous utilisez les formulaires du site, certaines informations
          personnelles peuvent être recueillies, par exemple votre nom, votre
          adresse email, votre numéro de téléphone et le contenu de votre
          message.
        </p>
        <p className="mt-4">
          Ces informations doivent être utilisées uniquement pour les finalités
          annoncées, telles que le traitement des demandes et la communication
          avec les personnes concernées, selon les traitements réellement mis
          en œuvre.
        </p>
        <p className="mt-4">
          Les modalités de conservation, de sécurité, de partage et d’exercice
          des droits des personnes doivent être précisées en fonction des
          pratiques effectives de l’entreprise et de la réglementation
          applicable au Sénégal.
        </p>

        <div className="mt-5 rounded-xl border border-sky-100 bg-sky-50 p-5">
          <p className="font-semibold text-[#123B5D]">
            Demande relative à vos données
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Pour toute question relative aux données personnelles, contactez
            l’entreprise à son adresse officielle.
          </p>
          <a
            href="mailto:EMAIL_A_COMPLETER"
            className="mt-3 inline-flex items-center gap-2 break-all font-semibold text-[#123B5D] hover:text-sky-700"
          >
            <Mail size={17} />
            firdawsicg@gmail.com
          </a>
        </div>
      </>
    ),
  },
  {
    numero: "06",
    titre: "Cookies et traceurs",
    icon: Cookie,
    contenu: (
      <>
        <p>
          Le site peut utiliser des cookies ou technologies similaires pour
          assurer son fonctionnement, mesurer son audience ou proposer certaines
          fonctionnalités, selon les outils effectivement installés.
        </p>
        <p className="mt-4">
          Les catégories de cookies utilisées, leurs finalités et les moyens
          de gérer les préférences doivent être indiqués conformément aux
          outils présents sur le site et aux obligations applicables.
        </p>
        <p className="mt-4">
          Cette rubrique doit être adaptée après vérification des cookies,
          scripts d’analyse, contenus intégrés et autres traceurs réellement
          utilisés.
        </p>
      </>
    ),
  },
  {
    numero: "07",
    titre: "Liens externes",
    icon: ExternalLink,
    contenu: (
      <>
        <p>
          Le site peut contenir des liens vers des sites ou services exploités
          par des tiers afin de faciliter l’accès à des informations
          complémentaires.
        </p>
        <p className="mt-4">
          FIRDAWSI CONSULTING GROUP ne contrôle pas nécessairement ces ressources
          externes. L’accès à celles-ci se fait selon les conditions propres à
          chaque service.
        </p>
        <p className="mt-4">
          La présence d’un lien externe ne constitue pas automatiquement une
          approbation de l’ensemble des contenus ou pratiques du site concerné.
        </p>
      </>
    ),
  },
  {
    numero: "08",
    titre: "Modification des mentions légales",
    icon: RefreshCw,
    contenu: (
      <>
        <p>
          Les présentes mentions peuvent être modifiées afin de refléter
          l’évolution du site, de l’activité de l’entreprise ou des exigences
          légales et réglementaires applicables.
        </p>
        <p className="mt-4">
          Les utilisateurs sont invités à consulter cette page régulièrement
          pour prendre connaissance de la version en vigueur.
        </p>
        <p className="mt-4">
          Dernière mise à jour : <strong>24 Octobre 2026</strong>.
        </p>
      </>
    ),
  },
  {
    numero: "09",
    titre: "Contact juridique",
    icon: Mail,
    contenu: (
      <>
        <p>
          Pour toute question concernant le site, son fonctionnement ou les
          présentes mentions légales, vous pouvez contacter FIRDAWSI CONSULTING
          GROUP au moyen des coordonnées officielles de l’entreprise.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <Mail className="mb-3 text-sky-600" size={22} />
            <p className="font-semibold text-[#123B5D]">Email</p>
            <p className="mt-2 break-all text-sm text-slate-500">
              firdawsicg@gmail.com
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <Phone className="mb-3 text-sky-600" size={22} />
            <p className="font-semibold text-[#123B5D]">Téléphone</p>
            <p className="mt-2 text-sm text-slate-500">
              +221 78 315 20 94
            </p>
          </div>
        </div>

        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#123B5D] px-5 py-3 font-semibold text-white transition hover:bg-[#071D30]"
        >
          Accéder au formulaire de contact
          <ChevronRight size={18} />
        </a>
      </>
    ),
  },
];

function Info({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-medium text-slate-700">
        {value}
      </p>
    </div>
  );
}

export default function MentionsLeg() {
  const [activeSection, setActiveSection] = useState("01");

  return (
    <main className="min-h-screen bg-white">
      {/* CONTENU PRINCIPAL — SANS HERO */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
            {/* NAVIGATION VISUELLE LATÉRALE */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="border-l-2 border-slate-100 pl-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                  Informations légales
                </p>

                <h2 className="mb-6 text-2xl font-bold text-[#123B5D]">
                  Les rubriques
                </h2>

                <ol className="space-y-1">
                  {rubriques.map((rubrique) => {
                    const active = activeSection === rubrique.numero;

                    return (
                      <li
                        key={rubrique.numero}
                        className={`flex items-start gap-3 rounded-lg px-3 py-3 transition ${
                          active ? "bg-sky-50" : "bg-transparent"
                        }`}
                      >
                        <span
                          className={`mt-0.5 text-sm font-bold ${
                            active ? "text-sky-700" : "text-slate-400"
                          }`}
                        >
                          {rubrique.numero}
                        </span>

                        <span
                          className={`text-sm leading-5 ${
                            active
                              ? "font-semibold text-[#123B5D]"
                              : "text-slate-500"
                          }`}
                        >
                          {rubrique.titre}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sky-600 shadow-sm">
                  <Mail size={20} />
                </div>

                <h3 className="font-bold text-[#123B5D]">
                  Besoin d’informations ?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Notre équipe reste disponible pour répondre à vos questions.
                </p>

                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#123B5D] transition hover:text-sky-600"
                >
                  Nous contacter
                  <ChevronRight size={16} />
                </a>
              </div>
            </aside>

            {/* RUBRIQUES JURIDIQUES */}
            <div className="min-w-0">
              <div className="mb-10 border-b border-slate-200 pb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  FIRDAWSI CONSULTING GROUP
                </p>

                <h1 className="text-3xl font-bold text-[#123B5D] sm:text-4xl">
                  Mentions légales
                </h1>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Retrouvez les informations relatives à l’éditeur du site,
                  à son hébergement, à la propriété intellectuelle et à la
                  gestion des données personnelles.
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {rubriques.map((rubrique) => {
                  const Icon = rubrique.icon;

                  return (
                    <section
                      key={rubrique.numero}
                      onMouseEnter={() =>
                        setActiveSection(rubrique.numero)
                      }
                      onFocus={() => setActiveSection(rubrique.numero)}
                      tabIndex={0}
                      className="py-9 first:pt-0 last:pb-0"
                    >
                      <div className="mb-5 flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                          <Icon size={21} strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0 pt-0.5">
                          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                            Rubrique {rubrique.numero}
                          </p>

                          <h2 className="text-xl font-bold leading-snug text-[#123B5D] sm:text-2xl">
                            {rubrique.titre}
                          </h2>
                        </div>
                      </div>

                      <div className="text-sm leading-7 text-slate-600 sm:pl-[60px] sm:text-base">
                        {rubrique.contenu}
                      </div>
                    </section>
                  );
                })}
              </div>

              {/* NOTE DE MISE À JOUR */}
              <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={22}
                    className="mt-0.5 shrink-0 text-sky-600"
                  />

                  <div>
                    <h3 className="font-semibold text-[#123B5D]">
                      Informations à vérifier
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Vérifie les informations de l’entreprise, les
                      coordonnées de l’hébergeur, les traitements de données
                      et les cookies effectivement utilisés avant de publier
                      cette page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#071D30]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-400">
              FIRDAWSI CONSULTING GROUP
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Une question sur nos informations légales ?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Contactez notre équipe pour toute demande concernant notre site
              et nos services.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-400 px-6 py-3.5 font-bold text-[#071D30] transition hover:bg-sky-300"
          >
            Nous contacter
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
