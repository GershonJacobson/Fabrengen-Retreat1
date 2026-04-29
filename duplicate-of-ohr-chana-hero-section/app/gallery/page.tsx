"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageLightbox } from "@/components/image-lightbox"
import Image from "next/image"

interface Photo {
  url: string
  filename: string
  category: string
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos/list")
        const data = await response.json()

        // Randomize photos
        const shuffled = [...data.photos].sort(() => Math.random() - 0.5)
        setPhotos(shuffled)
      } catch (error) {
        console.error("Error fetching photos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Photo Gallery</h1>
        <p className="text-muted-foreground mb-8">All photos from our retreats and programs</p>

        {photos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No photos yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index)
                  setLightboxOpen(true)
                }}
              >
                <Image
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.filename}
                  fill
                  quality={80}
                  loading="lazy"
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />

      {lightboxOpen && (
        <ImageLightbox
          images={photos}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % photos.length)}
          onPrevious={() => setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length)}
        />
      )}
    </div>
  )
}
