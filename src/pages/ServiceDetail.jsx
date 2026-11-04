import { useState } from "react";
import usePageMeta from "../utils/usePageMeta";
import { whatsappLink } from "../utils/contact";
import PageHero from "../components/PageHero";
import Faq from "../components/Faq";
import CtaFinal from "../components/CtaFinal";
import RelatedProjects, { getRelatedProjects } from "../components/RelatedProjects";

const processCols = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

function Bullet() {
  return <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />;
}

function BeforeAfterCompare({
  title,
  description,
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
  beforeAlt,
  afterAlt,
}) {
  const [position, setPosition] = useState(50);
  const beforeSrc = beforeImage || afterImage || "/images/service-rebobinage.svg";
  const afterSrc = afterImage || beforeSrc;

  return (
    <section className="section bg-clair">
      <div className="container-site">
        <div className="mb-6 max-w-2xl">
          <h2>{title}</h2>
          {description && <p className="mt-3 text-[17px] text-slate-700">{description}</p>}
        </div>

        <div className="relative overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[320px] sm:h-[420px]">
            <img
              src={afterSrc}
              alt={afterAlt || "Après l'intervention"}
              className="h-full w-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden transition-[clip-path] duration-300 ease-out"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={beforeSrc}
                alt={beforeAlt || "Avant l'intervention"}
                className="h-full w-full object-cover grayscale contrast-75 brightness-90"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.3)]"
              style={{ left: `${position}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-bold text-marine shadow-md">
                ↔
              </span>
            </div>

            <div className="absolute left-4 top-4 z-20 rounded-sm bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-marine">
              {afterLabel}
            </div>
            <div className="absolute right-4 top-4 z-20 rounded-sm bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              {beforeLabel}
            </div>

            <label className="sr-only" htmlFor="before-after-slider">
              Déplacer le curseur pour comparer avant et après
            </label>
            <input
              id="before-after-slider"
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
              aria-label="Comparer avant et après"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Page détaillée d'un service. Les blocs sans contenu dans siteData ne s'affichent pas. */
export default function ServiceDetail({ service }) {
  const page = service.page ?? {};
  const intro = page.intro ?? [service.description];
  const prestations = page.prestations ?? service.examples ?? [];
  const concrete = page.concreteExamples ?? [];
  const process = page.process ?? [];
  const faq = page.faq ?? [];
  const hasRelated = getRelatedProjects(service.slug).length > 0;
  const message = `Bonjour, je souhaite un devis pour : ${service.title}.`;

  usePageMeta(service.title, service.description);

  return (
    <>
      <PageHero
        title={service.title}
        text={page.tagline ?? service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        primary={{ label: "Demander un devis gratuit", to: `/contact?service=${service.slug}` }}
        secondary={{ label: "WhatsApp", href: whatsappLink(message) }}
      />

      {/* Présentation */}
      <section className="section bg-white">
        <div className="container-site grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2>{page.introTitle ?? "Présentation"}</h2>
          <div className="space-y-4 text-[17px] text-slate-700">
            {intro.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Situations concrètes */}
      {page.problems?.length > 0 && (
        <section className="section bg-clair">
          <div className="container-site">
            <h2 className="max-w-2xl">{page.problemsTitle ?? "Votre besoin"}</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {page.problems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border border-slate-200 bg-white p-4 text-[17px] font-medium text-marine sm:p-5"
                >
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.beforeAfter && (
        <BeforeAfterCompare
          title={page.beforeAfter.title ?? "Avant / Après"}
          description={page.beforeAfter.description}
          beforeImage={page.beforeAfter.beforeImage}
          afterImage={page.beforeAfter.afterImage}
          beforeLabel={page.beforeAfter.beforeLabel ?? "Avant"}
          afterLabel={page.beforeAfter.afterLabel ?? "Après"}
          beforeAlt={page.beforeAfter.beforeAlt}
          afterAlt={page.beforeAfter.afterAlt}
        />
      )}

      {/* Prestations + exemples */}
      <section className={`section ${page.problems?.length > 0 ? "bg-white" : "bg-clair"}`}>
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2>Nos prestations</h2>
            <ul className="mt-8 border-t border-slate-300">
              {prestations.map((item) => (
                <li key={item} className="flex gap-3 border-b border-slate-300 py-4 text-[17px] text-marine">
                  <Bullet />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {concrete.length > 0 && (
            <aside className="self-start bg-clair p-4 sm:p-8">
              <h3>{page.examplesTitle ?? "Exemples concrets"}</h3>
              <ul className="mt-4 space-y-3 text-[16px] text-marine">
                {concrete.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Bullet />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* Processus spécifique */}
      {process.length > 0 && (
        <section className="section bg-marine">
          <div className="container-site">
            <h2 className="max-w-2xl text-white">Comment se déroule l'intervention</h2>
            <ol className={`mt-10 grid gap-8 sm:grid-cols-2 lg:gap-6 ${processCols[process.length] ?? "lg:grid-cols-5"}`}>
              {process.map((step, i) => (
                <li key={step} className="border-t border-white/25 pt-4">
                  <span className="block text-3xl font-bold text-accent" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="mt-2 block text-lg font-semibold text-white">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <RelatedProjects serviceSlug={service.slug} />

      <Faq
        title={page.faqTitle ?? "Questions fréquentes"}
        items={faq}
        tone={hasRelated || process.length > 0 ? "white" : "clair"}
      />

      <CtaFinal
        title={page.ctaTitle ?? `Un besoin en ${service.title.toLowerCase()} ?`}
        primaryTo={`/contact?service=${service.slug}`}
        whatsappMessage={message}
        showCall
      />
    </>
  );
}
