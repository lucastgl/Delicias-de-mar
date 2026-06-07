import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"
import { Products } from "@/components/products"

export const metadata = {
  title: "Productos | Delicias de Mar",
  description: "Pescados frescos, mariscos, congelados, rotisería y almacén. Consultá disponibilidad por WhatsApp.",
}

export default async function ProductosPage() {
  const images = await getSiteImages()

  return (
    <main className="pt-16">
      <Products
        images={{
          pescados: images[IMAGE_KEYS.CATEGORIA_PESCADOS],
          congelados: images[IMAGE_KEYS.CATEGORIA_CONGELADOS],
          cocina: images[IMAGE_KEYS.CATEGORIA_ROTISERIA],
          almacen: images[IMAGE_KEYS.CATEGORIA_ALMACEN],
        }}
      />
    </main>
  )
}
