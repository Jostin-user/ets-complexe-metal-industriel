import { whatsappLink } from "../utils/contact";
import { PlusIcon, WhatsappIcon } from "./Icons";

export default function TrainingCard({ training }) {
  const message = `Bonjour, je souhaite des informations sur la formation : ${training.title}.`;

  return (
    <article className="flex flex-col border border-slate-200 bg-white">
      <div className="p-4 sm:p-6">
        {training.placeholder && (
          <span className="mb-3 inline-block bg-clair px-2 py-1 text-xs font-semibold text-marine">
            Exemple fictif
          </span>
        )}
        <h3>{training.title}</h3>
        <p className="mt-2 text-[16px] text-acier">{training.description}</p>
        <dl className="mt-5 space-y-2 text-[15px]">
          <div className="flex gap-2">
            <dt className="font-semibold text-marine">Durée :</dt>
            <dd className="text-slate-700">{training.duration}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-marine">Niveau requis :</dt>
            <dd className="text-slate-700">{training.level}</dd>
          </div>
        </dl>
      </div>

      <details className="group border-t border-slate-200">
        <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 px-4 text-[15px] font-semibold text-marine marker:hidden hover:bg-clair sm:px-6 [&::-webkit-details-marker]:hidden">
          En savoir plus
          <PlusIcon width={20} height={20} className="shrink-0 transition-transform duration-150 group-open:rotate-45" />
        </summary>
        <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6">
          <p className="text-[15px] font-semibold text-marine">Au programme</p>
          <ul className="mt-2 space-y-2 text-[15px] text-slate-700">
            {training.content.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className="btn-primary mt-6 w-full">
            <WhatsappIcon /> Demander des informations
          </a>
        </div>
      </details>
    </article>
  );
}
