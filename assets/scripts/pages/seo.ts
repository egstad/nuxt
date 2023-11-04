// need to add something else?
// heads to choose from here: https://github.com/harlan-zw/zhead/blob/main/src/metaFlat.ts
// nuxt docs here: https://nuxt.com/docs/api/composables/use-seo-meta

interface SEOData {
  title?: string;
  ogTitle?: string;
  description?: string;
  ogDescription?: string;
  image?: string;
  ogImage?: string;
  twitterCard?: string | null;
}

export default function pageSEO(seoData: SEOData) {
  const defaultData: SEOData = {
    title: seoData.title,
    ogTitle: seoData.title,
    description: seoData.description,
    ogDescription: seoData.description,
    ogImage: seoData.image,
    twitterCard: seoData.image ? "summary_large_image" : null,
  };

  return { ...defaultData };
}
