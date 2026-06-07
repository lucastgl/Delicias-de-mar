import type { Metadata } from "next"
import { Waves } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { mariscosXKilo, mariscosXUnidad } from "@/lib/products"
import { getProductImages } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Mariscos | Delicias de Mar",
  description: "Pulpo, rabas, tubo calamar, kanikama y más. Por kilo o por bandeja.",
}

const subcategories = [
  { id: "xkilo", label: "Por Kilo", products: mariscosXKilo },
  { id: "xbandeja", label: "Por Bandeja", products: mariscosXUnidad },
]

export default async function MariscosPage() {
  const productImages = await getProductImages()

  return (
    <CategoryTabs
      title="Mariscos"
      subtitle="Pulpo, rabas, tubo calamar, kanikama y más. Frescos y de primera calidad."
      subcategories={subcategories}
      whatsappPrefix="Hola, quiero consultar disponibilidad de:"
      icon={<Waves className="w-12 h-12 text-white" />}
      image="/images/banners/subbanners/Mariscos.webp"
      productImages={productImages}
    />
  )
}
