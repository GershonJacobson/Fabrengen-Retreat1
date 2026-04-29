import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MeetGaviSection() {
  return (
    <section className="py-12 px-4 bg-[#E8C4B8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">Meet Gavriel Kollin</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gavi-kollin-speaking.jpg"
                alt="Gavriel Kollin"
                width={800}
                height={600}
                priority
                quality={85}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-4">
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                With a heart for Jewish youth and a passion for authentic connection, in 2021 Gavriel Kollin founded
                Fabrengen Retreat to create transformative experiences that change lives. His vision goes beyond
                traditional programming—he believes in the power of genuine relationships, meaningful conversations, and
                creating spaces where young people can discover their true potential.
              </p>

              <p>
                Through his dedication and warmth, Gavriel has touched countless lives, guiding young souls on their
                journey of growth, self-discovery, and spiritual connection. His approach combines adventure,
                authenticity, and deep Jewish values to create experiences that resonate long after the program ends.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/gavriel-story">
                <Button
                  className="rounded-full px-8 py-6 text-base font-medium"
                  style={{ backgroundColor: "#8B6F47", color: "white" }}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
