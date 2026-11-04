import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { ArrowIcon } from "../Icons";

const { services, trainingSummary, settings } = siteData;

function Examples({ items }) {
  return (
    <ul className="mt-4 space-y-1.5 text-[15px] text-marine">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SmallCard({ title, short, examples, image, imageAlt, to }) {
  return (
    <Link
      to={to}
      className="group flex flex-col border border-slate-200 bg-white transition-colors duration-150 hover:border-marine"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          width="800"
          height="600"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3>{title}</h3>
        <p className="mt-2 text-[15px] text-acier">{short}</p>
        <Examples items={examples} />
        <span className="mt-auto flex w-full items-center justify-end gap-2 pt-6 text-right text-[15px] font-semibold text-marine">
          {to === "/formation" ? "Découvrir les formations" : "Voir le service"}
          <ArrowIcon
            width={18}
            height={18}
            className="transition-transform duration-150 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  const [main, ...others] = services;
  const cards = [
    ...others.map((s) => ({ ...s, to: `/services/${s.slug}` })),
    ...(settings.showTrainings ? [{ ...trainingSummary }] : []),
  ];

  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2>Nos services</h2>
          <p className="mt-4 text-acier">
            De la fabrication sur mesure à la formation, un seul interlocuteur pour vos besoins techniques.
          </p>
        </div>

        {/* Service principal : grande carte horizontale */}
        <article className="mt-10 grid overflow-hidden bg-marine lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src={main.image}
            alt={main.imageAlt}
            width="800"
            height="600"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
          />
          <div className="flex flex-col justify-center p-5 sm:p-10">
            <h3 className="!text-2xl text-white sm:!text-3xl">{main.title}</h3>
            <p className="mt-3 text-slate-300">{main.short}</p>
            <ul className="mt-5 space-y-2 text-slate-200">
              {main.examples.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to={`/services/${main.slug}`} className="btn-primary">
                Voir le service
              </Link>
            </div>
          </div>
        </article>

        {/* Autres domaines */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {cards.map((card) => (
            <SmallCard key={card.to} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
