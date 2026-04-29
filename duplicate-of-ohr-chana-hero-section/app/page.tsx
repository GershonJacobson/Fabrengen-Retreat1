import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { ProgramSection } from "@/components/program-section"
import { VideoSection } from "@/components/video-section"
import { MeetGaviSection } from "@/components/meet-gavi-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      <Header />
      <Hero />
      <Categories />
      <ProgramSection />
      <VideoSection />
      <MeetGaviSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
