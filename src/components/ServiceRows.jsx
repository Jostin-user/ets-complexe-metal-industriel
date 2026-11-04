import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import { ArrowIcon } from "./Icons";

const { services, trainingSummary, settings } = siteData;

/** Les cinq domaines, présentés en lignes alternées (image à gauche puis à droite). */
export default function ServiceRows() {
  const rows = [
    ...services.map((s) => ({ ...s, to: `/services/${s.slug}`, id: s.slug, cta: "Voir le service" })),
    ...(settings.showTrainings
      ? [
          {
            ...trainingSummary,
            id: "formation-professionnelle",
            description: trainingSummary.short,
            cta: "Découvrir les formations",
          },
        ]
      : []),
  ];

  return (
    <section className="section bg-clair">
      <div className="container-site space-y-16 md:space-y-24">
        {rows.map((row, i) => (
          <article
            key={row.id}
            id={row.id}
            className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-16"
          >
            <div className={`bevel overflow-hidden bg-nuit ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={row.image}
                alt={row.imageAlt}
                width="800"
                height="600"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <h2>{row.title}</h2>
              <p className="mt-4 text-[17px] text-slate-700">{row.description}</p>
              <ul className="mt-5 grid gap-2 text-[16px] text-marine sm:grid-cols-2">
                {row.examples.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={row.to} className="btn-outline mt-8">
                {row.cta}
                <ArrowIcon width={18} height={18} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
