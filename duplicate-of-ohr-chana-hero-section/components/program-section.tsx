import Image from "next/image"

export function ProgramSection() {
  return (
    <section className="py-12 px-4 bg-[#D4A59A]/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8 text-balance">
          Transforming Lives Through Connection
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Every 10 weeks, we bring together deep souls for an immersive 10-day experience that goes beyond the
                ordinary. Our program offers more than just activities—it's a journey of authentic growth. Through
                meaningful farbrengens, wild trips, nourishing meals, and genuine brotherhood, we create a space where
                truth, fun and purpose come alive.
              </p>

              <p>
                What makes these retreats truly transformative is the commitment each participant makes on their own—to
                disconnect from phones and step away from drugs for the full 10 days. This voluntary choice creates an
                environment of presence, authenticity, and deep connection that allows real growth to happen. It's this
                willingness to be fully present that makes our program so successful.
              </p>

              <p>
                Here, lives are transformed with love, meaning is discovered, and lasting connections are forged in an
                atmosphere of warmth and authenticity.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/three-young-men-couch-conversation.jpg"
                alt="Three young men in casual conversation on couch"
                width={800}
                height={600}
                priority
                quality={85}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
