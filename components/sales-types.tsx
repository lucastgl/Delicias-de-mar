"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Building2 } from "lucide-react"

const salesTypes = [
  {
    icon: Users,
    title: "Venta Minorista",
    description:
      "Productos frescos y congelados para tu hogar. Atención personalizada y asesoramiento en preparación.",
    highlight: "Para el hogar",
    image: "/images/venta-minorista.jpg",
  },
  {
    icon: Building2,
    title: "Venta Mayorista",
    description:
      "Abastecemos restaurantes, hoteles y comercios. Precios competitivos y entrega programada.",
    highlight: "Para comercios",
    image: "/images/venta-mayorista.jpg",
  },
]

export function SalesTypes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background images - one per card, controlled by hover */}
      {salesTypes.map((type, i) => (
        <div
          key={type.title}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: hoveredIndex === i ? 1 : 0 }}
        >
          <Image
            src={type.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      ))}

      {/* Default background - local 2025 photo */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hoveredIndex === null ? 1 : 0 }}
      >
        <Image
          src="/images/nosotros/local-2025.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {salesTypes.map((type, i) => (
            <div
              key={type.title}
              className="group relative rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:bg-card/90 cursor-default"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <type.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {type.highlight}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
