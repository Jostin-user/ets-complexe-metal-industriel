import { Link } from "react-router-dom";
import { whatsappLink, telLink, defaultWhatsappMessage } from "../utils/contact";
import { PhoneIcon, WhatsappIcon } from "./Icons";

/** Bandeau d'appel à l'action de fin de page ; le texte change selon la page. */
export default function CtaFinal({
  title = "Vous avez un projet ou un besoin technique ?",
  primaryLabel = "Demander un devis gratuit",
  primaryTo = "/contact",
  showCall = false,
  whatsappMessage = defaultWhatsappMessage,
}) {
  return (
    <section className="bg-marine py-16 md:py-20">
      <div className="container-site flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-xl text-white">{title}</h2>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel}
          </Link>
          {showCall && (
            <a href={telLink()} className="btn-secondary">
              <PhoneIcon /> Appeler
            </a>
          )}
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" className="btn-secondary">
            <WhatsappIcon /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
