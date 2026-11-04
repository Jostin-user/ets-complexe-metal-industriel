import { Link } from "react-router-dom";

/** Hero des pages intérieures : titre, introduction, deux boutons, image. */
export default function PageHero({ title, text, image, imageAlt, primary, secondary }) {
  return (
    <section className="bg-marine">
      <div
        className={`container-site grid items-center gap-10 py-12 md:py-16 lg:gap-16 lg:py-20 ${
          image ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className="animate-fade-up">
          <h1 className="text-white">{title}</h1>
          {text && <p className="mt-5 max-w-xl text-lg text-slate-300">{text}</p>}
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <Link to={primary.to} className="btn-primary">
                  {primary.label}
                </Link>
              )}
              {secondary &&
                (secondary.href ? (
                  <a href={secondary.href} target="_blank" rel="noreferrer" className="btn-secondary">
                    {secondary.label}
                  </a>
                ) : (
                  <Link to={secondary.to} className="btn-secondary">
                    {secondary.label}
                  </Link>
                ))}
            </div>
          )}
        </div>
        {image && (
          <div className="animate-fade-up-delay">
            <div className="bevel overflow-hidden bg-nuit">
              <img
                src={image}
                alt={imageAlt}
                width="1200"
                height="1000"
                fetchpriority="high"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
