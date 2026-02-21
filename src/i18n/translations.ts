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
		},
		footer: {
			designed: "Designed & Developed in Québec City",
			copyright: "© {year} Jonathan Barbeau",
		},
		hero: {
			title: "Jonathan Barbeau",
			subtitle: "Generative Artist based in Québec City",
			cta: "View my Artist Curriculum",
			ctaHref: "/docs/artist-cv",
			profileAlt: "Jonathan Barbeau, generative artist",
			newVariations: "New variations",
			fullscreen: "Fullscreen",
			copyHash: "Copy full hash",
		},
		home: {
			metaTitle: "Jonathan Barbeau | Generative Artist",
			metaDescription:
				"Generative artist based in Québec City. Digital and long-form collections on fx(hash), Foundation, Highlight. Exhibitions, NFTs, and creative code.",
		},
		blog: {
			title: "Blog",
			metaTitle: "Blog | J Barbeau",
			metaDescription:
				"Articles and updates from Jonathan Barbeau — generative art, creative process, exhibitions, and new releases.",
			loadError: "Unable to load blog posts at this time. Please check back later.",
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
	},
	fr: {
		nav: {
			menu: "Menu",
			langSwitch: "English",
		},
		footer: {
			designed: "Conçu et développé à Québec",
			copyright: "© {year} Jonathan Barbeau",
		},
		hero: {
			title: "Jonathan Barbeau",
			subtitle: "Artiste génératif basé à Québec",
			cta: "Voir mon curriculum artiste",
			ctaHref: "/fr/docs/artist-cv",
			profileAlt: "Jonathan Barbeau, artiste génératif",
			newVariations: "Nouvelles variations",
			fullscreen: "Plein écran",
			copyHash: "Copier le hash",
		},
		home: {
			metaTitle: "Jonathan Barbeau | Artiste génératif",
			metaDescription:
				"Artiste génératif basé à Québec. Collections numériques et long format sur fx(hash), Foundation, Highlight. Expositions, NFTs et art par code.",
		},
		blog: {
			title: "Blog",
			metaTitle: "Blog | J Barbeau",
			metaDescription:
				"Articles et actualités de Jonathan Barbeau — art génératif, processus créatif, expositions et nouvelles œuvres.",
			loadError: "Impossible de charger les articles pour le moment. Revenez plus tard.",
		},
		recentWork: {
			sectionTitle: "Récent",
			viewProject: "Voir le projet",
			redeemHere: "Récupérer ici !",
			emailInquiries: "Me contacter",
			description: "Description",
			previous: "Précédent",
			next: "Suivant",
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
	| "recentWork.sectionTitle"
	| "recentWork.viewProject"
	| "recentWork.redeemHere"
	| "recentWork.emailInquiries"
	| "recentWork.description"
	| "recentWork.previous"
	| "recentWork.next";

/** Get a translation string. Supports dot keys (e.g. 'hero.cta') and {param} placeholders. */
export function t(
	locale: Locale,
	key: TranslationKey,
	params?: Record<string, string | number>,
): string {
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
