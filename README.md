# ETS Complexe Metal & Industriel — Site vitrine

Site React + Tailwind (Vite) : accueil, services (4 pages détaillées), réalisations,
formation professionnelle, contact avec demande de devis vers WhatsApp.

## Lancer le site (sur ordinateur)

```bash
npm install
npm run dev        # aperçu local
npm run build      # génère le dossier dist/ à mettre en ligne
```

## État de vérification — à lire

Ce projet a été écrit et testé par morceaux (rendu des pages, menu mobile, formulaire de devis,
filtres, accordéons : tout cela a été exécuté dans un navigateur de test).
**Mais `npm install`, `npm run build` et la compilation de Tailwind n'ont jamais pu être lancés**
(pas d'accès réseau pendant la création), et l'apparence finale n'a pas été vue à l'écran.
Au premier lancement, il peut donc rester de petits réglages visuels ou une erreur de
configuration à corriger. Vérifier sur un vrai téléphone avant toute mise en ligne.

## Où modifier le contenu

Tout se trouve dans **`src/data/siteData.js`** : coordonnées, services, formations, projets,
témoignages, FAQ, textes d'« À propos », réglages d'affichage.
Une valeur vide (`""`) ou une liste vide (`[]`) n'est pas affichée sur le site.

## Avant la mise en ligne

1. **Masquer tout le contenu fictif** : dans `siteData.js`, mettre
   `settings.showPlaceholderContent` à `false`.
   Les projets, formations et témoignages marqués `placeholder: true` disparaissent
   (et la page Réalisations avec eux s'il ne reste aucun vrai projet).
2. **Renseigner** `contact.email`, `contact.address`, `contact.hours` et les réseaux sociaux
   (`social`). Confirmer le numéro de téléphone et de WhatsApp.
3. **Remplacer les images provisoires** (dossier `public/images/`, noms référencés dans
   `siteData.js`) par de vraies photos, en WebP si possible.
4. **Ajouter de vrais projets, formations et témoignages.** Passer `showTestimonials` à `true`
   quand de vrais avis existent.
5. **Relire tous les passages marqués « à confirmer »** dans `siteData.js`
   (rechercher ce texte : environ 25 occurrences). Ce sont des suppositions à valider ou
   à supprimer : exemples de prestations, délais, étapes de fabrication, etc.
6. **Vérifier la zone d'intervention** (`serviceArea`) : ne lister que les zones réellement couvertes.
7. **Remplacer le logo provisoire** dans `src/components/Logo.jsx` et `public/favicon.svg`.

## Guide photo pour l'entreprise

- Format paysage, lumière naturelle si possible, machines et travaux bien visibles.
- Photos avant / pendant / après, machines en fonctionnement quand c'est possible.
- Environnement propre et lisible, photos nettes.
- Envoyer les fichiers originaux, pas des captures d'écran WhatsApp.

## Formulaire de devis

Il n'y a pas de serveur. Après validation, le site prépare un message WhatsApp prérempli que le
visiteur envoie lui-même. Une photo choisie dans le formulaire n'est **pas** transmise
automatiquement : le site le dit au visiteur, qui doit la joindre dans WhatsApp.

## Mise en ligne

Netlify ou Vercel : commande de build `npm run build`, dossier publié `dist`.
Les fichiers `public/_redirects` (Netlify) et `vercel.json` (Vercel) font fonctionner
les adresses directes comme `/services/rebobinage`.

## Non réalisé

- **Analytics** : la section du cahier des charges était coupée à ce point, elle n'a pas été
  implémentée.
- Plan du site (sitemap) et données structurées pour Google : à ajouter une fois le nom de
  domaine connu.

## Structure

```
src/
  data/siteData.js     contenu et réglages
  components/          éléments partagés (en-tête, pied de page, FAQ, méthode…)
  components/home/     sections de la page d'accueil
  pages/               une page par route
  utils/               liens WhatsApp/téléphone, formulaire, filtrage du contenu fictif
public/images/         images provisoires (SVG)
```
