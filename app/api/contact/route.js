import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Datos no válidos." }, { status: 400 });
  }
  body = body || {};

  const nombre = (body.nombre || "").toString().trim();
  const telefono = (body.telefono || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const equipo = (body.equipo || "").toString().trim();
  const mensaje = (body.mensaje || "").toString().trim();
  const privacidad = !!body.privacidad;

  if (!nombre || !telefono || !email || !equipo || !mensaje) {
    return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
  }
  if (!privacidad) {
    return NextResponse.json({ ok: false, error: "Debes aceptar la política de privacidad." }, { status: 400 });
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "El email no es válido." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE) === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = "Nueva consulta StartMonitor - www.reparaciondemonitores.com.es";

    const html =
      "<h2>Nueva consulta desde la web de StartMonitor®</h2>" +
      "<p><strong>Nombre:</strong> " + escapeHtml(nombre) + "</p>" +
      "<p><strong>Teléfono:</strong> " + escapeHtml(telefono) + "</p>" +
      "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
      "<p><strong>Equipo / producto:</strong> " + escapeHtml(equipo) + "</p>" +
      "<p><strong>Qué ha pasado:</strong><br>" + escapeHtml(mensaje).replace(/\n/g, "<br>") + "</p>";

    const text =
      "Nueva consulta desde la web de StartMonitor\n\n" +
      "Nombre: " + nombre + "\n" +
      "Teléfono: " + telefono + "\n" +
      "Email: " + email + "\n" +
      "Equipo / producto: " + equipo + "\n" +
      "Qué ha pasado: " + mensaje + "\n";

    await transporter.sendMail({
      from: '"StartMonitor Web" <' + process.env.SMTP_USER + ">",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando el email de contacto:", err);
    return NextResponse.json(
      { ok: false, error: "No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos." },
      { status: 500 }
    );
  }
}
