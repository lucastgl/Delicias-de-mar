import type { Metadata } from "next"
import { ShoppingBag } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { categoryTree } from "@/lib/products"
import { getProductImages } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Almacén | Delicias de Mar",
  description: "Salsas, aceites, vinagres, arroces, conservas, especias, vinos y todo para tus recetas.",
}

export default async function AlmacenPage() {
  const productImages = await getProductImages()

  return (
    <CategoryTabs
      title="Almacén"
      subtitle="Salsas, aceites, arroces, conservas, ingredientes para sushi, especias y vinos. Todo lo que necesitás para cocinar."
      subcategories={categoryTree.almacen.subcategories}
      whatsappPrefix="Hola, quiero consultar por el producto:"
      icon={<ShoppingBag className="w-12 h-12 text-white" />}
      image="/images/categorias/Almacen.webp"
      productImages={productImages}
    />
  )
}
