import { permanentRedirect } from "next/navigation";

// Web de una sola página: cualquier URL antigua (páginas, entradas y
// categorías del WordPress anterior) se redirige de forma permanente a la
// home en vez de dar 404.
export default function LegacyUrlRedirect() {
  permanentRedirect("/");
}
