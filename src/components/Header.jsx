import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteData } from "../data/siteData";
import { getProjects } from "../utils/data";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";

const { settings, services } = siteData;

const navItems = [
  { to: "/", label: "Accueil", end: true },
  { to: "/services", label: "Services" },
  ...(getProjects().length > 0 ? [{ to: "/realisations", label: "Réalisations" }] : []),
  ...(settings.showTrainings ? [{ to: "/formation", label: "Formation" }] : []),
  { to: "/contact", label: "Contact" },
];

const desktopLink = ({ isActive }) =>
  `border-b-2 py-1 text-[15px] font-medium transition-colors ${
    isActive
      ? "border-accent text-white"
      : "border-transparent text-slate-300 hover:text-white"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Ferme le menu à chaque changement de page
  useEffect(() => setOpen(false), [pathname]);

  // Empêche le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-marine">
      <div className="container-site flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !min-h-[44px] !px-5 lg:inline-flex">
            Demander un devis gratuit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <CloseIcon width={26} height={26} /> : <MenuIcon width={26} height={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-marine pb-24 lg:hidden"
        >
          <nav className="container-site flex flex-col py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <div key={item.to} className="border-b border-white/10">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `block py-4 text-lg font-semibold ${isActive ? "text-accent" : "text-white"}`
                  }
                >
                  {item.label}
                </NavLink>
                {item.to === "/services" && (
                  <ul className="mb-3 space-y-1 border-l-2 border-white/15 pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="block py-2 text-base text-slate-300 hover:text-white"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary mt-6">
              Demander un devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
