import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import BlogCTA from "@/components/blog/BlogCTA";
import { aHtml, articulo, fechaLarga, listaArticulos } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Ningún artículo se genera en el build: cada uno se genera la primera vez que se visita y se regenera como mucho
// cada 5 minutos (ISR). Un slug que no existe en la API devuelve 404.
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = await articulo(slug);
  if (!a) return { title: "Artículo no encontrado | StartMonitor®", robots: { index: false, follow: true } };
  const titulo = `${a.title} | StartMonitor®`;
  return {
    title: titulo,
    description: a.description || a.title,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      siteName: "StartMonitor®",
      title: titulo,
      description: a.description || a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      locale: "es_ES",
      ...(a.image ? { images: [a.image] } : {}),
    },
  };
}

export default async function ArticuloPage({ params }) {
  const { slug } = await params;
  const a = await articulo(slug);
  if (!a) notFound();

  const url = `${SITE_URL}/blog/${a.slug}`;
  const relacionados = (await listaArticulos()).filter((x) => x.slug !== a.slug).slice(0, 3);
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: String(a.date).slice(0, 10),
      dateModified: String(a.updated || a.date).slice(0, 10),
      inLanguage: "es",
      mainEntityOfPage: url,
      ...(a.image ? { image: a.image } : {}),
      keywords: Array.isArray(a.tags) ? a.tags.join(", ") : undefined,
      author: { "@type": "Organization", name: "StartMonitor", url: SITE_URL },
      publisher: { "@type": "Organization", name: "StartMonitor", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];

  return (
    <article className="post">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }} />
      ))}
      <div className="container post-wrap">
        <nav className="crumbs" aria-label="Migas de pan">
          <Link href="/">Inicio</Link> › <Link href="/blog">Blog</Link> › <span>{a.title}</span>
        </nav>
        <span className="blog-cat">{a.category}</span>
        <h1>{a.title}</h1>
        <p className="post-meta">
          Publicado el {fechaLarga(a.date)}
          {a.readingMinutes ? ` · ${a.readingMinutes} min de lectura` : ""} · StartMonitor®, reparación de monitores en Madrid
        </p>
        {a.image && (
          <figure className="post-figure">
            <img src={a.image} alt={a.imageAlt || a.title} />
            {a.imageCredit && <figcaption>Foto: {a.imageCredit}</figcaption>}
          </figure>
        )}
        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: aHtml(a.body ?? "") }} />
        <BlogCTA />
      </div>
      {relacionados.length > 0 && (
        <div className="container post-related">
          <h2>Sigue leyendo</h2>
          <div className="blog-grid">
            {relacionados.map((r) => (
              <BlogCard key={r.slug} articulo={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
