"use client";

import { useEffect } from "react";

// TODO: sustituir por la URL real del webhook de n8n antes de publicar.
const N8N_WEBHOOK_URL = "https://n8n.kelatos.com/webhook/startmonitor-chat";

export default function N8nChat() {
  useEffect(() => {
    const cssHref = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssHref;
      document.head.appendChild(link);
    }

    let cancelled = false;

    import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js")
      .then((mod) => {
        if (cancelled || !mod?.createChat) return;
        mod.createChat({
          webhookUrl: N8N_WEBHOOK_URL,
          target: "#n8n-chat",
          mode: "window",
          showWelcomeScreen: true,
          defaultLanguage: "en",
          initialMessages: [
            "¡Hola! Soy el asistente de StartMonitor.",
            "Cuéntame qué le pasa a tu monitor o televisor y te oriento.",
          ],
          i18n: {
            en: {
              title: "StartMonitor · Asistente",
              subtitle: "Diagnóstico y presupuesto sin compromiso.",
              footer: "",
              getStarted: "Empezar conversación",
              inputPlaceholder: "Escribe tu consulta...",
            },
          },
        });
      })
      .catch(() => {
        // El widget de chat no es crítico para el resto de la web.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <div id="n8n-chat" />;
}
