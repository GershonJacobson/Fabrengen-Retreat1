"use client"

const testimonials = [
  {
    name: "Mendel Blumberger",
    text: "This program completely transformed my life. I came searching for something more, and I found a path that changed everything. The authentic connections, the deep conversations, and the genuine care from everyone involved gave me the strength to turn my life around. I'm forever grateful.",
    image: "/mendel-blumberger-portrait.jpeg",
  },
  {
    name: "Yisroel Meir",
    text: "I always felt disconnected from my Judaism until I experienced this program. Here, I discovered authentic meaning and a real connection to my heritage. The farbrengens opened my eyes to the beauty and depth of our tradition in a way that felt genuine and alive.",
    image: "/yisroel-meir-dj.jpg",
  },
  {
    name: "Rabbi Hecht",
    text: "I cannot express enough gratitude to Gavriel and this incredible program. My son was struggling both physically and spiritually, and I was losing hope. This program literally saved him. The care, the love, and the authentic guidance he received here brought him back to life. Thank you from the bottom of my heart.",
    image: "/rabbi-hecht-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#FDF5F3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Lives Transformed</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-[#E8C4B8]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={`w-full h-full object-cover ${
                      testimonial.name === "Rabbi Hecht" ? "object-[center_20%]" : "object-center"
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
