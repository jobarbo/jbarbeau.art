# Audit SEO — jbarbeau.art

Rapport d’analyse SEO du site (projet Astro + site en ligne).  
*Généré le 17 février 2026.*

---

## Ce qui est déjà bien en place

- **Balises meta de base** : `MainHead.astro` gère `description`, `viewport`, `generator`.
- **Open Graph** : `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (avec dimensions et alt), `og:site_name`, `og:locale`.
- **Twitter Cards** : `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`.
- **URL canonique** : Construite dans `MainHead` (`canonicalURL`) mais **non exposée** en `<link rel="canonical">` (voir correctifs).
- **Structure des titres** : Page d’accueil avec un seul `<h1>` (Jonathan Barbeau), blog avec `<h1>` par article.
- **`astro.config`** : `site: "https://jbarbeau.art"` et `output: "static"` sont corrects pour le SEO.
- **robots.txt** : Présent, `Allow: /`, `Disallow: /admin/`.

---

## Problèmes identifiés et correctifs recommandés

### 1. Pas de sitemap (priorité haute)

- **Constat** : Aucun sitemap servi ; dans `public/robots.txt` la ligne `Sitemap:` est commentée.
- **Impact** : Les moteurs de recherche découvrent moins bien toutes les URLs (blog, docs, etc.).
- **Action** : Ajouter l’intégration officielle `@astrojs/sitemap`, activer la génération du sitemap, puis déclarer l’URL dans `robots.txt`.

### 2. Lien canonique manquant (priorité haute)

- **Constat** : `canonicalURL` est calculée dans `MainHead.astro` mais il n’y a pas de balise `<link rel="canonical" href="...">`.
- **Impact** : Risque de contenu dupliqué ou de mauvaise consolidation des signaux si des URLs alternatives (trailing slash, paramètres) sont indexées.
- **Action** : Ajouter dans `MainHead.astro` :  
  `<link rel="canonical" href={canonicalURL} />`

### 3. Layout ne transmet pas `image` et `type` à MainHead (priorité haute)

- **Constat** : `Layout.astro` accepte `image`, `type`, `logo` en props mais n’envoie que `title` et `description` à `MainHead`. Les pages blog (ex. `[slug].astro`) passent `image` et `type='article'` sans effet.
- **Impact** : Articles de blog partagés sans image OG dédiée et sans `og:type` article.
- **Action** : Dans `Layout.astro`, passer aussi `image`, `type` (et éventuellement `logo`) à `MainHead`.

### 4. Pages CV / Artist CV sans meta SEO (priorité haute)

- **Fichiers** : `src/pages/docs/artist-cv.astro`, `artist-cv-fr.astro`, `cv.astro`, `cv-fr.astro`.
- **Constat** : Pages avec leur propre `<head>` : pas de `meta description`, pas d’Open Graph, pas de Twitter cards, pas de canonical. Titre générique « Curriculum Vitae » pour toutes.
- **Impact** : Mauvaise présentation en recherche et sur les réseaux sociaux ; titre peu distinctif.
- **Action** : Soit réutiliser le `Layout` + `MainHead` avec des props dédiées (title, description, image), soit ajouter dans chaque page les balises meta, OG, Twitter et un canonical pointant vers l’URL réelle. Différencier les titres (ex. « Jonathan Barbeau – Artist CV », « Jonathan Barbeau – CV Artiste »).

### 5. Pas de balises hreflang (priorité moyenne)

- **Constat** : Versions EN/FR des CV (`/docs/artist-cv` vs `/docs/artist-cv-fr`) sans indication de langue alternative.
- **Impact** : Google peut mal associer les variantes linguistiques et afficher la mauvaise version selon la langue de l’utilisateur.
- **Action** : Ajouter dans le `<head>` des pages concernées :  
  `<link rel="alternate" hreflang="en" href="https://jbarbeau.art/docs/artist-cv" />`  
  `<link rel="alternate" hreflang="fr" href="https://jbarbeau.art/docs/artist-cv-fr" />`  
  (et `x-default` vers la version par défaut). Idéalement centraliser ça dans un layout ou composant head partagé.

### 6. Page d’accueil sans meta description personnalisée (priorité moyenne)

- **Constat** : `index.astro` utilise le layout sans passer `title` ni `description`. La description par défaut dans `MainHead` est correcte mais générique.
- **Action** : Passer une `description` (et éventuellement un `title`) plus orientée « artiste génératif, Québec » pour renforcer le positionnement sur ces requêtes.

### 7. Page Blog liste sans description (priorité moyenne)

- **Constat** : `blog.astro` utilise `<Layout title='Blog | J Barbeau'>` sans `description`.
- **Action** : Ajouter une `description` dédiée pour la page liste du blog (ex. « Articles et actualités de Jonathan Barbeau, artiste génératif »).

### 8. Attribut `alt` vide sur l’image du Hero (priorité moyenne)

- **Constat** : Dans `Hero.astro`, l’image de profil a `alt=''`.
- **Impact** : Image décorative OK en `alt=""`, mais si c’est une photo de l’artiste, un alt descriptif améliore accessibilité et contexte pour le SEO.
- **Action** : Mettre un alt pertinent (ex. « Jonathan Barbeau, artiste génératif ») ou conserver `alt=""` uniquement si l’image est purement décorative.

### 9. Viewport (priorité basse)

- **Constat** : `viewport` est `width=device-width` sans `initial-scale=1.0`.
- **Action** : Utiliser `content='width=device-width, initial-scale=1.0'` pour un comportement mobile plus prévisible.

### 10. robots.txt – chemin `local_admin` (priorité basse)

- **Constat** : `Disallow: /local_admin.astro` — en build statique la page servie est généralement `/local_admin/` ou `/local_admin.html`, pas `.astro`.
- **Action** : Remplacer par `Disallow: /local_admin` (ou le chemin réel de la page buildée) pour que le blocage soit effectif si souhaité.

### 11. Données structurées (optionnel, priorité basse)

- **Constat** : Aucun JSON-LD (Person, WebSite, Article pour le blog, etc.).
- **Impact** : Pas de rich results dédiés (snippet auteur, site, articles).
- **Action** : Ajouter au moins un schéma `Person` ou `WebSite` sur la home, et `Article` sur les pages d’articles du blog.

---

## Résumé des actions par priorité

| Priorité | Action |
|----------|--------|
| Haute    | Sitemap (@astrojs/sitemap + robots.txt), lien canonical dans MainHead, transmettre image/type (et optionnellement logo) du Layout vers MainHead, ajouter meta/OG/canonical (et titres distincts) sur les pages CV/Artist CV |
| Moyenne  | hreflang entre artist-cv et artist-cv-fr, description (et titre) personnalisés pour la home et la page blog, alt image Hero si pertinent |
| Basse    | Viewport avec initial-scale, chemin Disallow dans robots.txt, JSON-LD (Person / WebSite / Article) |

---

## Fichiers concernés

- `astro.config.mjs` — sitemap
- `public/robots.txt` — Sitemap + Disallow
- `src/components/MainHead.astro` — canonical, viewport
- `src/layouts/Layout.astro` — passage des props vers MainHead
- `src/pages/index.astro` — title/description optionnels
- `src/pages/blog.astro` — description
- `src/pages/docs/artist-cv.astro`, `artist-cv-fr.astro`, `cv.astro`, `cv-fr.astro` — meta, OG, canonical, titres, hreflang
- `src/components/Hero.astro` — alt de l’image

Une fois les correctifs appliqués, redéployer le site et vérifier (Google Search Console, partage social, test des balises) que les sitemaps et meta sont bien pris en compte.
