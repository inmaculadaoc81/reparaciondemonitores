StartMonitor® — Web One Page (Next.js)
========================================

App Router de Next.js con una única página, más una Route Handler
para el formulario de contacto. Lista para desplegar en Vercel.

ESTRUCTURA
----------
app/layout.js               Metadatos, SEO, Schema.org, Google Analytics, fuentes (next/font)
app/page.js                 Página única (hero, problemas, diagnóstico, cómo funciona,
                             recogida, marcas, reseñas, YouTube, Cal.com, FAQ, formulario, mapa)
app/globals.css             Estilos
app/api/contact/route.js    Route Handler: recibe el formulario y envía el email por SMTP
components/SiteHeader.js    Cabecera y menú móvil (client component)
components/FaqList.js       Acordeón de preguntas frecuentes (client component)
components/ContactForm.js   Formulario de contacto (client component)
components/N8nChat.js       Widget de chat n8n (client component)
components/FooterYear.js    Año dinámico del footer (client component)
public/assets/logo.png      Logotipo original de StartMonitor®
public/assets/favicon.png   Favicon (isotipo de la marca)
public/assets/images/       Imágenes originales del sitio (hero y logos de marcas)
public/robots.txt           Reglas de rastreo
public/sitemap.xml          Sitemap de una única URL (web One Page)
next.config.mjs             Config de Next.js (cache headers de /assets)
jsconfig.json                Alias de importación "@/..."
package.json                Dependencias: next, react, react-dom, nodemailer


DESARROLLO LOCAL
------------------
  npm install
  npm run dev

Abre http://localhost:3000 — el formulario llama a /app/api/contact/route.js
directamente (no hace falta "vercel dev" ni vincular el proyecto a Vercel
para desarrollar).


VARIABLES DE ENTORNO (configurar en Vercel → Project Settings → Environment Variables,
y en local en un archivo .env.local que NO se sube al repositorio)
----------------------------------------------------------------------------------------
SMTP_HOST      = cp7124.webempresa.eu
SMTP_PORT      = 465
SMTP_SECURE    = true
SMTP_USER      = soporte@kelatos.com
SMTP_PASS      = (la contraseña real del buzón — NUNCA se escribe en el código)
CONTACT_EMAIL  = soporte@kelatos.com

Importante: SMTP_PASS no está en ningún archivo del proyecto. Debe añadirse
únicamente como variable de entorno segura (en Vercel, o en .env.local para
probar en tu máquina), o el formulario no podrá enviar correos.


DESPLIEGUE EN VERCEL
---------------------
1. Sube este proyecto a un repositorio de GitHub (node_modules y .next
   quedan fuera gracias al .gitignore).
2. Importa el repositorio en Vercel — lo detecta automáticamente como
   proyecto Next.js, no hace falta configuración adicional.
3. Añade las variables de entorno indicadas arriba.
4. Despliega. El dominio de producción debe apuntar a
   https://www.reparaciondemonitores.com.es/


CHAT N8N
--------
El widget de chat (@n8n/chat) se carga en components/N8nChat.js.

CORREGIDO en esta revisión:
- Webhook: usaba una URL de ejemplo (n8n.kelatos.com/webhook/startmonitor-chat,
  no resolvía) — sustituida por el webhook real y compartido de toda la
  familia Kelatos:
  https://sswebhookss.affirmatechnology.com/webhook/be1293ae-db62-4ab3-8204-d2ae42505d63/chat
- Idioma: defaultLanguage estaba en "en" con el objeto i18n bajo la clave
  "en", en un sitio en español — corregido a "es" en ambos sitios.
- CSS de posicionamiento: la regla original apuntaba al selector
  .chat-window-wrapper.n8n-chat, que no coincide con las clases reales
  que genera el widget (confirmado en el resto de la familia: son
  .chat-window-toggle y .chat-window dentro de #n8n-chat). Sustituida por
  el patrón #n8n-chat [class*="chat-window-toggle"] / [class*="chat-window"]
  con !important, añadiendo también el borde blanco estándar del botón.
  Antes de este cambio el widget probablemente se mostraba en su posición
  por defecto del CDN, solapado con los botones flotantes de teléfono y
  WhatsApp.


GOOGLE ANALYTICS
-----------------
ID configurado: G-N1NLNW7H98 (cargado en app/layout.js mediante next/script).


DATOS DE LA FICHA / MAPA
--------------------------
Google Business: https://maps.app.goo.gl/b66ZC5kMjpw8MrKU7
(CORREGIDO — el enlace anterior, https://maps.app.goo.gl/cU8SMAcCuB2fzHSK6,
no era el correcto según indicación del cliente. Actualizado en el
const GBP_URL de app/page.js y en el sameAs del schema.org en
app/layout.js.)
Mapa embebido: iframe de Google Maps actualizado al proporcionado por
el cliente (ficha real "StartMonitor - Reparación de Monitores",
place_id 0xd422997a7da3a5f:0x89ce532e0cbaca27), sustituyendo al
anterior que embebía solo la dirección genérica sin el nombre de la
ficha de negocio. Actualizado en MAPS_EMBED_SRC de app/page.js.


CANAL DE YOUTUBE
------------------
https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA


CAL.COM
--------
Calendario embebido directamente en la página (sección "Reserva una cita"),
usando: https://cal.com/kelatos/30min?embed=true&theme=light


REVISIÓN — CHECKLIST FAMILIA KELATOS (esta pasada)
-----------------------------------------------------
Ya estaba bien (sin tocar):
- Google Analytics: coincide con el código proporcionado (G-N1NLNW7H98).
- Schema.org: ya muy completo (ProfessionalService + FAQPage, con
  areaServed, sameAs, hasOfferCatalog, geo).
- Teléfono: +34 910 05 36 74, consistente en botones, caja de
  información y footer, sin discrepancias.
- Botón de teléfono del header ya mostraba solo el número corto
  ("Llamar 910 05 36 74"), sin el bug de texto largo.

Añadido:
- Banner de cookies (components/CookieBanner.js, nuevo): Aceptar /
  Rechazar / Política de privacidad, localStorage, montado en
  app/layout.js.
- Sección "Guía" (id="guia", enlazada en el menú) con contenido propio
  sobre causas habituales de avería y cuándo compensa reparar.
- H1 reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales — antes usaba "¿Merece la pena
  arreglarla?"): "Tu pantalla no enciende. Aquí la diagnosticamos y la
  reparamos." Tamaño aumentado: clamp(38-62px) -> clamp(46-76px).
- Chat n8n: webhook real, idioma corregido a español y CSS de
  posicionamiento reescrito con el selector correcto (ver arriba).

Validado con "npm run build" (Next.js); compila y genera las páginas
estáticas sin errores. Este proyecto no tiene ESLint configurado
(sin eslint.config.*), así que no se ha podido ejecutar lint.

REVISIÓN ADICIONAL (a petición del cliente):
- Quitado el párrafo bajo el H1 ("Antes de gastar un euro te decimos
  qué le pasa exactamente...") y las 4 píldoras de preguntas
  frecuentes ("¿Cuánto me va a costar?", "¿Merece la pena
  repararlo?", "¿Cuánto tiempo estaré sin él?", "¿Es grave o tiene
  arreglo fácil?").
- Eliminado el botón flotante de llamada (.tel-float); solo queda el
  de WhatsApp, que ya tenía su propia posición fija (bottom:22px) y no
  dependía del de teléfono. El botón de teléfono del header y de otras
  secciones de la página no se han tocado, solo el flotante.
- Validado de nuevo con "npm run build": compila sin errores.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "Tu X no Y. Aquí Z." usada en varios repos
  ("Tu pantalla no enciende. Aquí la diagnosticamos y la reparamos.").
  Reescrito en formato imperativo, sin forzar ninguna marca (taller
  multimarca de monitores/TV): "Repara tu monitor o televisor con
  diagnóstico y garantía." (9 palabras).
- BUG REAL — la casilla de política de privacidad existía pero el
  texto no enlazaba a ningún sitio. Añadido el enlace estándar de la
  familia a https://kelatos.com/privacy-policy/ dentro del texto
  existente, resaltado en azul (components/ContactForm.js).
- Añadida franja de aviso de servicio técnico independiente debajo del
  menú (no existía). Aplica aquí porque el sitio repara monitores y
  televisores de múltiples marcas de terceros (Samsung, LG, Dell, HP,
  Apple, Asus, Acer, Alienware, Lenovo, Philips, BenQ, AOC, ViewSonic,
  mostradas en la sección "Marcas"), para dejar clara la no afiliación
  oficial con ninguna de ellas. Verificado antes que .site-header no
  usa display:flex directamente, solo su .container interno.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario en la tarjeta de información.
- Verificado sin bugs: no existe ningún elemento tipo
  hero-chip/hero-tag (ni ninguna otra forma rotada con
  border-radius:999px y texto de etiqueta); no hay ningún texto
  decorativo gigante tipo watermark en este repo; los tres botones CTA
  del hero (WhatsApp, recogida, teléfono) ya tenían icono; schema.org
  ya usaba correctamente el teléfono de la caja de información;
  formulario correctamente conectado a /api/contact (Route Handler de
  Next.js, coincide con la carpeta app/api/contact/).
- Validado con "npm run build": compila sin errores.

REVISIÓN ADICIONAL — BUG REAL DE CONTENIDO (a petición del cliente,
"StartMonitor no se reparan televisores, solo monitores"):
- El sitio mencionaba "televisores"/"TV" en más de una decena de
  sitios (título, meta description, og/twitter, schema.org —incluida
  una Offer completa "Reparación de televisores" que se ha eliminado
  del hasOfferCatalog—, kicker del hero, el H1 recién reescrito en la
  pasada anterior, la fila "Servicio" de la tarjeta de información,
  encabezados de sección, el texto de recogida, la sección de marcas,
  el bloque de YouTube, la sección de guía/SEO, dos preguntas de la
  FAQ —tanto en el schema FAQPage de layout.js como en el acordeón
  visual de FaqList.js—, el placeholder del campo "Equipo/producto"
  del formulario, el mensaje inicial del chat n8n, el texto alt del
  logo de la cabecera y el pie de página. Todo corregido a mencionar
  únicamente "monitores" (y, donde ya se indicaba, "ordenadores y
  portátiles", que sí forma parte del servicio real). H1 actualizado
  a: "Repara tu monitor con diagnóstico y garantía." (7 palabras).
- Validado de nuevo con "npm run build": compila sin errores.

REVISIÓN ADICIONAL — BUG REAL (a petición del cliente, "el botón del
bot se ve muy arriba"):
- Al quitar el botón flotante de llamada (.tel-float) en la pasada
  anterior, no se ajustó el bottom del chat n8n: seguía calculado
  para cuando había DOS botones apilados debajo (WhatsApp + teléfono),
  dejando un hueco vacío de ~80px entre WhatsApp y el chat, que
  parecía "flotar" a media página. Recalculado ahora que solo queda
  WhatsApp: bottom:96px escritorio (antes 162px), 90px móvil (antes
  144px), justo encima de .wa-float. También eliminadas las reglas
  CSS muertas de .tel-float que ya no se usaban.
- Validado de nuevo con "npm run build": compila sin errores.
