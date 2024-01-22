import {getCollection} from "astro:content";
import type {CollectionEntry} from "astro:content";

export const test = "test";

export const getSortedProjects = async (): Promise<CollectionEntry<"project">[]> => {
	return (await getCollection("project")).sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
};
