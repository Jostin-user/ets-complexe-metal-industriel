import { siteData } from "../data/siteData";
import { getTrainings } from "../utils/data";
import { whatsappLink } from "../utils/contact";
import usePageMeta from "../utils/usePageMeta";
import PageHero from "../components/PageHero";
import TrainingCard from "../components/TrainingCard";
import Method from "../components/Method";
import Faq from "../components/Faq";
import CtaFinal from "../components/CtaFinal";

const { trainingSummary, trainingPage } = siteData;

export default function Formation() {
  usePageMeta(
    "Formation professionnelle",
    "Formations techniques et pratiques à Bafoussam pour apprendre un métier ou se perfectionner."
  );

  const trainings = getTrainings();
  const message = "Bonjour, je souhaite des informations sur vos formations.";

  return (
    <>
      <PageHero
        title="Formation professionnelle"
        text="Apprenez un métier technique par la pratique, avec un encadrement professionnel."
        image={trainingSummary.image}
        imageAlt={trainingSummary.imageAlt}
        primary={{ label: "Demander des informations", to: "/contact?service=formation" }}
        secondary={{ label: "WhatsApp", href: whatsappLink(message) }}
      />

      <section className="section bg-white">
        <div className="container-site grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2>Une formation tournée vers la pratique</h2>
          <div className="space-y-4 text-[17px] text-slate-700">
            {trainingPage.intro.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {trainings.length > 0 && (
        <section className="section bg-clair">
          <div className="container-site">
            <h2 className="max-w-2xl">Nos formations</h2>
            <div className="mt-10 grid items-start gap-4 md:grid-cols-2 md:gap-6">
              {trainings.map((training) => (
                <TrainingCard key={training.slug} training={training} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section ${trainings.length > 0 ? "bg-white" : "bg-clair"}`}>
        <div className="container-site">
          <h2 className="max-w-2xl">Pourquoi choisir nos formations ?</h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPage.why.map((item) => (
              <div key={item.title} className="border-t-2 border-marine pt-5">
                <h3>{item.title}</h3>
                <p className="mt-3 text-[16px] text-acier">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Method title={trainingPage.stepsTitle} intro="" steps={trainingPage.steps} />

      <section className="section bg-clair">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2>À qui s'adressent ces formations ?</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {trainingPage.audience.map((item) => (
              <li key={item} className="flex gap-3 border border-slate-200 bg-white p-4 text-[17px] font-medium text-marine sm:p-5">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={trainingPage.faq} />

      <CtaFinal
        title="Vous souhaitez développer une compétence technique ?"
        primaryLabel="Demander des informations"
        primaryTo="/contact?service=formation"
        whatsappMessage={message}
      />
    </>
  );
}
