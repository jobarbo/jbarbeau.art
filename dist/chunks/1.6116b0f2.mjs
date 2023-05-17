import { j as createVNode, s as spreadAttributes, F as Fragment } from './astro.e93d40db.mjs';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Description à venir.</p>");

				const frontmatter = {"title":"Courage et Valeur sur Dorchester","slug":"korrigane/1","publishDate":"2023-05-15T12:00:00.000Z","img":"/assets/1_thumb.webp","collection":"exhibition","img_alt":"Thumbnail for the single post of the artwork","description":"Perlin noise algorithm that sort colours according to an array of values.\n","tags":["Generative art","Exhibitions","Physicals"]};
				const file = "/Users/jbarbeau/Sites/homepage/src/content/exhibition/1.md";
				const url = undefined;
				function rawContent() {
					return "\nDescription à venir.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
