import { siteData } from "../data/siteData";
import usePageMeta from "../utils/usePageMeta";
import { telLink, whatsappLink, defaultWhatsappMessage } from "../utils/contact";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "../components/Icons";

const { company, contact, social, settings, serviceArea } = siteData;

const socialLabels = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", tiktok: "TikTok" };

export default function Contact() {
  usePageMeta("Contact et demande de devis", `Contactez ${company.name} à ${company.city} : téléphone, WhatsApp et demande de devis gratuit.`);

  const socialLinks = settings.showSocialLinks ? Object.entries(social).filter(([, url]) => url) : [];

  return (
    <>
      <PageHero
        title="Contactez-nous"
        text="Décrivez votre besoin : nous vous répondons avec une solution et un devis gratuit."
      />

      <section className="section bg-clair">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 !text-2xl sm:!text-3xl">Demande de devis</h2>
            <QuoteForm />
          </div>

          <aside className="order-1 space-y-6 lg:order-2">
            {/* Contact rapide */}
            <div className="bg-marine p-6 text-white sm:p-8">
              <h2 className="!text-2xl text-white">Contact rapide</h2>
              <div className="mt-5 flex flex-col gap-3">
                <a href={telLink()} className="btn-secondary">
                  <PhoneIcon /> Appeler
                </a>
                <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noreferrer" className="btn-primary">
                  <WhatsappIcon /> WhatsApp
                </a>
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="btn-secondary">
                    <MailIcon /> E-mail
                  </a>
                )}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-white p-4 sm:p-8">
              <h2 className="!text-2xl">Nos coordonnées</h2>
              <ul className="mt-5 space-y-3 text-[16px] text-marine">
                <li className="flex gap-3">
                  <PhoneIcon className="mt-1 shrink-0" />
                  <a href={telLink()} className="font-semibold hover:underline">
                    {contact.phone}
                  </a>
                </li>
                {contact.phone2 && (
                  <li className="flex gap-3">
                    <PhoneIcon className="mt-1 shrink-0" />
                    <a href={telLink(contact.phone2)} className="font-semibold hover:underline">
                      {contact.phone2}
                    </a>
                  </li>
                )}
                {contact.email && (
                  <li className="flex gap-3">
                    <MailIcon className="mt-1 shrink-0" />
                    <a href={`mailto:${contact.email}`} className="font-semibold hover:underline">
                      {contact.email}
                    </a>
                  </li>
                )}
                <li className="flex gap-3">
                  <PinIcon className="mt-1 shrink-0" />
                  <span>
                    {contact.address ? `${contact.address}, ` : ""}
                    {company.city}
                    <span className="block text-[15px] text-acier">
                      Intervention : {serviceArea.join(" · ")}
                    </span>
                  </span>
                </li>
              </ul>
              {contact.hours && <p className="mt-4 text-[15px] text-acier">{contact.hours}</p>}
              {socialLinks.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4 text-[15px] font-semibold text-marine">
                  {socialLinks.map(([key, url]) => (
                    <li key={key}>
                      <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
                        {socialLabels[key] ?? key}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
