import type { Metadata } from "next"
import { Fish } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { pescadosFrescos, pescadosCombos } from "@/lib/products"
import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Pescados Frescos | Delicias de Mar",
  description: "Variedad de pescados frescos del día: salmón, merluza, besugo, pejerrey, truchón y más.",
}

const subcategories = [
  { id: "frescos", label: "Frescos y Despinados", products: pescadosFrescos },
  { id: "combos", label: "Combos", products: pescadosCombos },
]

export default async function PescadosFrescosPage() {
  const images = await getSiteImages()

  return (
    <CategoryTabs
      title="Pescados Frescos"
      subtitle="Recibimos mercadería fresca todos los días. Pescados de río y mar seleccionados directamente del puerto."
      subcategories={subcategories}
      whatsappPrefix="Hola, quiero consultar disponibilidad de:"
      icon={<Fish className="w-12 h-12 text-white" />}
      image={images[IMAGE_KEYS.SUBCATEGORIA_FRESCOS]}
    />
  )
}
