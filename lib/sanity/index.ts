// Punto de entrada único para la integración Sanity.
// Los componentes solo importan desde "@/lib/sanity", nunca directamente de subcarpetas.
export { sanityClient, isSanityEnabled } from "./client"
export { urlFor } from "./image"
export { getProductImages } from "./queries"
export type { ProductImageMap } from "./queries"
