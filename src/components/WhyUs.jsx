import { useState } from "react";
import { siteData } from "../data/siteData";

const { whyUs } = siteData;

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState(0);

  if (whyUs.length === 0) return null;

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Pourquoi nous choisir ?</h2>
          <p className="mt-3 text-sm text-acier sm:text-base">
            Des raisons simples et concrètes, faciles à vérifier dès la première demande.
          </p>
        </div>

        <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5"
            >
              <div className="mb-3 h-1.5 w-10 rounded-full bg-accent" />
              <h3 className="text-lg sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-acier sm:text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2 sm:hidden">
          {whyUs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left"
                >
                  <span className="text-base font-semibold text-marine">{item.title}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg text-marine shadow-sm">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-3 pb-3 text-sm leading-relaxed text-acier">{item.text}</p>
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
