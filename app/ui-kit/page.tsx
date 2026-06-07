import type { Metadata } from "next"
import { UIKit } from "@/components/ui-kit"

export const metadata: Metadata = {
  title: "UI Kit | Pescadería",
  description: "Sistema de diseño y componentes de la pescadería",
  robots: {
    index: false,
    follow: false,
  },
}

export default function UIKitPage() {
  return (
    <main className="pt-16">
      <UIKit />
    </main>
  )
}
