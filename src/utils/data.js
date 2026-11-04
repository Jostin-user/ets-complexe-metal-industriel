import { siteData } from "../data/siteData";

/** Retire les éléments fictifs (placeholder: true) quand ils sont désactivés. */
export function visible(list = []) {
  return siteData.settings.showPlaceholderContent
    ? list
    : list.filter((item) => !item.placeholder);
}

/** Projets à afficher : vide si l'option est coupée ou s'il ne reste aucun vrai projet. */
export function getProjects() {
  return siteData.settings.showProjects ? visible(siteData.projects) : [];
}

/** Témoignages à afficher : vide si l'option est coupée (par défaut) ou si tout est fictif et masqué. */
export function getTestimonials() {
  return siteData.settings.showTestimonials ? visible(siteData.testimonials) : [];
}

/** Formations à afficher : les fictives disparaissent avec showPlaceholderContent = false. */
export function getTrainings() {
  return siteData.settings.showTrainings ? visible(siteData.trainings) : [];
}
