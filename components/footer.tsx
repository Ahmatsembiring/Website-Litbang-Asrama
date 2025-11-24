import { BookOpen, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold">Divisi Litbang</h3>
                <p className="text-sm opacity-90">Asrama Cendikia</p>
              </div>
            </div>
            <p className="text-sm opacity-90 text-balance">
              Divisi Penelitian dan Pengembangan yang fokus pada pengolahan data, dokumentasi, evaluasi, dan publikasi
              untuk kemajuan asrama.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Program Kerja</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Pendataan Cendikia Asrama</li>
              <li>Form Kepuasan Kegiatan</li>
              <li>Pendataan Prestasi</li>
              <li>Linktree Asrama</li>
              <li>Request Order Litbang</li>
              <li>Pendataan Check-Out</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>litbang@asramacendikia.ac.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 38308558522</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Asrama Cendikia Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">© 5 Divisi Litbang Asrama Cendikia. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
