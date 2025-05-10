"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "¿Qué es el Ashtanga Vinyasa?",
    answer: "Ashtanga significa 8 pasos o caminos que conducen al estado del yoga, la unión con uno mismo.",
  },
  {
    question: "¿Qué son las clases Mysore de Ashtanga?",
    answer:
      "Las clases de estilo Mysore son las más recomendadas para empezar a aprender la práctica. Al iniciar aprendes de manera progresiva las posturas de la primer serie. Se va memorizando la secuencia de a poco, de esa forma una vez aprendida entras en una meditación en movimiento donde puedes enfocarte en aspectos como la respiración, conciencia corporal, concentración y autoconocimiento.",
  },
  {
    question: "¿Necesito tener experiencia?",
    answer: "¡No! En el mismo grupo, pueden estar alumnos de todos los niveles, el trabajo es individual.",
  },
  {
    question: "¿Cuánto dura la clase?",
    answer:
      "Las primeras clases en general son breves (máx 1hr) con el tiempo y a medida que tu práctica avance se extenderá en duración, esto va a variar según tu práctica. En general dura en total una hora y media o 2hs dependiendo la persona.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 md:px-12 bg-[#8A9A5B] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-white">
              <button
                className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-[#8A9A5B]/80 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-medium">{item.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4 px-4" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base font-semibold">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
