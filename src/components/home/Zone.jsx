import { siteData } from "../../data/siteData";
import { telLink, whatsappLink } from "../../utils/contact";
import { MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "../Icons";

const { company, contact, serviceArea } = siteData;

function Row({ icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-marine">{icon}</span>
      <span>{children}</span>
    </li>
  );
}

export default function Zone() {
  return (
    <section className="section bg-clair">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2>Où nous intervenons</h2>
          <p className="mt-4 max-w-md text-acier">
            Nous sommes basés à {company.city} et intervenons dans la région de l'Ouest du Cameroun.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {serviceArea.map((zone) => (
              <li
                key={zone}
                className="bevel-sm flex items-center gap-2 bg-white px-4 py-3 font-semibold text-marine"
              >
                <PinIcon width={18} height={18} className="text-accent-dark" />
                {zone}
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4 text-[16px] text-marine">
          <Row icon={<PhoneIcon width={20} height={20} />}>
            <a href={telLink()} className="font-semibold hover:underline">
              {contact.phone}
            </a>
            {contact.phone2 && (
              <><br /><a href={telLink(contact.phone2)} className="font-semibold hover:underline">
                {contact.phone2}
              </a></>
            )}
          </Row>
          <Row icon={<WhatsappIcon width={20} height={20} />}>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
              Écrire sur WhatsApp
            </a>
          </Row>
          {contact.email && (
            <Row icon={<MailIcon width={20} height={20} />}>
              <a href={`mailto:${contact.email}`} className="font-semibold hover:underline">
                {contact.email}
              </a>
            </Row>
          )}
          {contact.address && <Row icon={<PinIcon width={20} height={20} />}>{contact.address}</Row>}
          {contact.hours && <li className="pl-8 text-acier">{contact.hours}</li>}
        </ul>
      </div>
    </section>
  );
}
