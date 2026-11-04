import { Link } from "react-router-dom";
import { getProjects } from "../../utils/data";

export default function ProjectsSection() {
  const projects = getProjects().slice(0, 3);
  if (projects.length === 0) return null;

  return (
    <section className="section bg-clair">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2>Nos réalisations</h2>
            <p className="mt-4 text-acier">
              Quelques travaux qui montrent concrètement ce que nous savons faire.
            </p>
          </div>
          <Link to="/realisations" className="btn-outline shrink-0 self-end md:self-auto">
            Voir toutes les réalisations
          </Link>
        </div>

        <div
          role="region"
          aria-label="Nos réalisations"
          tabIndex={0}
          className="-mx-0 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/realisations#${project.slug}`}
              className="group block w-[85%] shrink-0 snap-start md:w-auto md:shrink md:snap-none"
            >
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
              <p className="mt-5 text-sm font-medium text-acier">{project.category}</p>
              <h3 className="mt-1 transition-colors group-hover:text-accent-dark">{project.title}</h3>
              <p className="mt-2 text-[15px] text-acier">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
