import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { ArrowIcon } from "../Icons";

const { needs, settings } = siteData;

export default function Needs() {
  // Le lien vers la formation disparaît si les formations sont masquées
  const items = needs.filter((n) => settings.showTrainings || n.to !== "/formation");
  if (items.length === 0) return null;

  return (
    <section className="section bg-clair">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:pt-2">
          <h2>Vous avez besoin de...</h2>
          <p className="mt-4 max-w-md text-acier">
            Choisissez votre situation : nous vous orientons vers le bon service.
          </p>
        </div>

        <ul className="border-t border-slate-300">
          {items.map((need) => (
            <li key={need.to} className="border-b border-slate-300">
              <Link
                to={need.to}
                className="group flex items-center justify-between gap-4 px-1 py-5 transition-colors hover:bg-white sm:px-4 sm:py-6"
              >
                <span>
                  <span className="block text-lg font-semibold text-marine sm:text-xl">
                    {need.label}
                  </span>
                  <span className="mt-0.5 block text-[15px] text-acier">{need.target}</span>
                </span>
                <ArrowIcon
                  width={24}
                  height={24}
                  className="shrink-0 text-marine transition-transform duration-150 group-hover:translate-x-1 group-hover:text-accent-dark"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
