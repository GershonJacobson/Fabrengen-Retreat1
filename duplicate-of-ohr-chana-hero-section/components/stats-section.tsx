"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// Inline SVG icons
const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

interface StatCardProps {
  icon: React.ReactNode
  value: number
  label: string
  description: string
}

function StatCard({ icon, value, label, description }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8C4B8] to-[#d4a89a] flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800">
          {count}
          <span className="text-[#E8C4B8]">+</span>
        </div>
        <div className="text-lg font-semibold text-gray-700 mt-1">{label}</div>
        <div className="text-sm text-gray-500 mt-2 max-w-[200px]">{description}</div>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FFF5F2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard
            icon={<HeartIcon />}
            value={100}
            label="Souls Reached"
            description="Young hearts touched and transformed through our programs"
          />
          <StatCard
            icon={<CalendarIcon />}
            value={40}
            label="Events Made"
            description="Unforgettable experiences creating lasting memories"
          />
          <StatCard
            icon={<UsersIcon />}
            value={8}
            label="Caring Staff"
            description="Dedicated mentors committed to making a difference"
          />
        </div>
      </div>
    </section>
  )
}
