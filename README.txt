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
Google Business: https://maps.app.goo.gl/cU8SMAcCuB2fzHSK6
Mapa embebido:   iframe oficial de Google Maps proporcionado, sin modificar.


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
