import { listaArticulos } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// La home, el blog y cada artículo publicado; se regenera como mucho cada 15 minutos.
export const revalidate = 900;

export default async function sitemap() {
  const articulos = await listaArticulos();
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8, ...(articulos[0] ? { lastModified: articulos[0].updated || articulos[0].date } : {}) },
    ...articulos.map((a) => ({ url: `${SITE_URL}/blog/${a.slug}`, lastModified: a.updated || a.date, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
