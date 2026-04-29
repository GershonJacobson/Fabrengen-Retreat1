import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/atv-group-celebration.jpg"
          alt="ATV group celebration"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-12 text-balance">The Farbrengen Retreat תשפ"ו</h1>
        <Link href="/donate">
          <Button
            size="lg"
            className="rounded-full px-12 py-6 text-lg"
            style={{ backgroundColor: "#D4A59A", color: "white" }}
          >
            Donate Now
          </Button>
        </Link>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 max-w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path d="M0,120 L0,0 Q720,120 1440,0 L1440,120 Z" fill="#D4A59A" />
        </svg>
      </div>
    </section>
  )
}
