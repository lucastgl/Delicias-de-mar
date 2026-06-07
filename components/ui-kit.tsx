import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, ArrowRight, MapPin, Clock, Phone, Fish, Snowflake, ChefHat } from "lucide-react"

export function UIKit() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">UI Kit</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Sistema de diseño de la pescadería. Colores, tipografía, componentes y patrones visuales.
          </p>
        </div>
      </section>

      {/* Colors */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Paleta de Colores</h2>
          
          <div className="space-y-8">
            {/* Main Colors */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Colores Principales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <ColorSwatch name="Background" variable="--background" className="bg-background border border-border" />
                <ColorSwatch name="Foreground" variable="--foreground" className="bg-foreground" />
                <ColorSwatch name="Card" variable="--card" className="bg-card border border-border" />
                <ColorSwatch name="Primary" variable="--primary" className="bg-primary" />
                <ColorSwatch name="Secondary" variable="--secondary" className="bg-secondary" />
                <ColorSwatch name="Accent" variable="--accent" className="bg-accent" />
              </div>
            </div>

            {/* Grays */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Escala de Grises</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <ColorSwatch name="Negro Profundo" hex="#1a1a1a" className="bg-[#1a1a1a]" />
                <ColorSwatch name="Gris Oscuro" hex="#2a2a2a" className="bg-[#2a2a2a]" />
                <ColorSwatch name="Gris Medio" hex="#4a4a4a" className="bg-[#4a4a4a]" />
                <ColorSwatch name="Gris Claro" hex="#8a8a8a" className="bg-[#8a8a8a]" />
                <ColorSwatch name="Blanco" hex="#f5f5f5" className="bg-[#f5f5f5] border border-border" textDark />
              </div>
            </div>

            {/* Accent */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Color de Acento (Naranja)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch name="Naranja Claro" hex="#f5a623" className="bg-[#f5a623]" textDark />
                <ColorSwatch name="Naranja (Accent)" variable="--accent" className="bg-accent" textDark />
                <ColorSwatch name="Naranja Oscuro" hex="#d4850f" className="bg-[#d4850f]" />
                <ColorSwatch name="Naranja Hover" hex="#e6950a" className="bg-[#e6950a]" textDark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tipografía</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Font Family: Geist Sans</p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading 1 - 48px / Bold</p>
                  <h1 className="text-5xl font-bold text-foreground">Del mar directo a tu mesa</h1>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading 2 - 36px / Bold</p>
                  <h2 className="text-4xl font-bold text-foreground">Productos Frescos</h2>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading 3 - 24px / Semibold</p>
                  <h3 className="text-2xl font-semibold text-foreground">Cocina del Día</h3>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading 4 - 20px / Semibold</p>
                  <h4 className="text-xl font-semibold text-foreground">Venta Minorista</h4>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Body - 16px / Regular</p>
                  <p className="text-base text-foreground">Recibimos mercadería fresca todos los días para garantizar la mejor calidad en tu mesa.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Body Large - 18px / Regular</p>
                  <p className="text-lg text-foreground leading-relaxed">Pescados y mariscos seleccionados directamente del puerto.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Small / Muted - 14px</p>
                  <p className="text-sm text-muted-foreground">No contamos con compra online. Consultá disponibilidad por WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Botones</h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Botones Primarios (Accent)</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  Ver productos
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  Ver productos
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  Ver productos
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Botones Secundarios</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-foreground/20 hover:bg-foreground/30 text-foreground border border-foreground/40 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Consultar
                </Button>
                <Button className="bg-foreground/20 hover:bg-foreground/30 text-foreground border border-foreground/40 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </Button>
                <Button size="sm" className="bg-foreground/20 hover:bg-foreground/30 text-foreground border border-foreground/40 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </Button>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Botón WhatsApp</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Pedir por WhatsApp
                </Button>
                <Button className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Pedir por WhatsApp
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Botones Outline</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
                  Conocer más
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Cards</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Product Card */}
            <Card className="bg-card border-border overflow-hidden group">
              <div className="aspect-[4/3] bg-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Fish className="w-16 h-16 text-muted-foreground/50" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Merluza Fresca</h3>
                <p className="text-muted-foreground text-sm mb-4">Pescado blanco de sabor suave, ideal para cualquier preparación.</p>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full">
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                  <Snowflake className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Congelados Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tecnología de congelado que preserva la frescura y calidad del producto.</p>
              </CardContent>
            </Card>

            {/* Feature Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                  <ChefHat className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Cocina del Día</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Platos caseros elaborados diariamente con pescados frescos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Iconos</h2>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            <IconDisplay icon={MessageCircle} name="WhatsApp" />
            <IconDisplay icon={ArrowRight} name="Arrow" />
            <IconDisplay icon={MapPin} name="Location" />
            <IconDisplay icon={Clock} name="Hours" />
            <IconDisplay icon={Phone} name="Phone" />
            <IconDisplay icon={Fish} name="Fish" />
            <IconDisplay icon={Snowflake} name="Frozen" />
            <IconDisplay icon={ChefHat} name="Kitchen" />
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Elementos de Formulario</h2>
          
          <div className="max-w-md space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Input Default</label>
              <Input placeholder="Escribí tu mensaje..." className="bg-secondary border-border text-foreground" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Input con valor</label>
              <Input defaultValue="Hola, quiero consultar..." className="bg-secondary border-border text-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Espaciado</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-accent" />
              <span className="text-muted-foreground text-sm">4px - gap-1, p-1</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-4 bg-accent" />
              <span className="text-muted-foreground text-sm">8px - gap-2, p-2</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-4 bg-accent" />
              <span className="text-muted-foreground text-sm">16px - gap-4, p-4</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-4 bg-accent" />
              <span className="text-muted-foreground text-sm">24px - gap-6, p-6</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-4 bg-accent" />
              <span className="text-muted-foreground text-sm">32px - gap-8, p-8</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ColorSwatch({ 
  name, 
  variable, 
  hex,
  className, 
  textDark = false 
}: { 
  name: string
  variable?: string
  hex?: string
  className: string
  textDark?: boolean
}) {
  return (
    <div className="space-y-2">
      <div className={`h-20 rounded-lg ${className}`} />
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className={`text-xs ${textDark ? "text-muted-foreground" : "text-muted-foreground"}`}>
        {variable || hex}
      </p>
    </div>
  )
}

function IconDisplay({ icon: Icon, name }: { icon: React.ComponentType<{ className?: string }>, name: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center">
        <Icon className="w-6 h-6 text-foreground" />
      </div>
      <span className="text-xs text-muted-foreground">{name}</span>
    </div>
  )
}
