import { Metadata } from "next"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contacto | Pescadería",
  description: "Contactanos por WhatsApp para pedidos minoristas y mayoristas. Atención rápida y personalizada.",
}

export default function ContactoPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  )
}
