import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileBar from "./MobileBar";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-nuit"
      >
        Aller au contenu
      </a>
      <ScrollToTop />
      <Header />
      {/* pb-14 : évite que la barre mobile masque le bas de la page */}
      <main id="contenu" className="pb-14 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <div className="h-14 lg:hidden" aria-hidden="true" />
      <MobileBar />
    </>
  );
}
