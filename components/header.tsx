import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Divisi Litbang</h1>
            <p className="text-xs text-muted-foreground">Asrama Cendikia</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#program" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Program Kerja Ahmat Sembiring
          </a>
         
         
        </nav>
      </div>
    </header>
  )
}
