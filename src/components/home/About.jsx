import { siteData } from "../../data/siteData";

const { about } = siteData;

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="bevel overflow-hidden bg-nuit">
          <img
            src={about.image}
            alt={about.imageAlt}
            width="800"
            height="600"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="mt-5 text-[17px] text-slate-700">
              {text}
            </p>
          ))}

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {about.values.map((v) => (
              <div key={v.title} className="border-l-2 border-accent pl-4">
                <dt className="font-semibold text-marine">{v.title}</dt>
                <dd className="mt-1 text-[15px] text-acier">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
