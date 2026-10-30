import Link from "next/link";
import { fechaLarga } from "@/lib/blog";

export default function BlogCard({ articulo: a }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${a.slug}`} className="blog-card-link">
        {/* Imagen servida por la API de Kelatos (dominio externo): <img> normal, sin optimizador de Next. */}
        {a.image && <img className="blog-card-img" src={a.image} alt={a.imageAlt || a.title} loading="lazy" />}
        <div className="blog-card-body">
          <span className="blog-cat">{a.category}</span>
          <h2>{a.title}</h2>
          <p>{a.description}</p>
          <span className="blog-card-meta">
            {fechaLarga(a.date)}
            {a.readingMinutes ? ` · ${a.readingMinutes} min` : ""} · Leer →
          </span>
        </div>
      </Link>
    </article>
  );
}
