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
Antes de publicar, sustituye la URL de ejemplo por el webhook real de n8n:

  const N8N_WEBHOOK_URL = "https://n8n.kelatos.com/webhook/startmonitor-chat";

Mientras no se configure un webhook real, el widget se muestra pero no
podrá completar conversaciones.


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
