# jbarbeau.art

Site web personnel de Jonathan Barbeau — artiste génératif de Québec. Construit avec Astro 6, MDX, SCSS et Decap CMS. Déployé sur Netlify.

## Stack

- **[Astro 6](https://astro.build)** — générateur de site statique
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — composants Astro dans le contenu blog
- **[Tailwind CSS v4](https://tailwindcss.com)** + SCSS personnalisé
- **[Decap CMS](https://decapcms.org)** — interface d'édition (git-gateway via Netlify Identity)
- **i18n bilingue** — EN à la racine, FR dans `src/content/blog/fr/`

## Structure

```
src/
├── components/
│   ├── blog/
│   │   ├── BlogTextContent.astro  — conteneur flex pour blocs texte
│   │   ├── Divider.astro          — séparateur de section
│   │   ├── Figure.astro           — image standalone avec lien
│   │   ├── HighlightBox.astro     — boîte de mise en valeur
│   │   ├── ImageGrid.astro        — grille d'images responsive
│   │   ├── SubstackLink.astro     — carte de lien Substack
│   │   └── YouTubeEmbed.astro     — embed YouTube responsive
│   └── ...
├── content/
│   ├── blog/           — posts EN (.mdx)
│   │   └── fr/         — posts FR (.mdx)
│   └── project/        — projets artistiques
├── pages/
│   ├── blog/[slug].astro
│   ├── fr/blog/[slug].astro
│   └── ...
└── styles/
    └── base/           — variables, mixins, typographie SCSS
scripts/
└── import-substack.mjs — import automatisé depuis le flux RSS Substack
public/
└── admin/              — configuration Decap CMS
```

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Serveur de développement sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualisation du build |
| `npm run import:blog` | Importe les nouveaux posts depuis Substack (skip les existants) |
| `npm run import:blog -- --force` | Ré-importe tous les posts (écrase les existants) |
| `npx @astrojs/upgrade` | Met à jour Astro et les intégrations `@astrojs/*` |

## Import Substack

Le script `scripts/import-substack.mjs` récupère le flux RSS de Substack et génère automatiquement des fichiers `.mdx` structurés avec les composants blog :

- `<ImageGrid>` — galeries d'images (détectées depuis les données JSON Substack)
- `<Figure>` — images standalone cliquables
- `<YouTubeEmbed>` — iframes YouTube
- `<SubstackLink>` — cartes de liens embed
- `<BlogTextContent>` — tous les blocs de texte entre les médias

Après chaque import EN, un fichier FR est automatiquement créé dans `src/content/blog/fr/` avec le contenu anglais comme point de départ pour la traduction. Les fichiers FR existants (déjà traduits) ne sont pas écrasés.

## Decap CMS

Accessible sur `/admin`. En développement local, utilise le backend local (`npx decap-server` requis). En production, utilise Netlify Identity (git-gateway).

Les posts créés via le CMS sont en markdown standard sans composants MDX. Les composants peuvent être ajoutés manuellement après coup si nécessaire.
