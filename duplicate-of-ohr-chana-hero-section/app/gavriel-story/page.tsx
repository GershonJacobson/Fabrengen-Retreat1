import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GavrielStoryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-[#FDF5F3] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#8B6F47] mb-6 text-balance">Gavriel's Journey</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">From Struggle to Purpose</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* The Beginning - Image on left, text on right */}
          <div className="mb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/gavriel-young-costume.jpeg"
                alt="Young Gavriel at a school event"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">The Beginning</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Gavriel's journey didn't begin on the straight and narrow. Growing up, he didn't live such a religious
                  life. He went to public school and, like many teenagers searching for meaning, fell into unhealthy
                  habits—weed, other substances, and a lifestyle that left him feeling empty and disconnected.
                </p>
                <p className="text-base italic text-gray-600 pt-2">
                  This photo captures Gavriel during his public school years—a time of searching, before his
                  transformation.
                </p>
              </div>
            </div>
          </div>

          {/* The Awakening */}
          <div className="mb-20 bg-[#FDF5F3] rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">The Awakening</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Everything changed when Gavriel had a powerful awakening. Realizing he wanted more for his life, he made
                the bold decision to leave those habits behind and search for truth, purpose, and a real connection with
                Hashem.
              </p>
              <p>
                That search led him to spend a year learning in yeshivah in Israel, where he immersed himself in Torah,
                chassidus, and a new way of living. Afterward, he continued his studies for two more years in the
                yeshivah of Morristown, New Jersey.
              </p>
            </div>
          </div>

          {/* The Vision & Today - Image on right, text on left */}
          <div className="mb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#8B6F47]">The Vision</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 mb-8">
                <p>
                  It was during his time in Morristown that the idea for the very first 13-Day Farbrengen was born—a
                  vision to give boys a space away from phones, drugs, and outside pressures, and instead fill their
                  days with learning, growth, joy, and authentic connection.
                </p>
                <p>
                  The program was an instant success, and it became the foundation for everything Gavriel does today.
                </p>
              </div>

              <div className="bg-[#E8C4B8] rounded-xl p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#8B6F47]">Today</h3>
                <div className="space-y-3 text-base leading-relaxed text-gray-800">
                  <p>
                    Now living his life fully religious, clean from the struggles of his past, Gavriel is dedicated to
                    making the world a better place—one program, one farbrengen, and one boy at a time.
                  </p>
                  <p className="font-semibold text-lg text-[#8B6F47] pt-2">
                    His personal transformation fuels his passion to help others find their own path to meaning,
                    connection, and purpose.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/gavriel-joyful-phones.jpg"
                alt="Gavriel Kollin today"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
