"use client";

import { useEffect, useState } from "react";

const KEY = "kelatos_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // localStorage no disponible (modo privado, etc.) — se omite el banner.
    }
  }, []);

  const setConsent = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignorar errores de escritura
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Utilizamos cookies y tecnologías similares propias y de terceros, de sesión o
        persistentes, para hacer funcionar de manera segura nuestra página web y personalizar
        su contenido. Igualmente, utilizamos cookies para medir y obtener datos de la
        navegación que realizas y para ajustar la publicidad a tus gustos y preferencias.
        Puedes aceptar el uso de cookies a continuación.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn" onClick={() => setConsent("accepted")}>
          Aceptar
        </button>
        <button type="button" className="cookie-btn" onClick={() => setConsent("rejected")}>
          Rechazar
        </button>
        <a
          className="cookie-btn cookie-link"
          href="https://kelatos.com/privacy-policy/"
          target="_blank"
          rel="noopener"
        >
          Política de privacidad
        </a>
      </div>
      <button
        type="button"
        className="cookie-close"
        aria-label="Cerrar"
        onClick={() => setConsent("dismissed")}
      >
        &times;
      </button>
    </div>
  );
}
