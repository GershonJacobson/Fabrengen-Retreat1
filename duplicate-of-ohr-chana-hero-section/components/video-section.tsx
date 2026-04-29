"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800">
            Experience the Journey
          </h2>

          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2012.29.10_d5b255e4-c4ZLPkNSuxA33LUxo8vxKNL05siMFo.mp4"
                className="w-full h-full object-cover"
                muted
                playsInline
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-2xl">
                  <svg className="w-10 h-10 text-[#8B6F47] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-01%20at%2012.29.10_d5b255e4-c4ZLPkNSuxA33LUxo8vxKNL05siMFo.mp4"
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  )
}
