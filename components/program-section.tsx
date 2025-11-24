import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, CheckCircle } from "lucide-react"

const programs = [
  {
    title: "Pendataan Cendikia Asrama",
    description: "Menghimpun identitas seluruh cendikia asrama untuk kebutuhan mendesak seperti kegiatan dan laporan.",
    waktu: "Agustus (Tahunan)",
    target: "90% cendikia asrama",
    output: "Data identitas siap dipakai untuk kebutuhan mendesak",
    icon: "📊",
    color: "bg-chart-1",
  },
  {
    title: "Form Kepuasan Kegiatan Asrama",
    description: "Mengumpulkan kritik dan saran setelah kegiatan untuk evaluasi keberhasilan.",
    waktu: "Setiap selesai kegiatan (Bulanan)",
    target: "90% cendikia asrama",
    output: "Feedback untuk evaluasi keberhasilan kegiatan",
    icon: "📝",
    color: "bg-chart-2",
  },
  {
    title: "Pendataan Prestasi",
    description: "Mencatat prestasi dan dokumentasi cendikia asrama untuk publikasi dan apresiasi.",
    waktu: "1x per bulan (Bulanan)",
    target: "90% prestasi cendikia terdata",
    output: "Data prestasi untuk publikasi & apresiasi asrama",
    icon: "🏆",
    color: "bg-chart-3",
  },
  {
    title: "Linktree Asrama",
    description: "Menyediakan satu pusat link informasi penting asrama untuk akses yang mudah dan terpusat.",
    waktu: "September (Tahunan)",
    target: "80% informasi terhubung",
    output: "Akses informasi lebih mudah dan terpusat",
    icon: "🔗",
    color: "bg-chart-4",
  },
  {
    title: "Request Order Divisi Litbang",
    description: "Menyediakan platform permintaan khusus lingkup Litbang untuk memenuhi kebutuhan divisi.",
    waktu: "Sepanjang periode kepengurusan (Bulanan)",
    target: "Memenuhi permintaan 90%",
    output: "Kebutuhan divisi/adm terpenuhi (produk, desain, dll)",
    icon: "📋",
    color: "bg-chart-5",
  },
  {
    title: "Pendataan Check-Out",
    description: "Membuat rekapitulasi cendikia yang keluar/checkout untuk data yang selalu terupdate.",
    waktu: "1x per bulan (Bulanan)",
    target: "Meng-cover 90% data",
    output: "Data aktif/non-aktif cendikia selalu terupdate",
    icon: "📤",
    color: "bg-primary",
  },
]

export function ProgramSection() {
  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Program Kerja Divisi Litbang</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Enam program kerja yang dirancang untuk mendukung transparansi, efisiensi, dan keberlanjutan program asrama
            melalui pengolahan data yang sistematis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{program.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    Program {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-balance group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm text-balance">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Waktu</p>
                      <p className="text-sm">{program.waktu}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Target</p>
                      <p className="text-sm">{program.target}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Output</p>
                      <p className="text-sm text-balance">{program.output}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-lg">
            <CheckCircle className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">
              Semua program mendukung transparansi, efisiensi, dan keberlanjutan program asrama
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
