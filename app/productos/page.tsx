import { Products } from "@/components/products"

export const metadata = {
  title: "Productos | Delicias de Mar",
  description: "Pescados frescos, mariscos, congelados, rotisería y almacén. Consultá disponibilidad por WhatsApp.",
}

export default function ProductosPage() {
  return (
    <main className="pt-16">
      <Products />
    </main>
  )
}
