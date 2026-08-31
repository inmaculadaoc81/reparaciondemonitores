import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import FaqList from "@/components/FaqList";
import ContactForm from "@/components/ContactForm";
import N8nChat from "@/components/N8nChat";
import FooterYear from "@/components/FooterYear";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=+34649970128&text=%C2%A1Hola+StartMonitor%21+%C2%A1Deseo+un+diagn%C3%B3stico+y+presupuesto%21";
const REDSYS_URL = "https://sis.redsys.es/tiendaWeb/item/NDk4OzI%3D";
const GBP_URL = "https://maps.app.goo.gl/b66ZC5kMjpw8MrKU7";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184757.08434851366!2d-3.995881!3d40.5206397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997a7da3a5f%3A0x89ce532e0cbaca27!2sStartMonitor%20-%20Reparaci%C3%B3n%20de%20Monitores!5e1!3m2!1ses-419!2ses!4v1788207581971!5m2!1ses-419!2ses";

const BRANDS = [
  { file: "brand-samsung.jpg", w: 221, name: "Samsung" },
  { file: "brand-lg.jpg", w: 196, name: "LG" },
  { file: "brand-dell.jpg", w: 120, name: "Dell" },
  { file: "brand-hp.jpg", w: 101, name: "HP" },
  { file: "brand-mac.jpg", w: 94, name: "Apple iMac" },
  { file: "brand-asus.jpg", w: 285, name: "Asus" },
  { file: "brand-acer.jpg", w: 165, name: "Acer" },
  { file: "brand-alienware.jpg", w: 242, name: "Alienware" },
  { file: "brand-lenovo.jpg", w: 227, name: "Lenovo" },
  { file: "brand-philips.jpg", w: 195, name: "Philips" },
  { file: "brand-benq.jpg", w: 164, name: "BenQ" },
  { file: "brand-aoc.jpg", w: 146, name: "AOC" },
  { file: "brand-viewsonic.jpg", w: 242, name: "ViewSonic" },
];

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.4-1.42a9.87 9.87 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.31-1.93 1.35-.5.05-1.03.24-3.46-.72-2.93-1.16-4.78-4.16-4.93-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.31.31-.13.61.18.3.8 1.31 1.71 2.12 1.18 1.05 2.17 1.38 2.47 1.53.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.29.15.48.22.55.34.07.13.07.73-.16 1.42Z" />
    </svg>
  );
}

function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="hero" id="inicio">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-main">
                <span className="kicker hero-kicker">Servicio técnico de monitores y televisores en Madrid</span>
                <h1>
                  Repara tu monitor o televisor con diagnóstico y garantía.
                </h1>
                <div className="hero-ctas">
                  <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    <span>
                      WhatsApp · Atención 24 horas 365 días
                      <small>+34 649 97 01 28</small>
                    </span>
                  </a>
                  <a className="btn btn-orange" href={REDSYS_URL} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="18" cy="21" r="1" />
                    </svg>
                    <span>
                      Solicita tu recogida ahora
                      <small>Recogemos tu equipo en toda la Península</small>
                    </span>
                  </a>
                  <a className="btn btn-outline" href="tel:+34910053674">
                    <PhoneIcon />
                    <span>
                      Atención Telefónica 24 horas 365 días
                      <small>+34 910 05 36 74</small>
                    </span>
                  </a>
                </div>
              </div>

              <div className="hero-card-col">
                <aside className="info-card" aria-label="Datos de contacto y ubicación">
                  <span className="info-tag">StartMonitor® · Servicio técnico</span>
                  <h3>Antes de venir, esto te interesa</h3>

                  <div className="info-row">
                    <span className="ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <strong>Dirección</strong>
                      <p>
                        C. de Joaquín María López, 26
                        <br />
                        28015 Madrid (Chamberí)
                      </p>
                    </div>
                  </div>

                  <div className="info-row">
                    <span className="ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </span>
                    <div>
                      <strong>Horario</strong>
                      <p>
                        Lunes a viernes
                        <br />
                        09:30–18:00
                        <br />
                        Sábados, domingos y días festivos estamos cerrados
                      </p>
                    </div>
                  </div>

                  <div className="info-row">
                    <span className="ico">
                      <PhoneIcon size={18} />
                    </span>
                    <div>
                      <strong>Teléfono de información</strong>
                      <p>
                        <a href="tel:+34910053674">+34 910 05 36 74</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-row">
                    <span className="ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M3 8h18M8 4v4M16 4v4" />
                      </svg>
                    </span>
                    <div>
                      <strong>Servicio</strong>
                      <p>Diagnóstico, soporte y reparación de monitores y televisores. También ordenadores y portátiles.</p>
                    </div>
                  </div>

                  <div className="info-row">
                    <span className="ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="11" width="16" height="7" rx="2" />
                        <path d="M6 11V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3M9 18v2M15 18v2" />
                      </svg>
                    </span>
                    <div>
                      <strong>Referencia</strong>
                      <p>
                        Metro: Islas Filipinas (L7) · Canal (L2) · Moncloa (L3/L6)
                        <br />
                        Aparcamiento público: a pocos metros de C. Blasco de Garay, 61
                      </p>
                    </div>
                  </div>

                  <a className="gbp-link" href={GBP_URL} target="_blank" rel="noopener noreferrer">
                    <span>Ver ubicación y reseñas en Google</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEMAS ===================== */}
        <section className="problemas" id="problemas">
          <div className="container">
            <div className="sec-head">
              <span className="kicker">Empecemos por lo que te trae aquí</span>
              <h2>¿Qué le pasa a tu monitor o tu televisor?</h2>
              <p>No hace falta que sepas el nombre técnico de la avería. Cuéntanos lo que ves, nosotros nos encargamos del resto.</p>
            </div>

            <div className="problemas-grid">
              {[
                "No enciende, aunque lo enchufas y lo desenchufas varias veces.",
                "Se ve la luz encendida, pero la pantalla se queda en negro.",
                'Aparece el mensaje de "sin señal" aunque todo está bien conectado.',
                "La imagen parpadea, se corta o se apaga sola a ratos.",
                "Han salido líneas, manchas o puntos que antes no estaban.",
                "La imagen se ve oscura, desenfocada o con manchas de luz.",
                "Se reinicia solo o se apaga sin que hayas tocado nada.",
                "Hace un ruido raro, un zumbido o huele a quemado.",
                "Se ha caído, se ha mojado o ha recibido un golpe.",
              ].map((text, i) => (
                <div className="problema-item" key={text}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PREOCUPACION PRINCIPAL ===================== */}
        <section className="preocupacion" id="preocupacion">
          <div className="container">
            <div className="preocupacion-wrap">
              <div>
                <span className="kicker">Lo que de verdad te preocupa</span>
                <h2>Vale, no funciona. Pero... ¿merece la pena arreglarlo?</h2>
                <p className="lede">
                  Es la pregunta que casi todo el mundo se hace antes de traer un monitor o una tele: ¿esto tiene
                  arreglo fácil o me va a salir más caro que comprar uno nuevo?
                </p>
                <p className="body">
                  No podemos responder a eso sin verlo. Por eso separamos el proceso en dos pasos: primero un
                  diagnóstico real, por 20€, en el que revisamos qué le ocurre exactamente. Después te damos un
                  presupuesto claro y sin compromiso. Si decides que no compensa repararlo, no pasa nada: tú decides
                  con la información delante, no antes.
                </p>
              </div>

              <div className="stat-cards">
                <div className="stat-card">
                  <div className="num">
                    20€<small>diagnóstico</small>
                  </div>
                  <p>Revisamos el equipo y te explicamos qué le pasa, sin sorpresas después.</p>
                </div>
                <div className="stat-card">
                  <div className="num">
                    0€<small>compromiso</small>
                  </div>
                  <p>El presupuesto es sin compromiso: decides tú si seguimos adelante.</p>
                </div>
                <div className="stat-card">
                  <div className="num">
                    6<small>meses</small>
                  </div>
                  <p>Garantía en los servicios y productos que ofrecemos.</p>
                </div>
                <div className="stat-card">
                  <div className="num">
                    &lt;1<small>semana</small>
                  </div>
                  <p>Tiempo anunciado para las reparaciones, según avería y piezas disponibles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ANTES DE TRAERLO ===================== */}
        <section className="antes" id="antes">
          <div className="container">
            <div className="antes-wrap pixel-grid">
              <div>
                <span className="kicker" style={{ color: "var(--orange)" }}>
                  Antes de traerlo
                </span>
                <h2>Esto puedes hacer tú mismo mientras decides qué hacer</h2>
                <p className="sub">
                  No es necesario que hagas nada raro. Solo evita algunas cosas que pueden convertir una avería
                  reparable en una que ya no lo es.
                </p>
              </div>
              <ul className="antes-list">
                {[
                  "Si notas olor a quemado o ves humo, desenchúfalo y no lo vuelvas a encender.",
                  'Si se ha mojado, no lo enciendas "para ver si funciona". Es mejor que lo revisemos antes de intentar nada.',
                  "Anota cuándo empezó el problema y si pasó algo justo antes: una tormenta, un golpe, una mudanza.",
                  "No lo abras ni intentes repararlo tú mismo si no tienes experiencia: puedes agravar la avería.",
                  "Si conservas el cargador, el mando o la caja original, tráelos también: ayudan a hacer un diagnóstico más rápido.",
                ].map((text) => (
                  <li key={text}>
                    <span className="mark">✓</span>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== COMO FUNCIONA ===================== */}
        <section className="como" id="como-funciona">
          <div className="container">
            <div className="sec-head center">
              <span className="kicker">Sin complicaciones</span>
              <h2>Así funciona el servicio técnico de StartMonitor®</h2>
              <p>Tres pasos, sin letra pequeña.</p>
            </div>
            <div className="como-steps">
              <div className="como-step">
                <span className="step-no">01</span>
                <h3>Nos cuentas qué le pasa</h3>
                <p>Por WhatsApp, por teléfono o con el formulario de esta misma página. Cuanto más nos cuentes, mejor te podemos orientar.</p>
              </div>
              <div className="como-step">
                <span className="step-no">02</span>
                <h3>Lo revisamos y diagnosticamos</h3>
                <p>Traes el equipo o lo recogemos nosotros. El diagnóstico tiene un coste de 20€ y nos permite ver exactamente qué ocurre.</p>
              </div>
              <div className="como-step">
                <span className="step-no">03</span>
                <h3>Te damos el presupuesto y decides</h3>
                <p>
                  Presupuesto sin compromiso. Si sigues adelante, reparamos con piezas originales cuando hace falta
                  sustituir algo, y con 6 meses de garantía.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== RECOGIDA ===================== */}
        <section className="recogida" id="recogida">
          <div className="container">
            <div className="recogida-wrap">
              <div>
                <span className="kicker" style={{ color: "var(--orange)" }}>
                  Recogida y entrega
                </span>
                <h2>Tu pantalla está rota. No hace falta que tu semana también lo esté.</h2>
                <p className="lede">Recogemos tu monitor o televisor en toda la Península.</p>
                <p className="body">
                  No hace falta que cargues con la caja, busques transporte o pidas el día libre para acercarte. Lo
                  recogemos en tu domicilio, lo revisamos, y te lo devolvemos cuando esté listo.
                </p>
                <ul className="recogida-steps">
                  <li>
                    <b>1.</b>&nbsp;Solicitas la recogida desde el botón de esta web.
                  </li>
                  <li>
                    <b>2.</b>&nbsp;Recibimos tu equipo y lo diagnosticamos.
                  </li>
                  <li>
                    <b>3.</b>&nbsp;Te llamamos con el presupuesto antes de tocar nada.
                  </li>
                  <li>
                    <b>4.</b>&nbsp;Si sigues adelante, reparamos y te lo devolvemos en tu domicilio.
                  </li>
                </ul>
              </div>
              <div className="recogida-panel">
                <div className="zone">Península</div>
                <div className="zone-label">Recogida y entrega a domicilio disponible en toda España peninsular</div>
                <a className="btn btn-orange btn-block" href={REDSYS_URL} target="_blank" rel="noopener noreferrer">
                  Solicita tu recogida ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONFIANZA / MARCAS ===================== */}
        <section className="confianza" id="confianza">
          <div className="container">
            <div className="sec-head">
              <span className="kicker">Marcas con las que trabajamos</span>
              <h2>Reparamos las marcas de monitores y televisores más usadas en Madrid</h2>
              <p>Da igual la marca que tengas: primero diagnosticamos, después te decimos si tiene arreglo.</p>
            </div>

            <div className="marcas-strip">
              {BRANDS.map((brand) => (
                <div className="marca" key={brand.file}>
                  <img
                    src={`/assets/images/${brand.file}`}
                    alt={`Reparación de monitores ${brand.name}`}
                    loading="lazy"
                    width={brand.w}
                    height={94}
                  />
                </div>
              ))}
            </div>
            <p className="marcas-extra">
              También atendemos Gigabyte, Hannspree, Hama, Duronic, Eizo, Iiyama, Kimex, MSI y Nilox, entre otras marcas.
            </p>

            <div className="confianza-badges">
              <span className="badge">
                <span className="dot" />
                Garantía de 6 meses
              </span>
              <span className="badge">
                <span className="dot" />
                Piezas y repuestos originales
              </span>
              <span className="badge">
                <span className="dot" />
                Diagnóstico por 20€
              </span>
              <span className="badge">
                <span className="dot" />
                Presupuesto sin compromiso
              </span>
              <span className="badge">
                <span className="dot" />
                Recogida en toda la Península
              </span>
            </div>
          </div>
        </section>

        {/* ===================== GOOGLE BUSINESS ===================== */}
        <section className="resenas" id="google-business">
          <div className="container">
            <div className="resenas-wrap">
              <div>
                <span className="kicker">Antes de confiar en nosotros</span>
                <h2>Mira lo que cuentan quienes ya han venido</h2>
                <p>
                  No te pedimos que nos creas sin más. En nuestra ficha de Google puedes leer las reseñas y opiniones
                  reales de otros clientes antes de decidir.
                </p>
              </div>
              <a className="btn btn-navy" href={GBP_URL} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 2 2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6L12 2Z" />
                </svg>
                <span>Ver reseñas en Google</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== YOUTUBE ===================== */}
        <section className="youtube" id="youtube">
          <div className="container">
            <div className="youtube-wrap">
              <div>
                <span className="kicker" style={{ color: "var(--orange)" }}>
                  Cómo trabajamos
                </span>
                <h2>Antes de decirte que sabemos hacerlo, preferimos enseñártelo</h2>
                <p>En nuestro canal de YouTube puedes ver reparaciones, casos reales y cómo trabajamos con monitores y televisores.</p>
              </div>
              <a className="btn btn-outline" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                <span className="play-badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>Ver nuestro canal de YouTube</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== CAL.COM ===================== */}
        <section className="cita" id="cita">
          <div className="container">
            <div className="sec-head center">
              <span className="kicker">¿Prefieres dejarlo agendado?</span>
              <h2>Reserva una cita cuando te venga bien</h2>
              <p>Elige el día y la hora que prefieras. Sin llamadas ni esperas.</p>
            </div>
            <div className="cal-wrap">
              <iframe
                className="cal-embed"
                src="https://cal.com/kelatos/30min?embed=true&theme=light"
                title="Reservar cita con StartMonitor"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        {/* ===================== GUÍA ===================== */}
        <section className="guia" id="guia">
          <div className="container">
            <div className="sec-head">
              <span className="kicker">Guía</span>
              <h2>Por qué falla un monitor o un televisor, y cuándo merece la pena repararlo</h2>
            </div>
            <div className="guia-text">
              <p>
                La mayoría de averías de monitores y televisores tienen un número reducido de
                causas: fuente de alimentación, placa base, panel, retroiluminación o cableado
                interno. Muchas veces el síntoma visible —pantalla en negro, imagen que parpadea,
                &quot;sin señal&quot;— no indica directamente qué componente ha fallado, así que no es
                buena idea dar por hecho la causa antes de abrir el equipo.
              </p>
              <p>
                Por eso separamos el proceso en dos pasos: primero el diagnóstico, con el que
                identificamos la causa real; después el presupuesto, sin compromiso, para que
                decidas con la información delante. En equipos antiguos o con averías graves, el
                presupuesto puede acercarse al precio de un equipo nuevo — en esos casos te lo
                explicamos con claridad para que la decisión sea tuya, no una sorpresa.
              </p>
              <p>
                Trabajamos con las marcas más habituales en Madrid (Samsung, LG, Dell, HP, Apple,
                Asus, Acer, Alienware, Lenovo, Philips, BenQ, AOC, ViewSonic y otras) y también con
                ordenadores y portátiles. Si no sabes si tu caso tiene arreglo, cuéntanos qué le
                pasa y te orientamos antes de que decidas nada.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="sec-head">
              <span className="kicker">Preguntas frecuentes</span>
              <h2>Dudas típicas antes de traer tu equipo</h2>
            </div>
            <FaqList />
          </div>
        </section>

        {/* ===================== FORMULARIO ===================== */}
        <section className="contacto" id="contacto">
          <div className="container">
            <div className="contacto-wrap">
              <div className="contacto-aside">
                <span className="kicker">Cuéntanoslo con tus palabras</span>
                <h2>Cuéntanos qué le pasa a tu pantalla</h2>
                <p>
                  Rellena el formulario con lo que sepas, aunque no sea mucho. Te respondemos para orientarte y, si
                  hace falta, organizar el diagnóstico o la recogida.
                </p>

                <div className="mini-contacts">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <span className="ico">
                      <WhatsAppIcon size={16} />
                    </span>
                    WhatsApp: +34 649 97 01 28
                  </a>
                  <a href="tel:+34910053674">
                    <span className="ico">
                      <PhoneIcon size={16} />
                    </span>
                    Teléfono: +34 910 05 36 74
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* ===================== MAPA ===================== */}
        <section className="mapa" id="mapa">
          <div className="container">
            <div className="mapa-wrap">
              <div className="mapa-frame">
                <iframe
                  src={MAPS_EMBED_SRC}
                  width="800"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ubicación de StartMonitor en Madrid"
                />
              </div>
              <div className="mapa-info">
                <span className="kicker">Dónde estamos</span>
                <h2>Servicio técnico en Chamberí, Madrid</h2>
                <p>
                  C. de Joaquín María López, 26, 28015 Madrid.
                  <br />
                  Metro: Islas Filipinas (L7), Canal (L2) y Moncloa (L3 y L6).
                  <br />
                  Aparcamiento público a pocos metros, en C. de Blasco de Garay, 61.
                  <br />
                  Entre las calles Guzmán el Bueno y Cea Bermúdez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section className="cta-final">
          <div className="container">
            <h2>¿Seguimos? Cuéntanos qué le pasa a tu pantalla.</h2>
            <p>Diagnóstico por 20€, presupuesto sin compromiso y garantía de 6 meses en toda reparación.</p>
            <div className="ctas">
              <a className="btn btn-navy" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
              <a className="btn" style={{ background: "#fff", color: "var(--ink)" }} href="tel:+34910053674">
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/assets/logo.png" alt="StartMonitor®" width={140} height={52} />
              <p>
                Servicio técnico especializado en diagnóstico, soporte y reparación de monitores y televisores en
                Madrid. También ordenadores y portátiles. Recogida y entrega en toda la Península.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navegación</h4>
              <ul>
                <li>
                  <a href="#problemas">Problemas frecuentes</a>
                </li>
                <li>
                  <a href="#como-funciona">Cómo funciona</a>
                </li>
                <li>
                  <a href="#recogida">Recogida a domicilio</a>
                </li>
                <li>
                  <a href="#confianza">Marcas</a>
                </li>
                <li>
                  <a href="#faq">Preguntas frecuentes</a>
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
                  <a href="#contacto">Formulario de contacto</a>
                </li>
                <li>
                  <a href="#cita">Reservar cita</a>
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
                  <a href="#mapa">C. Joaquín María López, 26, Madrid</a>
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

      {/* Botón flotante: WhatsApp */}
      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
        <WhatsAppIcon size={30} />
      </a>

      {/* Chat n8n */}
      <N8nChat />
    </>
  );
}
