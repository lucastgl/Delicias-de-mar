import type { Metadata } from "next"
import { Waves } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { mariscosXKilo, mariscosXUnidad } from "@/lib/products"
import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Mariscos | Delicias de Mar",
  description: "Pulpo, rabas, tubo calamar, kanikama y más. Por kilo o por bandeja.",
}

const subcategories = [
  { id: "xkilo", label: "Por Kilo", products: mariscosXKilo },
  { id: "xbandeja", label: "Por Bandeja", products: mariscosXUnidad },
]

export default async function MariscosPage() {
  const images = await getSiteImages()

  return (
    <CategoryTabs
      title="Mariscos"
      subtitle="Pulpo, rabas, tubo calamar, kanikama y más. Frescos y de primera calidad."
      subcategories={subcategories}
      whatsappPrefix="Hola, quiero consultar disponibilidad de:"
      icon={<Waves className="w-12 h-12 text-white" />}
      image={images[IMAGE_KEYS.SUBCATEGORIA_MARISCOS]}
    />
  )
}
