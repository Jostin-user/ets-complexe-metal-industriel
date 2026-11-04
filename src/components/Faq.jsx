import { PlusIcon } from "./Icons";

/** FAQ accessible sans JavaScript : chaque question est un élément <details>. */
export default function Faq({ title = "Questions fréquentes", items, tone = "white" }) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`section ${tone === "clair" ? "bg-clair" : "bg-white"}`}>
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2>{title}</h2>
        <div className="border-t border-slate-300">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-slate-300">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-marine marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <PlusIcon
                  width={22}
                  height={22}
                  className="shrink-0 transition-transform duration-150 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 pr-8 text-[16px] text-acier">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
