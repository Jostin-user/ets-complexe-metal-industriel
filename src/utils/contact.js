import { siteData } from "../data/siteData";

const { contact } = siteData;

/** Lien WhatsApp avec message optionnel prérempli. */
export function whatsappLink(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${contact.whatsapp}${text}`;
}

/** Lien d'appel téléphonique (supprime les espaces du numéro). */
export function telLink(phone = contact.phone) {
    return `tel:${phone.replace(/\s+/g, "")}`;
}

export const defaultWhatsappMessage =
    "Bonjour, je souhaite des informations sur vos services.";

/** Vérifie le formulaire de devis ; renvoie un objet { champ: message } (vide si tout est valide). */
export function validateQuote(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Indiquez votre nom.";

    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) errors.phone = "Indiquez votre numéro de téléphone.";
    else if (digits.length < 8) errors.phone = "Ce numéro semble trop court.";

    const email = values.email.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Cette adresse e-mail n'est pas valide.";
    }

    if (!values.service) errors.service = "Choisissez un service.";
    if (values.description.trim().length < 10) {
        errors.description = "Décrivez votre besoin en quelques mots (10 caractères minimum).";
    }
    return errors;
}

/** Message WhatsApp prérempli à partir du formulaire de devis. */
export function buildQuoteMessage(values) {
    return [
            "Bonjour, je souhaite une demande de devis.",
            "",
            `Nom : ${values.name.trim()}`,
            `Téléphone : ${values.phone.trim()}`,
            values.email.trim() ? `E-mail : ${values.email.trim()}` : null,
            `Service : ${values.service}`,
            "",
            `Description : ${values.description.trim()}`,
            values.hasFile ? "\nJe joins une photo dans cette conversation." : null,
        ]
        .filter((line) => line !== null)
        .join("\n");
}