import { Button } from "@/components/ui/button"
import { ArrowDown, Target, Users, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Program Kerja
            <span className="text-primary block">Divisi Litbang</span>
            <span className="text-2xl lg:text-3xl font-normal text-muted-foreground block mt-2">Asrama Cendikia</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Fokus pada pengolahan data, dokumentasi, evaluasi, dan publikasi untuk mendukung transparansi, efisiensi,
            dan keberlanjutan program asrama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Lihat Program Kerja
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Target 90%</h3>
              <p className="text-sm text-muted-foreground">Cakupan data cendikia asrama</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">6 Program</h3>
              <p className="text-sm text-muted-foreground">Program kerja terintegrasi</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Berkelanjutan</h3>
              <p className="text-sm text-muted-foreground">Evaluasi dan perbaikan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
