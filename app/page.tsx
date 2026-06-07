import { Hero } from "@/components/hero"
import { SalesTypes } from "@/components/sales-types"
import { Benefits } from "@/components/benefits"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <SalesTypes />
      <Benefits />
    </main>
  )
}
