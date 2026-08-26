"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#problemas", label: "Problemas" },
  { href: "#preocupacion", label: "Diagnóstico" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#recogida", label: "Recogida" },
  { href: "#confianza", label: "Marcas" },
  { href: "#cita", label: "Cita" },
  { href: "#guia", label: "Guía" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#inicio" className="brand" aria-label="StartMonitor - Inicio">
          <Image
            src="/assets/logo.png"
            alt="StartMonitor® - Servicio técnico de monitores y televisores en Madrid"
            width={140}
            height={52}
            priority
          />
        </a>

        <nav className={`main-nav${open ? " nav-open" : ""}`} aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-orange" href="tel:+34910053674">
            <span className="long">Llamar</span> 910 05 36 74
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
