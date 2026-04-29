"use client"

import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open("https://wa.me/13103844286", "_blank")
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popup message */}
      <div
        className={`absolute bottom-[70px] right-0 bg-white px-4 py-3 rounded-xl shadow-lg text-sm text-black max-w-[220px] leading-relaxed whitespace-nowrap transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isHovered ? "Let's Chat On WhatsApp" : "Chat with us on WhatsApp 📲"}
      </div>

      {/* WhatsApp icon button */}
      <button
        onClick={handleClick}
        className="w-[60px] h-[60px] rounded-full bg-[#25D366] cursor-pointer shadow-lg transition-transform duration-200 hover:scale-105 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/images/design-mode/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[60%] h-[60%]"
        />
      </button>
    </div>
  )
}
