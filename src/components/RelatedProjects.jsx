import { Link } from "react-router-dom";
import { getProjects } from "../utils/data";

/** Réalisations liées à un service ; rien n'est affiché s'il n'y en a pas. */
export function getRelatedProjects(serviceSlug) {
  return getProjects().filter((p) => p.serviceSlug === serviceSlug);
}

export default function RelatedProjects({ serviceSlug }) {
  const projects = getRelatedProjects(serviceSlug);
  if (projects.length === 0) return null;

  return (
    <section className="section bg-clair">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2>Réalisations associées</h2>
          <Link to="/realisations" className="btn-outline self-start md:self-auto">
            Voir toutes les réalisations
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} to={`/realisations#${project.slug}`} className="group block">
              <div className="bevel relative overflow-hidden bg-nuit">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.placeholder && (
                  <span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-xs font-semibold text-marine">
                    Exemple fictif
                  </span>
                )}
              </div>
              <h3 className="mt-4 transition-colors group-hover:text-accent-dark md:mt-5">{project.title}</h3>
              <p className="mt-2 text-[15px] text-acier">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
