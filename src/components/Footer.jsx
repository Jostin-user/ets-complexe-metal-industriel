import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import { telLink, whatsappLink } from "../utils/contact";
import Logo from "./Logo";

const { company, contact, services, social, settings } = siteData;

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
};

export default function Footer() {
  const socialLinks = settings.showSocialLinks
    ? Object.entries(social).filter(([, url]) => url)
    : [];

  return (
    <footer className="bg-nuit text-slate-300">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed">{company.description}</p>
        </div>

        <div>
          <h3 className="mb-4 !text-base !text-white">Nos services</h3>
          <ul className="space-y-2 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
            {settings.showTrainings && (
              <li>
                <Link to="/formation" className="hover:text-white">
                  Formation professionnelle
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 !text-base !text-white">Nous joindre</h3>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a href={telLink()} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            {contact.phone2 && (
              <li>
                <a href={telLink(contact.phone2)} className="hover:text-white">
                  {contact.phone2}
                </a>
              </li>
            )}
            <li>
              <a href={whatsappLink()} className="hover:text-white" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.hours && <li>{contact.hours}</li>}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 !text-base !text-white">Où nous trouver</h3>
          <p className="text-[15px]">
            {contact.address || company.city}
            <br />
            {company.region}
          </p>
          {socialLinks.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              {socialLinks.map(([key, url]) => (
                <li key={key}>
                  <a href={url} className="hover:text-white" target="_blank" rel="noreferrer">
                    {socialLabels[key] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-site py-5 text-sm text-slate-400">
          © {new Date().getFullYear()} {company.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
