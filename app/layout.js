import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.reparaciondemonitores.com.es";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Reparación de Monitores en Madrid | StartMonitor®",
  description:
    "Tu monitor no funciona y no sabes si merece la pena arreglarlo. Diagnóstico por 20€, presupuesto sin compromiso y garantía de 6 meses. Recogida en toda la Península.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "StartMonitor®",
    title: "Reparación de Monitores en Madrid | StartMonitor®",
    description:
      "Diagnóstico por 20€, presupuesto sin compromiso y garantía de 6 meses. Recogida y entrega en toda la Península.",
    url: SITE_URL,
    images: ["/assets/images/hero.jpg"],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reparación de Monitores en Madrid | StartMonitor®",
    description: "Diagnóstico por 20€, presupuesto sin compromiso y garantía de 6 meses. Recogida en toda la Península.",
    images: ["/assets/images/hero.jpg"],
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export const viewport = {
  themeColor: "#0E2A47",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "StartMonitor®",
  image: `${SITE_URL}/assets/logo.png`,
  url: `${SITE_URL}/`,
  telephone: "+34910053674",
  priceRange: "20€ diagnóstico",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. de Joaquín María López, 26",
    addressLocality: "Madrid",
    postalCode: "28015",
    addressRegion: "Madrid",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.443387,
    longitude: -3.715044,
  },
  areaServed: ["Madrid", "Chamberí", "Moncloa", "Salamanca", "Chamartín", "Tetuán", "Chueca", "Argüelles", "España"],
  sameAs: ["https://maps.app.goo.gl/b66ZC5kMjpw8MrKU7", "https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de reparación",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de monitores" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soporte técnico de ordenadores y portátiles" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tiempo voy a estar sin mi monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de avería y de la disponibilidad de piezas, pero el tiempo anunciado para las reparaciones es de menos de una semana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el diagnóstico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El diagnóstico tiene un coste de 20€. Con ese diagnóstico te damos un presupuesto sin compromiso antes de reparar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Merece la pena reparar mi pantalla o es mejor comprar una nueva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la avería, la antigüedad del equipo y el coste de la pieza. Te lo explicamos con claridad después del diagnóstico para que decidas tú, sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo enviar el equipo sin ir en persona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Ofrecemos recogida y entrega a domicilio en toda la Península, no hace falta que te desplaces.",
      },
    },
    {
      "@type": "Question",
      name: "¿La reparación tiene garantía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos 6 meses de garantía en los servicios y productos, y utilizamos piezas o repuestos originales cuando es necesario sustituir algo.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="visually-hidden">
          Ir al contenido principal
        </a>
        {children}
        <CookieBanner />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N1NLNW7H98" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-N1NLNW7H98');
          `}
        </Script>
      </body>
    </html>
  );
}
