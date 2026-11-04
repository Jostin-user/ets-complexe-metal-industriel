import { getTestimonials } from "../../utils/data";

export default function Testimonials() {
  const items = getTestimonials();
  if (items.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container-site">
        <h2 className="max-w-2xl">Ils nous ont fait confiance</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-8">
          {items.map((t, i) => (
            <figure key={i} className="border-l-4 border-accent bg-clair p-4 sm:p-8">
              {t.placeholder && (
                <span className="mb-3 inline-block bg-white px-2 py-1 text-xs font-semibold text-marine">
                  Exemple fictif
                </span>
              )}
              <blockquote className="text-lg text-marine">{t.text}</blockquote>
              <figcaption className="mt-4 text-[15px]">
                <span className="font-semibold text-marine">{t.author}</span>
                <span className="text-acier"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
