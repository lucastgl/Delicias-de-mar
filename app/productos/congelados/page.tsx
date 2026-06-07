import type { Metadata } from "next"
import { Snowflake } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { categoryTree } from "@/lib/products"
import { getProductImages } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Congelados | Delicias de Mar",
  description: "Medallones, filetes, bastones, bocaditos y nuggets congelados de Grangys, La Granjita y más.",
}

export default async function CongeladosPage() {
  const productImages = await getProductImages()

  return (
    <CategoryTabs
      title="Congelados"
      subtitle="Productos de las mejores marcas: Grangys, La Granjita, Solimelo, Tres Arroyos y Artico."
      subcategories={categoryTree.congelados.subcategories}
      whatsappPrefix="Hola, quiero consultar por el producto congelado:"
      icon={<Snowflake className="w-12 h-12 text-white" />}
      image="/images/categorias/Congelados.webp"
      productImages={productImages}
    />
  )
}
