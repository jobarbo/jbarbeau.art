/**
 * UI translations for EN and FR.
 * Use with: t(locale, 'key') or t(locale, 'key', { param: 'value' })
 */
export type Locale = "en" | "fr";

export const translations = {
	en: {
		nav: {
			menu: "Menu",
			langSwitch: "Français",
			blog: "Blog",
		},
		footer: {
			designed: "Designed & Developed in Québec City",
			copyright: "© {year} Jonathan Barbeau",
		},
		hero: {
			title: "Jonathan Barbeau",
			subtitle: "Algorithmic Artist based in Québec City",
			cta: "View my Artist Curriculum",
			ctaHref: "/docs/artist-cv",
			profileAlt: "Jonathan Barbeau, algorithmic artist",
			newVariations: "Mutate",
			fullscreen: "Fullscreen",
			copyHash: "Copy full hash",
		},
		home: {
			metaTitle: "Jonathan Barbeau | Algorithmic Artist",
			metaDescription: "Algorithmic artist based in Québec City. Digital and long-form collections on fx(hash), Foundation, Highlight. Exhibitions, NFTs, and creative code.",
		},
		blog: {
			title: "Blog",
			metaTitle: "Blog | J Barbeau",
			metaDescription: "Articles and updates from Jonathan Barbeau — algorithmic art, creative process, exhibitions, and new releases.",
			loadError: "Unable to load blog posts at this time. Please check back later.",
			readPost: "Read full post →",
			viewOnSubstack: "View on Substack ↗",
			backToBlog: "← Back to all posts",
			writtenBy: "By Jonathan Barbeau",
		},
		recentWork: {
			sectionTitle: "Recent Work",
			viewProject: "View Project",
			redeemHere: "Redeem here!",
			emailInquiries: "Email me for inquiries",
			description: "Description",
			previous: "Previous",
			next: "Next",
		},
		collectionPreview: {
			metaTitle: "Collection Preview | Jonathan Barbeau",
			metaDescription: "Preview of the artist's collection.",
			headerText: "If you want to generate your own artwork from this system, you can do so here:",
			ctaText: "Generate your own artwork!",
			sectionAria: "Collection preview",
			emptyState: "No images yet. Add images in the admin.",
			lightboxAria: "Image viewer",
			zoomIn: "Zoom in",
			zoomOut: "Zoom out",
			close: "Close",
			imageLabel: "View image {index}",
		},
	},
	fr: {
		nav: {
			menu: "Menu",
			langSwitch: "English",
			blog: "Articles",
		},
		footer: {
			designed: "Conçu et développé à Québec",
			copyright: "© {year} Jonathan Barbeau",
		},
		hero: {
			title: "Jonathan Barbeau",
			subtitle: "Artiste algorithmique basé à Québec",
			cta: "Voir mon curriculum artiste",
			ctaHref: "/fr/docs/artist-cv",
			profileAlt: "Jonathan Barbeau, artiste algorithmique",
			newVariations: "Muter",
			fullscreen: "Plein écran",
			copyHash: "Copier le hash",
		},
		home: {
			metaTitle: "Jonathan Barbeau | Artiste algorithmique",
			metaDescription: "Artiste algorithmique basé à Québec. Collections numériques et long format sur fx(hash), Foundation, Highlight. Expositions, NFTs et art par code.",
		},
		blog: {
			title: "Blog",
			metaTitle: "Blog | J Barbeau",
			metaDescription: "Articles et actualités de Jonathan Barbeau — art algorithmique, processus créatif, expositions et nouvelles œuvres.",
			loadError: "Impossible de charger les articles pour le moment. Revenez plus tard.",
			readPost: "Lire l'article →",
			viewOnSubstack: "Voir sur Substack ↗",
			backToBlog: "← Tous les articles",
			writtenBy: "Par Jonathan Barbeau",
		},
		recentWork: {
			sectionTitle: "Oeuvres récentes",
			viewProject: "Voir le projet",
			redeemHere: "Récupérer ici !",
			emailInquiries: "Me contacter",
			description: "Description",
			previous: "Précédent",
			next: "Suivant",
		},
		collectionPreview: {
			metaTitle: "Aperçu de la collection | Jonathan Barbeau",
			metaDescription: "Aperçu de la collection de l'artiste.",
			headerText: "Si vous souhaitez générer vos propres œuvres à partir de ce système, vous pouvez le faire ici :",
			ctaText: "Générez vos propres œuvres !",
			sectionAria: "Aperçu de la collection",
			emptyState: "Aucune image pour le moment. Ajoutez des images dans l’admin.",
			lightboxAria: "Visionneuse d’images",
			zoomIn: "Agrandir",
			zoomOut: "Rétrécir",
			close: "Fermer",
			imageLabel: "Voir l’image {index}",
		},
	},
} as const;

export type TranslationKey =
	| "nav.menu"
	| "nav.langSwitch"
	| "footer.designed"
	| "footer.copyright"
	| "hero.title"
	| "hero.subtitle"
	| "hero.cta"
	| "hero.ctaHref"
	| "hero.profileAlt"
	| "hero.newVariations"
	| "hero.fullscreen"
	| "hero.copyHash"
	| "home.metaTitle"
	| "home.metaDescription"
	| "blog.title"
	| "blog.metaTitle"
	| "blog.metaDescription"
	| "blog.loadError"
	| "blog.readPost"
	| "blog.viewOnSubstack"
	| "blog.backToBlog"
	| "blog.writtenBy"
	| "recentWork.sectionTitle"
	| "recentWork.viewProject"
	| "recentWork.redeemHere"
	| "recentWork.emailInquiries"
	| "recentWork.description"
	| "recentWork.previous"
	| "recentWork.next"
	| "collectionPreview.metaTitle"
	| "collectionPreview.metaDescription"
	| "collectionPreview.headerText"
	| "collectionPreview.ctaText"
	| "collectionPreview.sectionAria"
	| "collectionPreview.emptyState"
	| "collectionPreview.lightboxAria"
	| "collectionPreview.zoomIn"
	| "collectionPreview.zoomOut"
	| "collectionPreview.close"
	| "collectionPreview.imageLabel";

/** Get a translation string. Supports dot keys (e.g. 'hero.cta') and {param} placeholders. */
export function t(locale: Locale, key: TranslationKey, params?: Record<string, string | number>): string {
	const keys = key.split(".");
	let value: unknown = translations[locale];
	for (const k of keys) {
		value = (value as Record<string, unknown>)?.[k];
	}
	let str = typeof value === "string" ? value : "";
	if (params) {
		for (const [k, v] of Object.entries(params)) {
			str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
		}
	}
	return str;
}

/** Detect locale from pathname: /fr/... => 'fr', else 'en'. */
export function getLocaleFromPath(pathname: string): Locale {
	return pathname.startsWith("/fr") ? "fr" : "en";
}
