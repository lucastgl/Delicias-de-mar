import type { Metadata } from "next"
import { ChefHat } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { categoryTree } from "@/lib/products"
import { getProductImages } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Rotisería | Delicias de Mar",
  description: "Sushi, empanadas, paella, tartas, ensaladas y platos caseros elaborados con pescados frescos.",
}

export default async function CocinaPage() {
  const productImages = await getProductImages()

  return (
    <CategoryTabs
      title="Rotisería"
      subtitle="Platos caseros elaborados con pescados frescos, listos para llevar y disfrutar. Cocinados en el día."
      subcategories={categoryTree.cocina.subcategories}
      whatsappPrefix="Hola, quiero consultar por el plato:"
      icon={<ChefHat className="w-12 h-12 text-white" />}
      image="/images/categorias/Rotiseria.webp"
      productImages={productImages}
    />
  )
}
