"use client"

import { useState } from "react"
import Image from "next/image"

type BenefitItem = {
  title: string
  imageUrl: string
}

const benefits: BenefitItem[] = [
  {
    title: "RESPIRACIÓN",
    imageUrl: "/images/beneficio-icono-2.png",
  },
  {
    title: "CONCIENCIA CORPORAL",
    imageUrl: "/images/beneficio-icono-3.png",
  },
  {
    title: "CONCENTRACIÓN",
    imageUrl: "/images/beneficio-icono-4.png",
  },
  {
    title: "AUTOCONOCIMIENTO",
    imageUrl: "/images/beneficio-icono.png",
  },
]

export default function Benefits() {
  const [flippedItems, setFlippedItems] = useState<boolean[]>(Array(benefits.length).fill(false))

  const toggleFlip = (index: number) => {
    const newFlippedItems = [...flippedItems]
    newFlippedItems[index] = !newFlippedItems[index]
    setFlippedItems(newFlippedItems)
  }

  return (
    <section id="lifestyle" className="py-16 px-4 md:px-12 bg-[#f4f4f4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#333]">Beneficios</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center w-[200px]">
              <div
                className={`w-[15rem] h-[15rem] rounded-full flex items-center justify-center text-white bg-[#248580] shadow-lg cursor-pointer mx-auto p-5 ${
                  flippedItems[index] ? "flip-card-inner" : ""
                }`}
                onClick={() => toggleFlip(index)}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                }}
              >
                {flippedItems[index] ? (
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={benefit.imageUrl || "/placeholder.svg"}
                      alt={benefit.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <h3 className="text-lg font-medium">{benefit.title}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
