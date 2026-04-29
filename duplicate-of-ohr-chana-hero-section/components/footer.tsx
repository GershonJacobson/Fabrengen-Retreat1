const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Farbrengen Retreat תשפ״ו</h2>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base">
            <a href="/about" className="text-gray-400 hover:text-primary transition-colors">
              About Us
            </a>
            <span className="text-gray-600">•</span>
            <a href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
              Gallery
            </a>
            <span className="text-gray-600">•</span>
            <a href="/contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPinIcon />
            <a
              href="https://maps.google.com/?q=350+New+York+Ave+Brooklyn+NY+11213"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              350 New York Ave Brooklyn NY 11213
            </a>
          </div>

          {/* Powered By */}
          <div className="pt-8 border-t border-zinc-800">
            <p className="text-sm text-gray-500">Powered By The Rebbe's Shluchim</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
