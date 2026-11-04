import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { siteData } from "../data/siteData";
import { buildQuoteMessage, validateQuote, whatsappLink } from "../utils/contact";
import { WhatsappIcon } from "./Icons";

const { services, trainingSummary, settings } = siteData;

const OTHER = "Autre ou je ne sais pas encore";
const serviceOptions = [
  ...services.map((s) => s.title),
  ...(settings.showTrainings ? [trainingSummary.title] : []),
  OTHER,
];

/** Convertit ?service=rebobinage (ou formation) en intitulé du formulaire. */
function serviceFromParam(param) {
  if (!param) return "";
  if (param === "formation") return settings.showTrainings ? trainingSummary.title : "";
  return services.find((s) => s.slug === param)?.title ?? "";
}

const fieldClass = (hasError) =>
  `block w-full min-h-[48px] border bg-white px-4 py-3 text-base text-nuit placeholder:text-slate-400 focus:border-marine ${
    hasError ? "border-red-600" : "border-slate-300"
  }`;

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-semibold text-marine">
        {label}
        {optional && <span className="font-normal text-acier"> (facultatif)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-erreur`} className="mt-1.5 text-[15px] font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ submitLabel = "Demander un devis gratuit" }) {
  const [params] = useSearchParams();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceFromParam(params.get("service")),
    description: "",
  });
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateQuote(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`champ-${first}`)?.focus();
      return;
    }
    setMessage(buildQuoteMessage({ ...values, hasFile: Boolean(fileName) }));
    setCopied(false);
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  // Étape 2 : le message est prêt, le visiteur l'envoie lui-même sur WhatsApp
  if (message) {
    return (
      <div className="border border-slate-200 bg-white p-4 sm:p-8" role="status">
        <h2 className="!text-2xl">Votre message est prêt</h2>
        <p className="mt-3 text-[16px] text-slate-700">
          Votre demande n'est pas encore envoyée : ouvrez WhatsApp, vérifiez le message puis appuyez sur
          envoyer.
        </p>
        <pre className="mt-5 whitespace-pre-wrap bg-clair p-4 font-sans text-[15px] text-marine">{message}</pre>

        {fileName && (
          <p className="mt-4 border-l-4 border-accent bg-clair p-4 text-[15px] text-marine">
            <strong>Photo à joindre :</strong> le site ne peut pas envoyer « {fileName} » automatiquement.
            Ajoutez-la vous-même dans la conversation WhatsApp avant d'envoyer.
          </p>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="btn-primary">
            <WhatsappIcon /> Ouvrir WhatsApp
          </a>
          <button type="button" onClick={copyMessage} className="btn-outline">
            {copied ? "Message copié" : "Copier le message"}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setMessage(null)}
          className="mt-5 text-[15px] font-semibold text-marine underline underline-offset-4"
        >
          Modifier ma demande
        </button>
      </div>
    );
  }

  const describedBy = (field) => (errors[field] ? `champ-${field}-erreur` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 border border-slate-200 bg-white p-4 sm:p-8">
      {Object.keys(errors).length > 0 && (
        <p role="alert" className="border-l-4 border-red-600 bg-red-50 p-3 text-[15px] font-medium text-red-800">
          Merci de corriger les champs signalés ci-dessous.
        </p>
      )}

      <Field id="champ-name" label="Nom" error={errors.name}>
        <input
          id="champ-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
          className={fieldClass(errors.name)}
        />
      </Field>

      <Field id="champ-phone" label="Téléphone" error={errors.phone}>
        <input
          id="champ-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={describedBy("phone")}
          className={fieldClass(errors.phone)}
        />
      </Field>

      <Field id="champ-email" label="E-mail" optional error={errors.email}>
        <input
          id="champ-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          className={fieldClass(errors.email)}
        />
      </Field>

      <Field id="champ-service" label="Service recherché" error={errors.service}>
        <select
          id="champ-service"
          value={values.service}
          onChange={update("service")}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={describedBy("service")}
          className={fieldClass(errors.service)}
        >
          <option value="">Choisir un service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="champ-description" label="Votre projet ou votre problème" error={errors.description}>
        <textarea
          id="champ-description"
          rows={5}
          value={values.description}
          onChange={update("description")}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={describedBy("description")}
          className={fieldClass(errors.description)}
        />
      </Field>

      <Field id="champ-fichier" label="Photo ou fichier" optional>
        <input
          id="champ-fichier"
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          className="block w-full text-[15px] text-slate-700 file:mr-4 file:min-h-[44px] file:cursor-pointer file:border-0 file:bg-marine file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-nuit"
        />
        {fileName && (
          <p className="mt-2 text-[15px] text-acier">
            Ce fichier ne sera pas envoyé automatiquement : vous devrez le joindre dans WhatsApp à l'étape suivante.
          </p>
        )}
      </Field>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {submitLabel}
      </button>
    </form>
  );
}
