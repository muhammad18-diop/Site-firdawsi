
import { Building2 } from "lucide-react";

export default function EditeurSite() {
  const informations = [
    ["Dénomination", "FIRDAWSI CONSULTING GROUP"],
    ["Forme juridique", "[À compléter]"],
    ["Adresse", "ZAC Mbao, rond-point Sipress, Dakar, Sénégal"],
    ["Téléphone", "[Numéro professionnel à compléter]"],
    ["E-mail", "[Adresse e-mail professionnelle à compléter]"],
    ["Immatriculation", "[Numéro applicable, le cas échéant]"],
    ["Directeur de publication", "[Nom et fonction à compléter]"],
  ];

  return (
    <section id="editeur-site" className="scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        <Building2 className="text-sky-600" size={25} />
        <h2 className="text-2xl font-bold text-[#123B5D]">
          Éditeur du site
        </h2>
      </div>

      <p className="mb-6 leading-7 text-slate-600">
        Le présent site est édité par FIRDAWSI CONSULTING GROUP.
        Les informations ci-dessous permettent d’identifier l’éditeur
        et de le contacter.
      </p>

      <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
        {informations.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6"
          >
            <dt className="text-sm font-semibold text-slate-700">
              {label}
            </dt>
            <dd className="break-words text-sm leading-6 text-slate-600">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
