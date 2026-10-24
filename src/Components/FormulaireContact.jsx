
import { useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  BriefcaseBusiness,
  MessageSquareText,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  service: "",
  sujet: "",
  message: "",
};

const services = [
  { value: "voyages", label: "Voyages" },
  { value: "immobilier", label: "Immobilier" },
  { value: "assurance", label: "Assurance" },
  { value: "autre", label: "Autre demande" },
];

export default function FormulaireContact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validateForm = () => {
    const newErrors = {};

    if (form.nom.trim().length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères.";
    }

    if (!validateEmail(form.email)) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    // Téléphone facultatif ; s'il est renseigné, il faut
    // entre 9 et 15 chiffres, sans espaces ni symboles.
    if (
      form.telephone &&
      !/^[0-9]{9,15}$/.test(form.telephone)
    ) {
      newErrors.telephone =
        "Entrez uniquement 9 à 15 chiffres, sans espaces.";
    }

    if (!form.service) {
      newErrors.service = "Veuillez choisir un service.";
    }

    if (form.sujet.trim().length < 3) {
      newErrors.sujet = "L'objet doit contenir au moins 3 caractères.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message =
        "Le message doit contenir au moins 10 caractères.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Refuse tout caractère non numérique dans le téléphone.
    if (name === "telephone" && !/^[0-9]*$/.test(value)) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    // À connecter à ton API backend pour envoyer réellement
    // la demande. Pour le moment, aucune donnée n'est transmise.
    setStatus("idle");

    alert(
      "Les informations sont valides. Connecte le formulaire à ton backend pour envoyer réellement la demande."
    );
  };

  const inputClass =
    "w-full min-w-0 rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

  const errorClass = "mt-1.5 text-sm text-red-600";

  return (
    <section
      id="formulaire-contact"
      className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Présentation */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Parlons de votre projet
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Comment pouvons-nous vous aider ?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Vous avez un projet de voyage, une recherche immobilière
            ou un besoin en assurance ? Présentez-nous votre demande.
            Notre équipe pourra mieux comprendre vos attentes et
            vous orienter vers le service adapté.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#071B3A] text-sky-300">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <h3 className="font-bold text-[#071B3A]">
                  Un accompagnement adapté
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Présentez votre besoin afin de nous permettre de
                  mieux comprendre votre projet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#071B3A] text-sky-300">
                <ShieldCheck size={23} />
              </div>

              <div>
                <h3 className="font-bold text-[#071B3A]">
                  Vos informations
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Vos données doivent être traitées conformément à
                  la politique de confidentialité de l'entreprise.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-sky-500 pl-5">
            <p className="text-lg font-semibold leading-7 text-[#071B3A]">
              FIRDAWSI CONSULTING GROUP
            </p>
            <p className="mt-1 text-sm text-slate-500">
              L'excellence au cœur de vos besoins.
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <form
          noValidate
          onSubmit={handleSubmit}
          className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="mb-8 border-b border-slate-100 pb-6">
            <h3 className="text-2xl font-bold text-[#071B3A]">
              Envoyez-nous un message
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Les champs marqués d'un astérisque sont obligatoires.
            </p>
          </div>

          {status === "error" && Object.keys(errors).length > 0 && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              <AlertCircle size={20} className="shrink-0" />
              <p>Veuillez corriger les champs signalés ci-dessous.</p>
            </div>
          )}

          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            {/* Nom */}
            <div className="min-w-0">
              <label
                htmlFor="contact-nom"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nom complet *
              </label>

              <div className="relative">
                <UserRound
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  aria-invalid={Boolean(errors.nom)}
                  className={`${inputClass} pl-11 ${
                    errors.nom ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.nom && (
                <p className={errorClass}>{errors.nom}</p>
              )}
            </div>

            {/* E-mail */}
            <div className="min-w-0">
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Adresse e-mail *
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`${inputClass} pl-11 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.email && (
                <p className={errorClass}>{errors.email}</p>
              )}
            </div>

            {/* Téléphone : chiffres uniquement */}
            <div className="min-w-0">
              <label
                htmlFor="contact-telephone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Téléphone
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="contact-telephone"
                  name="telephone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={15}
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="Ex. : 771234567"
                  aria-invalid={Boolean(errors.telephone)}
                  aria-describedby={
                    errors.telephone
                      ? "contact-telephone-error"
                      : undefined
                  }
                  className={`${inputClass} pl-11 ${
                    errors.telephone ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.telephone ? (
                <p
                  id="contact-telephone-error"
                  className={errorClass}
                >
                  {errors.telephone}
                </p>
              ) : (
                <p className="mt-1.5 text-xs text-slate-400">
                  9 à 15 chiffres, sans espaces ni symboles.
                </p>
              )}
            </div>

            {/* Service */}
            <div className="min-w-0">
              <label
                htmlFor="contact-service"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Service concerné *
              </label>

              <div className="relative">
                <BriefcaseBusiness
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  id="contact-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  className={`${inputClass} appearance-none pl-11 ${
                    errors.service ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Sélectionnez un service</option>

                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {errors.service && (
                <p className={errorClass}>{errors.service}</p>
              )}
            </div>

            {/* Sujet */}
            <div className="min-w-0 sm:col-span-2">
              <label
                htmlFor="contact-sujet"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Objet de votre demande *
              </label>

              <input
                id="contact-sujet"
                name="sujet"
                type="text"
                required
                minLength={3}
                maxLength={150}
                value={form.sujet}
                onChange={handleChange}
                placeholder="Ex. : Demande de renseignements"
                aria-invalid={Boolean(errors.sujet)}
                className={`${inputClass} ${
                  errors.sujet ? "border-red-500" : ""
                }`}
              />

              {errors.sujet && (
                <p className={errorClass}>{errors.sujet}</p>
              )}
            </div>

            {/* Message */}
            <div className="min-w-0 sm:col-span-2">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Votre message *
                </label>

                <span className="text-xs text-slate-400">
                  {form.message.length}/3000
                </span>
              </div>

              <div className="relative">
                <MessageSquareText
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-4 text-slate-400"
                />

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre question..."
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass} resize-y pl-11 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.message && (
                <p className={errorClass}>{errors.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#071B3A] px-6 py-4 font-bold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            Envoyer ma demande
           
          </button>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            Les informations fournies sont destinées au traitement
            de votre demande. Consultez la politique de confidentialité
            pour connaître les modalités de traitement de vos données.
          </p>
        </form>
      </div>
    </section>
  );
}
