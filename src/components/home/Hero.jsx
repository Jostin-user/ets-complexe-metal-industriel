import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { telLink, whatsappLink, defaultWhatsappMessage } from "../../utils/contact";
import { WhatsappIcon } from "../Icons";

const { company, contact, hero, serviceArea } = siteData;

export default function Hero() {
  return (
    <section className="bg-marine">
      <div className="container-site grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <p className="text-base font-medium text-slate-300">
            {company.name} · {company.city}
          </p>
          <h1 className="mt-4 text-white">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">{hero.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
            </Link>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <WhatsappIcon /> WhatsApp
            </a>
          </div>

          <p className="mt-6 text-[15px] text-slate-400">
            Intervention : {serviceArea.join(" · ")} ·{" "}
            <a href={telLink()} className="font-semibold text-white underline-offset-4 hover:underline">
              {contact.phone}
            </a>
          </p>
        </div>

        <div className="animate-fade-up-delay">
          <div className="bevel overflow-hidden bg-nuit">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width="1200"
              height="1000"
              fetchpriority="high"
              className="aspect-[4/3] w-full object-cover lg:aspect-[6/7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
