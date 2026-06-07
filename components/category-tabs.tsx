"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import type { Product, ProductSubcategory } from "@/lib/products"

interface CategoryTabsProps {
  title: string
  subtitle: string
  subcategories: ProductSubcategory[]
  whatsappPrefix?: string
  icon?: ReactNode
  image?: string
}

export function CategoryTabs({
  title,
  subtitle,
  subcategories,
  whatsappPrefix = "Hola, quiero consultar disponibilidad de:",
  icon,
  image,
}: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState(subcategories[0]?.id ?? "")

  const activeSubcategory = subcategories.find((s) => s.id === activeTab)

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className={`relative py-16 md:py-20 ${!image ? "bg-primary" : ""}`}
        style={image ? { backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        {image && <div className="absolute inset-0 bg-gray-900/60" />}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {icon && <div className="flex justify-center mb-4 opacity-80">{icon}</div>}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 z-30 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`whitespace-nowrap px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeTab === sub.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {sub.label}
                <span className="ml-1.5 text-xs opacity-60">({sub.products.length})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {activeSubcategory && (
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold text-foreground mb-6">{activeSubcategory.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {activeSubcategory.products.map((product) => (
                <ProductCard key={product.id} product={product} whatsappPrefix={whatsappPrefix} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-5 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              <span className="font-medium text-foreground">No contamos con compra online.</span>{" "}
              Consultá disponibilidad y precios por WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product, whatsappPrefix }: { product: Product; whatsappPrefix: string }) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors flex flex-col">
      <div className="relative w-full aspect-square bg-muted">
        <Image
          src="/placeholder.svg"
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-foreground leading-snug">{product.name}</h3>
          {product.tag && (
            <span className="shrink-0 bg-accent/10 text-accent text-xs font-medium px-2 py-0.5 rounded">
              {product.tag}
            </span>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground mt-auto"
          asChild
        >
          <a
            href={`https://wa.me/5491100000000?text=${encodeURIComponent(`${whatsappPrefix} ${product.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Consultar
          </a>
        </Button>
      </div>
    </article>
  )
}
