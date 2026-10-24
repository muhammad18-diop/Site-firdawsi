
import { useState } from "react";
import {
  ShieldCheck,
  LockKeyhole,
  UserRound,
  Database,
  ClipboardList,
  Share2,
  Clock,
  Cookie,
  Scale,
  Mail,
  Phone,
  ChevronRight,
  FileText,
  UserCheck,
  RefreshCw,
} from "lucide-react";

const rubriques = [
  {
    numero: "01",
    titre: "Introduction",
    icon: ShieldCheck,
    contenu: (
      <>
        <p>
          FIRDAWSI CONSULTING GROUP accorde une attention particulière à la
          confidentialité des informations qui lui sont communiquées. Cette
          politique explique comment les données personnelles peuvent être
          collectées, utilisées, conservées et protégées lors de votre
          utilisation de notre site.
        </p>
        <p className="mt-4">
          Elle doit être lue en complément des mentions légales et des
          informations affichées au moment de la collecte des données.
        </p>
      </>
    ),
  },
  {
    numero: "02",
    titre: "Données collectées",
    icon: Database,
    contenu: (
      <>
        <p>
          Selon les fonctionnalités utilisées, les informations susceptibles
          d’être recueillies comprennent :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-sky-500">
          <li>Nom et prénom ;</li>
          <li>Adresse email et numéro de téléphone ;</li>
          <li>Informations communiquées dans les formulaires ;</li>
          <li>
            Informations techniques nécessaires au fonctionnement et à la
            sécurité du site, lorsqu’elles sont effectivement collectées.
          </li>
        </ul>
        <p className="mt-4">
          Seules les données réellement collectées doivent être mentionnées
          dans cette politique.
        </p>
      </>
    ),
  },
  {
    numero: "03",
    titre: "Finalités du traitement",
    icon: ClipboardList,
    contenu: (
      <>
        <p>
          Les données personnelles peuvent être utilisées, selon les services
          proposés et les traitements effectivement mis en œuvre, pour :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-sky-500">
          <li>Répondre aux demandes envoyées via le formulaire de contact ;</li>
          <li>Communiquer avec les personnes intéressées par nos services ;</li>
          <li>Assurer le fonctionnement et la sécurité du site ;</li>
          <li>
            Respecter les obligations légales applicables, le cas échéant.
          </li>
        </ul>
        <p className="mt-4">
          Chaque traitement doit avoir une finalité précise et une base
          juridique appropriée.
        </p>
      </>
    ),
  },
  {
    numero: "04",
    titre: "Utilisation des données",
    icon: UserRound,
    contenu: (
      <>
        <p>
          Les informations reçues sont destinées aux personnes habilitées à
          traiter les demandes et à assurer les services concernés.
        </p>
        <p className="mt-4">
          Elles ne doivent pas être utilisées pour des finalités incompatibles
          avec celles annoncées lors de leur collecte, sauf lorsque la loi
          autorise un autre usage.
        </p>
        <p className="mt-4">
          Les modalités réelles d’accès aux données doivent être vérifiées,
          notamment lorsque des prestataires techniques interviennent dans
          le fonctionnement du site.
        </p>
      </>
    ),
  },
  {
    numero: "05",
    titre: "Partage des données",
    icon: Share2,
    contenu: (
      <>
        <p>
          Les données peuvent être accessibles à des prestataires techniques
          uniquement lorsque cela est nécessaire au fonctionnement du site ou
          au traitement des demandes, dans les limites prévues par les règles
          applicables et les accords conclus avec ces prestataires.
        </p>
        <p className="mt-4">
          Les destinataires réels des données, les éventuels transferts hors
          du Sénégal et les garanties associées doivent être précisés lorsque
          ces situations existent.
        </p>
        <p className="mt-4">
          Ne publie pas une affirmation absolue sur l’absence de partage avant
          d’avoir vérifié les outils et services connectés au site.
        </p>
      </>
    ),
  },
  {
    numero: "06",
    titre: "Conservation et sécurité",
    icon: LockKeyhole,
    contenu: (
      <>
        <p>
          Les données personnelles doivent être conservées pendant une durée
          adaptée à leur finalité et aux obligations légales applicables.
        </p>
        <p className="mt-4">
          FIRDAWSI CONSULTING GROUP doit mettre en œuvre des mesures de sécurité
          proportionnées pour limiter les risques d’accès non autorisé, de
          perte, de divulgation ou d’altération des informations.
        </p>
        <p className="mt-4">
          Les durées de conservation et les mesures effectivement utilisées
          doivent être documentées et précisées en fonction de l’organisation
          réelle de l’entreprise.
        </p>
      </>
    ),
  },
  {
    numero: "07",
    titre: "Cookies et technologies similaires",
    icon: Cookie,
    contenu: (
      <>
        <p>
          Le site peut utiliser des cookies ou technologies similaires selon
          les fonctionnalités et outils installés. Ils peuvent être nécessaires
          au fonctionnement technique ou servir à d’autres finalités.
        </p>
        <p className="mt-4">
          Les cookies effectivement utilisés, leurs objectifs, leur durée et
          les moyens de gérer les préférences doivent être présentés de façon
          claire aux visiteurs.
        </p>
        <p className="mt-4">
          Cette rubrique doit être adaptée après vérification des outils
          d’analyse, contenus intégrés et autres traceurs présents sur le site.
        </p>
      </>
    ),
  },
  {
    numero: "08",
    titre: "Vos droits",
    icon: UserCheck,
    contenu: (
      <>
        <p>
          Selon la législation applicable et les circonstances du traitement,
          vous pouvez disposer de droits concernant vos données personnelles,
          notamment un droit d’accès, de rectification ou d’opposition, ainsi
          que d’autres droits prévus par la réglementation.
        </p>
        <p className="mt-4">
          Les modalités d’exercice de ces droits, les éventuelles conditions
          applicables et les possibilités de réclamation auprès de l’autorité
          compétente doivent être précisées conformément au droit applicable
          au Sénégal.
        </p>
        <div className="mt-5 rounded-xl border border-sky-100 bg-sky-50 p-5">
          <p className="font-semibold text-[#123B5D]">
            Exercer vos droits
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Vous pouvez adresser votre demande à l’adresse officielle de
            contact de l’entreprise, à compléter avant publication.
          </p>
          <a
            href="mailto:firdawsicg@gmail.com"
            className="mt-3 inline-flex items-center gap-2 break-all font-semibold text-[#123B5D] transition hover:text-sky-700"
          >
            <Mail size={17} />
            firdawsicg@gmail.com
          </a>
        </div>
      </>
    ),
  },
  {
    numero: "09",
    titre: "Modifications de la politique",
    icon: RefreshCw,
    contenu: (
      <>
        <p>
          Cette politique peut être mise à jour pour refléter l’évolution
          des services, des pratiques de traitement ou des règles applicables.
        </p>
        <p className="mt-4">
          La version publiée sur cette page constitue la version à consulter
          pour connaître les informations actuellement communiquées par
          l’entreprise.
        </p>
        <p className="mt-4">
          Dernière mise à jour : <strong>24 Octobre 2026</strong>.
        </p>
      </>
    ),
  },
  {
    numero: "10",
    titre: "Nous contacter",
    icon: Mail,
    contenu: (
      <>
        <p>
          Pour toute question concernant cette politique de confidentialité
          ou le traitement de vos données personnelles, vous pouvez contacter
          FIRDAWSI CONSULTING GROUP à l’aide des coordonnées officielles
          de l’entreprise.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <Mail className="mb-3 text-sky-600" size={22} />
            <p className="font-semibold text-[#123B5D]">Adresse email</p>
            <p className="mt-2 break-all text-sm text-slate-500">
              firdawsicgàgmail.com
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

export default function Confidentialite() {
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
                  Protection des données
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
                  <LockKeyhole size={20} />
                </div>

                <h3 className="font-bold text-[#123B5D]">
                  Vos données comptent
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Pour toute question concernant vos données personnelles,
                  notre équipe reste à votre écoute.
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

            {/* CONTENU DES RUBRIQUES */}
            <div className="min-w-0">
              <div className="mb-10 border-b border-slate-200 pb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  FIRDAWSI CONSULTING GROUP
                </p>

                <h1 className="text-3xl font-bold text-[#123B5D] sm:text-4xl">
                  Politique de confidentialité
                </h1>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Découvrez comment les données personnelles peuvent être
                  collectées, utilisées, conservées et protégées lors de
                  votre utilisation de notre site.
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
                      onFocus={() =>
                        setActiveSection(rubrique.numero)
                      }
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

              {/* RAPPEL */}
              <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={22}
                    className="mt-0.5 shrink-0 text-sky-600"
                  />

                  <div>
                    <h3 className="font-semibold text-[#123B5D]">
                      Transparence et protection
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Cette politique doit refléter les pratiques réelles
                      de collecte et de traitement des données de
                      FIRDAWSI CONSULTING GROUP. Les coordonnées et les
                      informations à compléter doivent être vérifiées
                      avant publication.
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
              Une question sur vos données personnelles ?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Contactez notre équipe pour toute question concernant la
              confidentialité et la gestion de vos informations.
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
