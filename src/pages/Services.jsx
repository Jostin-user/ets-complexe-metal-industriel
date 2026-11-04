import { siteData } from "../data/siteData";
import usePageMeta from "../utils/usePageMeta";
import PageHero from "../components/PageHero";
import ServiceRows from "../components/ServiceRows";
import Method from "../components/Method";
import Faq from "../components/Faq";
import CtaFinal from "../components/CtaFinal";

export default function Services() {
  usePageMeta(
    "Nos services",
    "Fabrication mécanique, rebobinage, maintenance industrielle, installation et formation professionnelle à Bafoussam."
  );

  return (
    <>
      <PageHero
        title="Nos services"
        text="Fabrication, réparation, installation et formation : découvrez ce que nous pouvons faire pour vous."
        image={siteData.hero.image}
        imageAlt={siteData.hero.imageAlt}
        primary={{ label: "Demander un devis gratuit", to: "/contact" }}
        secondary={{ label: "Nous contacter", to: "/contact" }}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <p className="max-w-3xl border-l-4 border-accent pl-5 text-xl font-semibold leading-snug text-marine sm:text-2xl md:pl-8">
            Comprendre le besoin du client, proposer une solution adaptée et réaliser le travail avec soin.
          </p>
        </div>
      </section>

      <ServiceRows />
      <Method />
      <Faq items={siteData.faq} />
      <CtaFinal />
    </>
  );
}
