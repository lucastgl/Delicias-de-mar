import { Sparkles, Snowflake, Truck } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Frescura Garantizada",
    description: "Recibimos productos frescos todos los días directamente de los puertos."
  },
  {
    icon: Snowflake,
    title: "Congelados Premium",
    description: "Proceso de congelado rápido que mantiene la calidad y sabor original."
  },
  {
    icon: Truck,
    title: "Entrega a Comercios",
    description: "Servicio de entrega programada para restaurantes y comercios."
  }
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 35 años de experiencia nos respaldan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-card rounded-full shadow-sm mb-6 group-hover:shadow-md transition-shadow">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
