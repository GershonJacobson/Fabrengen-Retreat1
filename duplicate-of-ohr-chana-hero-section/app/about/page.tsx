import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Hero Section with Image */}
      <section className="relative flex items-center justify-center overflow-hidden bg-black">
        <div className="relative w-full h-[60vh] min-h-[450px] md:h-[70vh]">
          <Image
            src="/gavriel-with-participant-airport.jpg"
            alt="Gavriel with participant"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 text-balance">Our Story</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">A Vision That Changed Lives</p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path d="M0,120 L0,0 Q720,120 1440,0 L1440,120 Z" fill="#FDF5F3" />
          </svg>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#FDF5F3] to-white">
        <div className="max-w-4xl mx-auto">
          {/* The Beginning */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">The Beginning</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Our story begins with Gavriel, a young man learning in yeshivah, who was inspired with a vision: to
                create a space where boys could disconnect from the distractions of the outside world and reconnect with
                themselves, with Yiddishkeit, and with true friendship. Out of this dream, the very first 13-Day
                Farbrengen was born.
              </p>
              <p>
                The program was a tremendous success. With no phones, no drugs, and none of the pressures of the world,
                the boys thrived in an environment filled with learning, meaning, joy, and authentic connection.
                Gavriel's unique way of running the program brought out the best in each participant, and the impact was
                undeniable.
              </p>
            </div>
          </div>

          {/* Image Break */}
          <div className="my-16 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/group-brotherhood-study-hall.jpg"
              alt="Brotherhood and connection at Farbrengen Retreat"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Growth & Expansion */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">Growth & Expansion</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                After seeing how much the boys gained, Gavriel went on to organize multiple programs the following
                year—each one a "big hit" in its own right. The excitement and demand only grew. From there, he began
                hosting mini farbrengens and trips throughout the year, giving the boys regular opportunities to
                recharge, bond, and be inspired.
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="bg-[#E8C4B8] rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">Today</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-800">
              <p>
                Today, that vision has blossomed into something even greater: every two and a half months, a new 10-Day
                Program takes place. Each one is filled with powerful experiences, uplifting farbrengens, delicious
                food, meaningful trips, and an atmosphere that changes lives.
              </p>
              <p className="font-semibold text-xl text-[#8B6F47] pt-4">
                This is more than just a program—it's a movement. A family. A place where boys discover meaning, truth,
                and love, and walk away with memories and friendships that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
