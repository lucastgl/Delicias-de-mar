"use client"

import { useState } from "react"
import { MapPin, Clock, Phone, MessageCircle, Store, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type CustomerType = "minorista" | "mayorista"

const whatsappMessages = {
  minorista: "Hola, soy cliente minorista y me gustaría hacer un pedido.",
  mayorista: "Hola, soy cliente mayorista y me gustaría consultar sobre precios y entregas.",
}

export function Contact() {
  const [customerType, setCustomerType] = useState<CustomerType>("minorista")

  const whatsappNumber = "1234567890"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessages[customerType])}`

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Contacto
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos listos para atenderte. Elegí tu tipo de cliente y contactanos directamente por WhatsApp.
          </p>
        </div>

        {/* Customer Type Selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-md mx-auto">
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "flex-1 gap-2 h-14 text-base transition-all",
              customerType === "minorista"
                ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground"
                : "hover:border-accent hover:text-accent"
            )}
            onClick={() => setCustomerType("minorista")}
          >
            <Store className="h-5 w-5" />
            Soy cliente minorista
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "flex-1 gap-2 h-14 text-base transition-all",
              customerType === "mayorista"
                ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground"
                : "hover:border-accent hover:text-accent"
            )}
            onClick={() => setCustomerType("mayorista")}
          >
            <Building2 className="h-5 w-5" />
            Soy mayorista
          </Button>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white h-16 px-8 text-lg gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              Contactanos por WhatsApp
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            {customerType === "minorista" 
              ? "Hacé tu pedido y te lo preparamos al momento" 
              : "Consultá precios, stock y entregas para tu comercio"}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+54 11 1234-5678</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Dirección</h3>
              <p className="text-muted-foreground">Av. del Mar 1234, Buenos Aires</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Horarios</h3>
              <p className="text-muted-foreground">Lun a Sáb: 8:00 - 18:00</p>
              <p className="text-muted-foreground">Dom: 8:00 - 13:00</p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889529!2d-58.38375908477032!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb8c1e9e0f%3A0x87f60fc3c9fc0e4!2sObelisco!5e0!3m2!1ses!2sar!4v1640000000000!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Pescadería"
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
