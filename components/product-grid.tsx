"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export interface Product {
  name: string
  description: string
  image: string
  tag?: string
}

interface ProductGridProps {
  title: string
  subtitle: string
  products: Product[]
  whatsappPrefix: string
}

export function ProductGrid({
  title,
  subtitle,
  products,
  whatsappPrefix,
}: ProductGridProps) {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5491100000000?text=${encodeURIComponent(`${whatsappPrefix} ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-5 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              <span className="font-medium text-foreground">
                No contamos con compra online.
              </span>{" "}
              Consulta disponibilidad y precios por WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
