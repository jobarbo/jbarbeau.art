import { CollectionEntry, getCollection} from "astro:content";

export const getSortedProjects = async (): Promise<CollectionEntry<"project">[]> => {
  return (await getCollection("project")).sort((a, b) => 
    new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
  );
};