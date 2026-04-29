import { Header } from "@/components/header"
import { Phone, Mail } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Get In Touch</h1>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Call Card */}
            <a
              href="tel:3103844286"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Call</div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    (310) 384-4286
                  </span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:Gavikollin@gmail.com"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Email</div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors break-all">
                    Gavikollin@gmail.com
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
