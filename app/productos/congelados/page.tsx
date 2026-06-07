import type { Metadata } from "next"
import { Snowflake } from "lucide-react"
import { CategoryTabs } from "@/components/category-tabs"
import { categoryTree } from "@/lib/products"
import { getSiteImages, IMAGE_KEYS } from "@/lib/sanity"

export const metadata: Metadata = {
  title: "Congelados | Delicias de Mar",
  description: "Medallones, filetes, bastones, bocaditos y nuggets congelados de Grangys, La Granjita y más.",
}

export default async function CongeladosPage() {
  const images = await getSiteImages()

  return (
    <CategoryTabs
      title="Congelados"
      subtitle="Productos de las mejores marcas: Grangys, La Granjita, Solimelo, Tres Arroyos y Artico."
      subcategories={categoryTree.congelados.subcategories}
      whatsappPrefix="Hola, quiero consultar por el producto congelado:"
      icon={<Snowflake className="w-12 h-12 text-white" />}
      image={images[IMAGE_KEYS.CATEGORIA_CONGELADOS]}
    />
  )
}
