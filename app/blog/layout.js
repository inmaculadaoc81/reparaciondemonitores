import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import N8nChat from "@/components/N8nChat";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

// La home monta su cabecera y su pie en app/page.js; el blog reutiliza los mismos componentes aquí.
export default function BlogLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <div className="disclaimer-bar">Somos un servicio técnico independiente. No vemos equipos en garantía del fabricante.</div>
      <main id="main">{children}</main>
      <SiteFooter />
      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
        <WhatsAppIcon size={30} />
      </a>
      <N8nChat />
    </>
  );
}
