import Image from "next/image";
import FooterYear from "@/components/FooterYear";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL, GBP_URL, YOUTUBE_URL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/assets/logo.png" alt="StartMonitor®" width={140} height={52} />
            <p>
              Servicio técnico especializado en diagnóstico, soporte y reparación de monitores en
              Madrid. También ordenadores y portátiles. Recogida y entrega en toda la Península.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="/#problemas">Problemas frecuentes</a>
              </li>
              <li>
                <a href="/#como-funciona">Cómo funciona</a>
              </li>
              <li>
                <a href="/#recogida">Recogida a domicilio</a>
              </li>
              <li>
                <a href="/#confianza">Marcas</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/#faq">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="tel:+34910053674">910 05 36 74</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="/#contacto">Formulario de contacto</a>
              </li>
              <li>
                <a href="/#cita">Reservar cita</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Encuéntranos</h4>
            <ul>
              <li>
                <a href={GBP_URL} target="_blank" rel="noopener noreferrer">
                  Google Business
                </a>
              </li>
              <li>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                  Canal de YouTube
                </a>
              </li>
              <li>
                <a href="/#mapa">C. Joaquín María López, 26, Madrid</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <FooterYear /> StartMonitor®. Todos los derechos reservados.
          </span>
          <div className="footer-social">
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Business">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 2 2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6L12 2Z" />
              </svg>
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
