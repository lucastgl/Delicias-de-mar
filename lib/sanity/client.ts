import { createClient } from "next-sanity"

// Todas las credenciales vienen de variables de entorno.
// Para cambiar de cuenta: actualizá .env.local y reiniciá el servidor.
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

// true solo cuando las credenciales están configuradas
export const isSanityEnabled =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== ""
