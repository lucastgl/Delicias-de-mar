import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-seafood.jpg"
          alt="Pescados frescos y congelados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <p className="text-accent text-sm md:text-base font-medium tracking-wider uppercase mb-4">
          Desde 1985 · Calidad Premium
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight text-balance mb-6">
          Del mar directo a tu mesa
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
          Pescados frescos y congelados
        </p>
        <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
          Venta al público y venta mayorista para comercios
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg gap-2"
            asChild
          >
            <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Hacé tu pedido por WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg gap-2 bg-transparent"
            asChild
          >
            <a href="https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20precios%20mayoristas" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5" />
              Consultá precios mayoristas
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
