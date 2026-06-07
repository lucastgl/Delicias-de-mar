"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Fish, Snowflake, ChefHat, ShoppingBag } from "lucide-react"

interface ProductsProps {
  images: {
    pescados: string
    congelados: string
    cocina: string
    almacen: string
  }
}

const categoryMeta = [
  {
    key: "pescados" as const,
    icon: <Fish className="w-8 h-8 text-white" />,
    href: "/productos/pescados",
    title: "Pescados y Mariscos",
    description:
      "Pescados enteros y filets, mariscos frescos, langostinos, calamar, rabas y combos. Recibimos mercadería del mar y de río todos los días.",
    whatsapp: "Hola, quiero consultar sobre los pescados y mariscos disponibles",
  },
  {
    key: "congelados" as const,
    icon: <Snowflake className="w-8 h-8 text-white" />,
    href: "/productos/congelados",
    title: "Congelados",
    description:
      "Medallones y filetes de merluza y pollo, bocaditos, croquetas, nuggets y verduras congeladas de marcas como Artico, Grangys y Solimelo.",
    whatsapp: "Hola, quiero consultar sobre los productos congelados disponibles",
  },
  {
    key: "cocina" as const,
    icon: <ChefHat className="w-8 h-8 text-white" />,
    href: "/productos/cocina",
    title: "Rotisería",
    description:
      "Sushi y rolls, empanadas de pescado, paella, tartas, ensaladas y platos con guarnición elaborados artesanalmente con pescado fresco.",
    whatsapp: "Hola, quiero consultar sobre los platos de rotisería disponibles",
  },
  {
    key: "almacen" as const,
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    href: "/productos/almacen",
    title: "Almacén",
    description:
      "Salsas orientales, aceites de oliva, arroces especiales, conservas de mar, especias, ingredientes para sushi, vinos y quesos.",
    whatsapp: "Hola, quiero consultar sobre los productos del almacén",
  },
]

export function Products({ images }: ProductsProps) {
  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nuestros Productos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Más de 170 productos entre pescados frescos, mariscos, congelados, rotisería y almacén.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {categoryMeta.map((cat) => (
              <div
                key={cat.key}
                className="group relative rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-colors h-72"
                style={{
                  backgroundImage: `url('${images[cat.key]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gray-900/60" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {cat.icon}
                      <h2 className="text-2xl font-bold text-white drop-shadow">{cat.title}</h2>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{cat.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                      asChild
                    >
                      <Link href={cat.href}>
                        Ver productos
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/40 gap-2"
                      asChild
                    >
                      <a
                        href={`https://wa.me/5491100000000?text=${encodeURIComponent(cat.whatsapp)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Consultar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-muted/50 border border-border rounded-lg p-6 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">No contamos con compra online.</span>
              {" "}Consultá disponibilidad y precios por WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
