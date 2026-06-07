import { groq } from "next-sanity"
import { sanityClient, isSanityEnabled } from "./client"
import { urlFor } from "./image"

export type ProductImageMap = Record<string, string>

const query = groq`
  *[_type == "imagenSitio"] {
    "clave": clave.current,
    imagen
  }
`

/**
 * Obtiene las imágenes de productos desde Sanity, mapeadas por clave (= id del producto).
 * Si Sanity no está configurado o falla, devuelve un mapa vacío y las cards usan placeholder.svg.
 * Llamar desde Server Components (no usar en "use client").
 */
export async function getProductImages(): Promise<ProductImageMap> {
  if (!isSanityEnabled) return {}

  try {
    const docs = await sanityClient.fetch<{ clave: string; imagen: unknown }[]>(query)
    const map: ProductImageMap = {}
    for (const doc of docs) {
      if (doc.clave && doc.imagen) {
        map[doc.clave] = urlFor(doc.imagen).width(800).auto("format").url()
      }
    }
    return map
  } catch (err) {
    console.warn("[Sanity] No se pudo obtener imágenes de productos.", err)
    return {}
  }
}
