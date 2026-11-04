import { useState } from "react";
import { siteData } from "../data/siteData";

const columns = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

/** Étapes numérotées sur fond marine. Par défaut : la méthode générale de l'entreprise. */
export default function Method({
  title = "Notre méthode",
  intro = "Comprendre votre besoin, proposer une solution adaptée et réaliser le travail avec soin.",
  steps = siteData.method,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  if (steps.length === 0) return null;

  const toggleStep = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="section bg-marine">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-white">{title}</h2>
          {intro && <p className="mt-4 text-slate-300">{intro}</p>}
        </div>

        <ol className={`mt-12 hidden gap-10 sm:grid sm:grid-cols-2 lg:gap-8 ${columns[steps.length] ?? "lg:grid-cols-4"}`}>
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/25 pt-5">
              <span className="block text-4xl font-bold text-accent" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mt-3 text-white">{step.title}</h3>
              <p className="mt-2 text-[16px] text-slate-300">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 space-y-3 sm:hidden">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={step.title} className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <button
                  type="button"
                  onClick={() => toggleStep(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-bold text-nuit">
                      {index + 1}
                    </span>
                    <span className="text-base font-semibold text-white">{step.title}</span>
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={`h-5 w-5 text-white transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-slate-300">{step.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
