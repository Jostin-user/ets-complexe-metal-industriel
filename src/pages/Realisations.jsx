import { useState } from "react";
import { siteData } from "../data/siteData";
import { getProjects } from "../utils/data";
import usePageMeta from "../utils/usePageMeta";
import PageHero from "../components/PageHero";
import CtaFinal from "../components/CtaFinal";

const ALL = "Toutes";

function Block({ title, mobileTitle, children }) {
  return (
    <div className="border border-slate-200 border-l-4 border-l-accent bg-clair p-3 md:border-x-0 md:border-b-0 md:border-l-0 md:border-t-2 md:border-t-marine md:bg-transparent md:p-0 md:pt-4">
      <h3 className="!text-base">
        <span className="md:hidden">{mobileTitle ?? title}</span>
        <span className="hidden md:inline">{title}</span>
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-700 md:text-[16px]">{children}</p>
    </div>
  );
}

function ProjectSheet({ project }) {
  return (
    <article id={project.slug} className="scroll-mt-24">
      <div className="grid items-center gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-marine">
            <span aria-hidden="true" className="h-2 w-2 bg-accent" />
            {project.category}
          </p>
          <h2 className="mt-3 !text-2xl sm:!text-3xl">{project.title}</h2>
          <p className="mt-4 text-[17px] text-slate-700">{project.description}</p>
        </div>

        <div className="bevel relative order-1 overflow-hidden bg-nuit lg:order-2">
          <img
            src={project.image}
            alt={project.imageAlt}
            width="800"
            height="600"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          {project.placeholder && (
            <span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-xs font-semibold text-marine">
              Exemple fictif
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-2 md:mt-8 md:grid-cols-3 md:gap-6">
        {project.need && <Block title="Le besoin" mobileTitle="Besoin">{project.need}</Block>}
        {project.work && <Block title="Le travail réalisé" mobileTitle="Travail réalisé">{project.work}</Block>}
        {project.result && <Block title="Le résultat" mobileTitle="Résultat">{project.result}</Block>}
      </div>

      {project.photos?.length > 0 && (
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.photos.map((photo) => (
            <li key={photo.label}>
              <img
                src={photo.src}
                alt={photo.alt}
                width="800"
                height="600"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-2 text-[15px] font-semibold text-marine">{photo.label}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Realisations() {
  usePageMeta(
    "Nos réalisations",
    "Découvrez des travaux réalisés par ETS Complexe Metal & Industriel : fabrication mécanique, rebobinage, maintenance et installation."
  );

  const projects = getProjects();
  const categories = siteData.projectCategories.filter((c) => projects.some((p) => p.category === c));
  const [active, setActive] = useState(ALL);
  const shown = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        title="Nos réalisations"
        text="Des travaux concrets, expliqués simplement : le besoin du client, ce que nous avons fait et le résultat."
        image={siteData.hero.image}
        imageAlt={siteData.hero.imageAlt}
      />

      <section className="section bg-white">
        <div className="container-site">
          {categories.length > 1 && (
            <div className="mb-12 flex flex-wrap gap-3" role="group" aria-label="Filtrer par catégorie">
              {[ALL, ...categories].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={active === category}
                  className={`min-h-[44px] border-2 px-4 py-2 text-[15px] font-semibold transition-colors ${
                    active === category
                      ? "border-marine bg-marine text-white"
                      : "border-slate-300 text-marine hover:border-marine"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-16 md:space-y-24">
            {shown.map((project) => (
              <ProjectSheet key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CtaFinal title="Un projet similaire en tête ?" />
    </>
  );
}
