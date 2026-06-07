import type { Metadata } from "next"
import { ShoppingBag } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { categoryTree } from "@/lib/products"
import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Almacén | Delicias de Mar",
  description: "Salsas, aceites, vinagres, arroces, conservas, especias, vinos y todo para tus recetas.",
}

export default async function AlmacenPage() {
  const images = await getSiteImages()

  return (
    <CategoryTabs
      title="Almacén"
      subtitle="Salsas, aceites, arroces, conservas, ingredientes para sushi, especias y vinos. Todo lo que necesitás para cocinar."
      subcategories={categoryTree.almacen.subcategories}
      whatsappPrefix="Hola, quiero consultar por el producto:"
      icon={<ShoppingBag className="w-12 h-12 text-white" />}
      image={images[IMAGE_KEYS.CATEGORIA_ALMACEN]}
    />
  )
}
