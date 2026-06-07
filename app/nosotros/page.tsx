import type { Metadata } from "next"
import { AboutUs } from "@/components/about-us"

export const metadata: Metadata = {
  title: "Nosotros | Pescadería",
  description:
    "Conoce nuestra historia. Desde nuestro primer local en 2022 hasta nuestro nuevo espacio en 2025. Frescura, calidad y trato cercano.",
}

export default function NosotrosPage() {
  return (
    <main>
      <AboutUs />
    </main>
  )
}
