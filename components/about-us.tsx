import Image from "next/image"
import { MapPin, Calendar, ArrowRight, ChefHat, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

function TimelineDot({ year }: { year: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
        <Calendar className="w-6 h-6 text-accent-foreground" />
      </div>
      <span className="text-sm font-bold text-accent">{year}</span>
    </div>
  )
}

export function AboutUs() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Nuestra historia
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Desde nuestros inicios hasta hoy, llevamos frescura y calidad a cada
            rincón del barrio.
          </p>
        </div>
      </section>

      {/* Timeline Connector */}
      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <TimelineDot year="2022" />
            <div className="h-0.5 w-24 md:w-48 bg-border relative">
              <ArrowRight className="w-5 h-5 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background" />
            </div>
            <TimelineDot year="2025" />
          </div>
        </div>
      </div>

      {/* Local 2022 - Image Left, Content Right */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/nosotros/local-2022.jpg"
                  alt="Primer local - 2022"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-md text-sm font-bold">
                  2022
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
                Donde todo comenzo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Nuestro primer local
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En 2022 abrimos las puertas de nuestro primer local con un
                  objetivo claro: ofrecer pescados y mariscos de la mejor
                  calidad a precio justo, con la atencion personalizada que
                  solo un negocio de barrio puede dar.
                </p>
                <p>
                  Arrancamos con un espacio chico pero lleno de ganas, donde
                  cada cliente era tratado como familia. Poco a poco, la
                  frescura de nuestros productos y el trato cercano nos
                  ganaron la confianza del barrio.
                </p>
                <p>
                  Fue ese local el que nos enseno que, haciendo las cosas
                  bien, el crecimiento llega solo.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">Direccion del primer local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border" />
      </div>

      {/* Local 2025 - Content Left, Image Right */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/nosotros/local-2025.jpg"
                  alt="Nuevo local - 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-md text-sm font-bold">
                  2025
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
                Una nueva etapa
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Nuestro nuevo local
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En 2025 dimos el gran paso: un local mas grande, mas
                  moderno y preparado para seguir creciendo junto a nuestros
                  clientes.
                </p>
                <p>
                  El nuevo espacio nos permite ampliar la variedad de
                  productos frescos y congelados, sumar nuestra cocina del
                  dia con platos listos para llevar, y brindar una
                  experiencia de compra mas comoda tanto para clientes
                  particulares como mayoristas.
                </p>
                <p>
                  Cambiamos de local, pero no de escencia: la misma frescura,
                  la misma calidad y el mismo trato cercano que nos
                  caracteriza desde el primer dia.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">Direccion del nuevo local</span>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  <a href="/contacto">
                    Veni a conocernos
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion - Kitchen & Office */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/nosotros/cocina-oficina.jpg"
                  alt="Cocina y oficina del nuevo local"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
                Expansion 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Cocina propia y oficina para proveedores
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  El nuevo local nos permitio sumar dos espacios clave para
                  nuestro crecimiento: una cocina equipada donde elaboramos
                  diariamente nuestros platos listos para llevar, y una
                  oficina dedicada a la atencion de proveedores.
                </p>
                <p>
                  La cocina propia nos da el control total sobre la calidad
                  de cada plato que sale. Desde empanadas de pescado hasta
                  cazuelas de mariscos, todo se prepara en el dia con los
                  productos mas frescos del local.
                </p>
                <p>
                  La oficina, por su parte, nos permite gestionar mejor
                  nuestras relaciones comerciales: atender proveedores,
                  coordinar entregas mayoristas y mantener un servicio mas
                  profesional para quienes confian en nosotros para abastecer
                  sus negocios.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <ChefHat className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Cocina del dia</h4>
                  <p className="text-sm text-muted-foreground">Platos caseros elaborados diariamente</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Atencion mayorista</h4>
                  <p className="text-sm text-muted-foreground">Oficina dedicada a proveedores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
