import { groq } from "next-sanity"
import { sanityClient, isSanityEnabled } from "./client"
import { urlFor } from "./image"

// Mapa de claves de imagen usadas en el sitio → ruta local de fallback
// Estas claves deben coincidir exactamente con el campo "clave" en Sanity Studio
export const IMAGE_KEYS = {
  // Categorías principales (página /productos)
  CATEGORIA_PESCADOS: "categoria-pescados",
  CATEGORIA_CONGELADOS: "categoria-congelados",
  CATEGORIA_ROTISERIA: "categoria-rotiseria",
  CATEGORIA_ALMACEN: "categoria-almacen",
  // Subcategorías de pescados
  SUBCATEGORIA_FRESCOS: "subcategoria-frescos",
  SUBCATEGORIA_MARISCOS: "subcategoria-mariscos",
} as const

// Fallbacks locales mientras no haya imagen en Sanity
const LOCAL_FALLBACKS: Record<string, string> = {
  [IMAGE_KEYS.CATEGORIA_PESCADOS]: "/images/categorias/PescadosyMariscos.webp",
  [IMAGE_KEYS.CATEGORIA_CONGELADOS]: "/images/categorias/Congelados.webp",
  [IMAGE_KEYS.CATEGORIA_ROTISERIA]: "/images/categorias/Rotiseria.webp",
  [IMAGE_KEYS.CATEGORIA_ALMACEN]: "/images/categorias/Almacen.webp",
  [IMAGE_KEYS.SUBCATEGORIA_FRESCOS]: "/images/banners/subbanners/PrescadosFrescos.webp",
  [IMAGE_KEYS.SUBCATEGORIA_MARISCOS]: "/images/banners/subbanners/Mariscos.webp",
}

// Tipo del mapa: clave → URL resuelta (Sanity CDN o local)
export type SiteImageMap = Record<string, string>

const query = groq`
  *[_type == "imagenSitio"] {
    "clave": clave.current,
    imagen,
    alt
  }
`

/**
 * Obtiene todas las imágenes del sitio desde Sanity.
 * Si Sanity no está configurado o falla, devuelve los fallbacks locales.
 * Llamar desde Server Components (no usar en "use client").
 */
export async function getSiteImages(): Promise<SiteImageMap> {
  // Empezamos con todos los fallbacks
  const map: SiteImageMap = { ...LOCAL_FALLBACKS }

  if (!isSanityEnabled) return map

  try {
    const docs = await sanityClient.fetch<{ clave: string; imagen: unknown; alt?: string }[]>(query)
    for (const doc of docs) {
      if (doc.clave && doc.imagen) {
        map[doc.clave] = urlFor(doc.imagen).width(1920).auto("format").url()
      }
    }
  } catch (err) {
    console.warn("[Sanity] No se pudo obtener imágenes, usando fallbacks.", err)
  }

  return map
}
