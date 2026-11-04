import { PhoneIcon, WhatsappIcon } from "./Icons";
import { telLink, whatsappLink, defaultWhatsappMessage } from "../utils/contact";

/** Barre fixe en bas de l'écran, visible uniquement sur mobile et tablette. */
export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-white/10 bg-nuit lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={telLink()}
        className="flex min-h-[56px] items-center justify-center gap-2 text-[15px] font-semibold text-white"
      >
        <PhoneIcon /> Appeler
      </a>
      <a
        href={whatsappLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-[56px] items-center justify-center gap-2 bg-accent text-[15px] font-semibold text-nuit"
      >
        <WhatsappIcon /> WhatsApp
      </a>
    </div>
  );
}
