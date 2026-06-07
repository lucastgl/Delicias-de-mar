import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fish, Waves, ArrowRight, MessageCircle } from "lucide-react"
import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"
import { categoryTree } from "@/lib/products"

export const metadata: Metadata = {
  title: "Pescados y Mariscos | Delicias de Mar",
  description: "Pescados frescos de río y mar, mariscos, filetes y más. Recibimos mercadería fresca todos los días.",
}

export default async function PescadosPage() {
  const images = await getSiteImages()

  const subcategories = [
    {
      id: "frescos",
      icon: <Fish className="w-10 h-10 text-white" />,
      href: "/productos/pescados/frescos",
      title: "Pescados Frescos",
      description: "Pescados enteros, filets, despinados y combos. Recibimos todos los días directamente del puerto.",
      count: categoryTree.pescados.subcategories.find((s) => s.id === "frescos")?.products.length ?? 0,
      whatsapp: "Hola, quiero consultar disponibilidad de pescados frescos",
      image: images[IMAGE_KEYS.SUBCATEGORIA_FRESCOS],
    },
    {
      id: "mariscos",
      icon: <Waves className="w-10 h-10 text-white" />,
      href: "/productos/pescados/mariscos",
      title: "Mariscos",
      description: "Pulpo, rabas, tubo calamar, kanikama y más. Por kilo o por bandeja.",
      count: categoryTree.pescados.subcategories.find((s) => s.id === "mariscos")?.products.length ?? 0,
      whatsapp: "Hola, quiero consultar disponibilidad de mariscos",
      image: images[IMAGE_KEYS.SUBCATEGORIA_MARISCOS],
    },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: `url('${images[IMAGE_KEYS.CATEGORIA_PESCADOS]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Fish className="w-12 h-12 text-white opacity-80" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Pescados y Mariscos
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Recibimos mercadería fresca todos los días para garantizar la mejor calidad en tu mesa.
          </p>
        </div>
      </section>

      {/* Subcategory Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subcategories.map((sub) => (
              <div
                key={sub.id}
                className="relative rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-colors h-72"
                style={{
                  backgroundImage: `url('${sub.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gray-900/60" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {sub.icon}
                      <h2 className="text-2xl font-bold text-white drop-shadow">{sub.title}</h2>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base mb-2">{sub.description}</p>
                    <p className="text-accent text-sm font-medium">{sub.count} productos disponibles</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                      <Link href={sub.href}>
                        Ver productos
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/40 gap-2"
                      asChild
                    >
                      <a
                        href={`https://wa.me/5491100000000?text=${encodeURIComponent(sub.whatsapp)}`}
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
