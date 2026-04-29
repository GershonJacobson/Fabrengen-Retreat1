import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    title: "Succos Surfing Camp",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-03%20at%2001.16.36-sykWihCMw20jOX1a5I4AVnysGueWNh.jpeg",
    href: "/gallery/succos-surfing-camp",
    clickable: false, // made non-clickable
  },
  {
    title: "The 13 Day Farbrengen 5783",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-03%20at%2001.16.38-TkXzLtAAmlOqdpnZ3yuMdxJJCSba3g.jpeg",
    href: "/gallery/13-day-farbrengen-5783",
    clickable: false,
  },
  {
    title: "The 13 Day Farbrengen 5784",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-03%20at%2001.16.36%20%281%29-42KrUtS6PCRan3V8ocWlJIJ5tl6Oef.jpeg",
    href: "/gallery/13-day-farbrengen-5784",
    clickable: false,
  },
  {
    title: "The Farbrengen Retreat",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-03%20at%2001.16.37-ARAFb7a32Oaj1BNIRKGravaWGFU9kh.jpeg",
    href: "/gallery/farbrengen-retreat",
    clickable: false,
  },
  {
    title: "The Sukkah Farbrengen",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-03%20at%2001.16.37%20%281%29-1Wq3YwkrQ20meQubXdS4rj1zDwnnTy.jpeg",
    href: "/gallery/sukkah-farbrengen",
    clickable: false, // made non-clickable
  },
]

export function Categories() {
  return (
    <section className="py-16 px-4 bg-[#E8C4B8] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-gray-900">Recent Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {categories.map((category) => {
            const content = (
              <>
                {category.image ? (
                  <>
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      quality={80}
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A59A] to-[#C4958A]" />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg text-center">{category.title}</h3>
                </div>
              </>
            )

            if (category.clickable) {
              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {content}
                </Link>
              )
            }

            return (
              <div key={category.href} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
