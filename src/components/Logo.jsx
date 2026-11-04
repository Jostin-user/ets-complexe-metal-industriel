import { Link } from "react-router-dom";

export default function Logo({ light = true }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="ETS Complexe Metal & Industriel — Accueil">
      <img
        src="/images/logo-optimized.png"
        alt="Logo ETS Complexe Metal & Industriel"
        width="44"
        height="44"
        className="h-11 w-11 shrink-0 object-contain"
      />
      <span className="leading-tight">
        <span className={`block text-xs font-medium ${light ? "text-slate-300" : "text-acier"}`}>
          ETS
        </span>
        <span className={`block text-lg font-bold ${light ? "text-white" : "text-marine"}`}>
          Complexe Metal &amp; Industriel
        </span>
      </span>
    </Link>
  );
}
