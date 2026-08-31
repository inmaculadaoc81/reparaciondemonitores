"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Cuánto tiempo voy a estar sin mi monitor?",
    a: "Depende del tipo de avería y de la disponibilidad de piezas. El tiempo anunciado para las reparaciones es de menos de una semana.",
  },
  {
    q: "¿Cuánto cuesta el diagnóstico?",
    a: "El diagnóstico tiene un coste de 20€. Con él te damos un presupuesto sin compromiso antes de reparar nada.",
  },
  {
    q: "¿Merece la pena reparar mi pantalla o es mejor comprar una nueva?",
    a: "Depende de la avería, la antigüedad del equipo y el coste de la pieza. Te lo explicamos con claridad después del diagnóstico, para que decidas tú con la información delante.",
  },
  {
    q: "¿Puedo enviar el equipo sin ir en persona?",
    a: "Sí. Ofrecemos recogida y entrega a domicilio en toda la Península, no hace falta que te desplaces.",
  },
  {
    q: "¿Tengo que saber exactamente qué modelo o avería tengo?",
    a: "No. Basta con que nos cuentes lo que ves o lo que ha dejado de funcionar. El diagnóstico se encarga del resto.",
  },
  {
    q: "¿Qué hago si mi equipo se ha mojado?",
    a: "No lo enciendas para comprobar si funciona. Desenchúfalo y cuéntanoslo cuanto antes: cuanto antes lo revisemos, más opciones de recuperarlo.",
  },
  {
    q: "¿La reparación tiene garantía?",
    a: "Sí, ofrecemos 6 meses de garantía en los servicios y productos, y utilizamos piezas o repuestos originales cuando hace falta sustituir algo.",
  },
  {
    q: "¿Trabajáis con mi marca de monitor?",
    a: "Atendemos Acer, Alienware, Apple iMac, Asus, Dell, HP, LG, Samsung, Lenovo, Gigabyte, Philips, Hannspree, Hama, AOC, BenQ, Duronic, Eizo, Iiyama, Kimex, MSI, Nilox, ViewSonic y otras marcas.",
  },
];

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="plus" />
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
