// Blog de StartMonitor. Los artículos NO viven en este repositorio: los crea y aprueba el agente SEO de Kelatos y se leen
// de la API pública de Kelatos (solo lectura, sin claves), igual que el resto de webs de la familia:
//   GET {API}/publico/blog?org=startmonitor          -> lista de artículos publicados
//   GET {API}/publico/blog/<slug>?org=startmonitor   -> un artículo (con su texto en Markdown)
// Las páginas se regeneran como mucho cada 5 minutos (ISR); si la API no responde, se sigue sirviendo la última copia.

import { Marked } from "marked";

const API = (process.env.KELATOS_BLOG_API || "https://db.affirmatechnology.com/kelatos-api/publico/blog").replace(/\/$/, "");
const ORG = process.env.BLOG_ORG || "startmonitor";
export const REVALIDATE_SEGUNDOS = 300;

async function pedir(ruta) {
  const r = await fetch(`${API}${ruta}?org=${encodeURIComponent(ORG)}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: REVALIDATE_SEGUNDOS },
    signal: AbortSignal.timeout(8000),
  });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`La API del blog respondió ${r.status}`);
  return r.json();
}

/** Artículos publicados (más recientes primero). Si la API falla, lista vacía: la portada se muestra igual. */
export async function listaArticulos() {
  try {
    const j = await pedir("");
    return (j?.posts ?? []).filter((p) => p && p.slug && p.title);
  } catch (e) {
    console.error("blog:", e instanceof Error ? e.message : e);
    return [];
  }
}

/** Un artículo, o null si no existe. Lanza si la API no responde (para no cachear un 404 falso). */
export async function articulo(slug) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const j = await pedir(`/${slug}`);
  return j?.post?.body ? j.post : null;
}

// El HTML en bruto del Markdown se descarta: los artículos son solo texto y Markdown.
const marked = new Marked({ gfm: true, breaks: false, renderer: { html: () => "" } });

export function aHtml(md) {
  return marked.parse(md, { async: false })
    .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a rel="noopener" target="_blank" href="$1"')
    .replace(/<h1>/g, "<h2>")
    .replace(/<\/h1>/g, "</h2>");
}

export const fechaLarga = (iso) =>
  new Date(`${String(iso).slice(0, 10)}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
