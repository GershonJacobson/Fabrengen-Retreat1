import { Header } from "@/components/header"
import { DollarSign, Smartphone, CreditCard, Heart } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Support Our Mission</h1>
            <p className="mt-4 text-lg text-gray-600">Choose your preferred donation method</p>
          </div>

          {/* Donation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Square Card */}
            <a
              href="https://square.link/u/vISEPCNO?src=sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Square</div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    Credit / Debit Card
                  </span>
                </div>
              </div>
            </a>

            {/* Cash App Card */}
            <a
              href="https://cash.app/$Gavrielkollin"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Cash App</div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    Cash App
                  </span>
                </div>
              </div>
            </a>

            {/* Zelle Card */}
            <a
              href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiR0FWUklFTCIsInRva2VuIjoiMzEwMzg0NDI4NiIsImFjdGlvbiI6InBheW1lbnQifQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Zelle</div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    (310) 384-4286
                  </span>
                </div>
              </div>
            </a>

            {/* Venmo Card */}
            <a
              href="https://venmo.com/u/Gavrielkollin"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">Venmo</div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    @Gavrielkollin
                  </span>
                </div>
              </div>
            </a>

            {/* PayPal Card */}
            <a
              href="https://paypal.me/Gavrielkollin"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">PayPal</div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    @Gavrielkollin
                  </span>
                </div>
              </div>
            </a>

            {/* ChaiClub Card */}
            <a
              href="https://mychaiclub.com/cluQKjIX0HeTVLuraDMoXn1#"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">ChaiClub</div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    ChaiClub
                  </span>
                </div>
              </div>
            </a>

            {/* GoFundMe Card */}
            <a
              href="https://gofund.me/6cf6dd0b3"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase">GoFundMe</div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-gray-700" />
                  <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    Go Fund Me
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
