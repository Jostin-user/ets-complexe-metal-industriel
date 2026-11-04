import { useEffect } from "react";
import { siteData } from "../data/siteData";

function setMeta(attribute, key, content) {
  if (!content) return;
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

/** Met à jour les métadonnées lorsque React navigue vers une nouvelle page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const pageTitle = title ? `${title} — ${siteData.company.name}` : siteData.seo.title;
    const pageDescription = description || siteData.seo.description;

    document.title = pageTitle;
    setMeta("name", "description", pageDescription);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDescription);
    setMeta("property", "og:site_name", siteData.company.name);
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", pageDescription);

    if (siteData.seo.siteUrl) {
      const canonicalUrl = new URL(window.location.pathname + window.location.search, siteData.seo.siteUrl).toString();
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
      setMeta("property", "og:url", canonicalUrl);

      if (siteData.seo.socialImage) {
        setMeta("property", "og:image", new URL(siteData.seo.socialImage, siteData.seo.siteUrl).toString());
        setMeta("name", "twitter:image", new URL(siteData.seo.socialImage, siteData.seo.siteUrl).toString());
      }
    }
  }, [title, description]);
}
