import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-background/40 backdrop-blur-xl rounded-full border border-white/20 shadow-lg px-4 sm:px-8 py-1">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 py-2 leading-tight">
            <span className="text-primary font-serif italic text-xs sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
              The Farbrengen
            </span>
            <span className="text-primary/70 font-serif italic text-[10px] sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              Retreat
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors text-sm">
              Home
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-foreground/80 transition-colors text-sm">
              Gallery
            </Link>
            <Link href="/about" className="text-foreground hover:text-foreground/80 transition-colors text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-foreground/80 transition-colors text-sm">
              Contact Us
            </Link>
          </nav>

          {/* Donate Button */}
          <Link href="/donate">
            <Button
              size="sm"
              className="rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium"
              style={{ backgroundColor: "#D4A59A", color: "white" }}
            >
              DONATE NOW
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
