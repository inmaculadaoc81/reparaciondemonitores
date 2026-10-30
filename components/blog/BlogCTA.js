import { REDSYS_URL, WHATSAPP_URL } from "@/lib/site";

/** Llamada a la acción del blog: WhatsApp, recogida y cita (los mismos destinos que la home). */
export function BlogCTAButtons({ dark = false }) {
  return (
    <div className="blog-cta-actions">
      <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        Escríbenos por WhatsApp
      </a>
      <a className="btn btn-orange" href={REDSYS_URL} target="_blank" rel="noopener noreferrer">
        Solicita la recogida
      </a>
      <a className={`btn blog-cta-wide ${dark ? "btn-outline" : "btn-navy"}`} href="/#cita">
        Reservar una cita
      </a>
    </div>
  );
}

export default function BlogCTA() {
  return (
    <aside className="blog-cta">
      <h2>¿Tu monitor tiene este problema?</h2>
      <p>
        Cuéntanos qué le pasa. Diagnóstico por 20 € y presupuesto sin compromiso: primero sabes qué ocurre, después decides si
        merece la pena repararlo.
      </p>
      <BlogCTAButtons dark />
    </aside>
  );
}
