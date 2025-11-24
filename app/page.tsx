import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProgramSection } from "@/components/program-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProgramSection />
      <Footer />
    </main>
  )
}
