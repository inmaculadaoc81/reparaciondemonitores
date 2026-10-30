import BlogCard from "@/components/blog/BlogCard";
import { BlogCTAButtons } from "@/components/blog/BlogCTA";
import { listaArticulos } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Se regenera como mucho cada 5 minutos con los artículos publicados desde Agentes V2.
export const revalidate = 300;

const TITULO = "Blog de reparación de monitores en Madrid | StartMonitor®";
const DESCRIPCION =
  "Guías claras sobre averías de monitores: qué comprobar, qué evitar y cuándo merece la pena repararlo. Servicio técnico de monitores en Madrid con recogida en toda la Península.";

export const metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", siteName: "StartMonitor®", title: TITULO, description: DESCRIPCION, url: `${SITE_URL}/blog`, locale: "es_ES" },
};

export default async function BlogPage() {
  const articulos = await listaArticulos();
  const blogSchema = { "@context": "https://schema.org", "@type": "Blog", name: "Blog de StartMonitor", url: `${SITE_URL}/blog`, inLanguage: "es" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="blog-hero">
        <div className="container">
          <span className="kicker">Blog de StartMonitor®</span>
          <h1>Guías para saber si tu monitor roto tiene arreglo</h1>
          <p className="blog-lead">
            Qué hacer (y qué evitar) cuando tu monitor no enciende, se queda en negro, parpadea o le salen líneas, y cuándo merece
            la pena repararlo. Explicado sin tecnicismos.
          </p>
        </div>
      </section>
      <section className="blog-list">
        <div className="container">
          {articulos.length ? (
            <div className="blog-grid">
              {articulos.map((a) => (
                <BlogCard key={a.slug} articulo={a} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h2>Estamos preparando las primeras guías</h2>
              <p>Mientras tanto, cuéntanos qué le pasa a tu monitor y te orientamos antes de que decidas nada.</p>
              <BlogCTAButtons />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
