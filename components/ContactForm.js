"use client";

import { useState } from "react";

const initialData = {
  nombre: "",
  telefono: "",
  email: "",
  equipo: "",
  mensaje: "",
  privacidad: false,
  website: "", // honeypot
};

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState({ state: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (data.website) return; // honeypot: bots rellenan este campo oculto

    if (!data.nombre || !data.telefono || !data.email || !data.equipo || !data.mensaje) {
      setStatus({ state: "error", message: "Por favor, completa todos los campos obligatorios." });
      return;
    }
    if (!data.privacidad) {
      setStatus({ state: "error", message: "Debes aceptar la política de privacidad para continuar." });
      return;
    }

    setSubmitting(true);
    setStatus({ state: "loading", message: "Enviando..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus({ state: "ok", message: "Consulta enviada correctamente. Te responderemos lo antes posible." });
        setData(initialData);
      } else {
        setStatus({
          state: "error",
          message: json.error || "No hemos podido enviar tu consulta. Llámanos o escríbenos por WhatsApp.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "No hemos podido enviar tu consulta. Llámanos o escríbenos por WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nombre">Nombre *</label>
          <input type="text" id="nombre" name="nombre" value={data.nombre} onChange={handleChange} required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="telefono">Teléfono *</label>
          <input type="tel" id="telefono" name="telefono" value={data.telefono} onChange={handleChange} required autoComplete="tel" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="equipo">Equipo / producto *</label>
          <input
            type="text"
            id="equipo"
            name="equipo"
            value={data.equipo}
            onChange={handleChange}
            placeholder='Ej: monitor Samsung 27", TV LG 43"...'
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="mensaje">¿Qué ha pasado? *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={data.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos qué hace o qué ha dejado de hacer..."
          required
        />
      </div>

      <input
        type="text"
        name="website"
        value={data.website}
        onChange={handleChange}
        className="visually-hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="field-check">
        <input type="checkbox" id="privacidad" name="privacidad" checked={data.privacidad} onChange={handleChange} required />
        <label htmlFor="privacidad">
          He leído y acepto la{" "}
          <a className="privacy-link" href="https://kelatos.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            política de privacidad
          </a>
          . Mis datos se usarán únicamente para responder a esta consulta. *
        </label>
      </div>

      <button type="submit" className="btn btn-orange btn-block" disabled={submitting}>
        Enviar consulta
      </button>
      <p id="form-status" role="status" aria-live="polite" data-state={status.state || undefined}>
        {status.message}
      </p>
    </form>
  );
}
