"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X, CheckCircle2, Trash2 } from "lucide-react"
import Image from "next/image"

const CATEGORIES = [
  { value: "succos-surfing-camp", label: "Succos Surfing Camp" },
  { value: "13-day-farbrengen-5783", label: "The 13 Day Farbrengen 5783" },
  { value: "13-day-farbrengen-5784", label: "The 13 Day Farbrengen 5784" },
  { value: "farbrengen-retreat", label: "The Farbrengen Retreat" },
  { value: "sukkah-farbrengen", label: "The Sukkah Farbrengen" },
]

interface UploadedPhoto {
  id: string // Added unique ID for tracking
  url: string
  filename: string
  category: string
  status: "uploading" | "success" | "error"
}

interface ExistingPhoto {
  url: string
  pathname: string
  uploadedAt: Date
}

export default function AdminUploadPage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].value)
  const [uploads, setUploads] = useState<UploadedPhoto[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [existingPhotos, setExistingPhotos] = useState<Record<string, ExistingPhoto[]>>({})
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(true)
  const [deletingUrls, setDeletingUrls] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchExistingPhotos()
  }, [])

  const fetchExistingPhotos = async () => {
    try {
      const response = await fetch("/api/photos/list")
      if (response.ok) {
        const data = await response.json()
        setExistingPhotos(data.photosByCategory || {})
      }
    } catch (error) {
      console.error("Error fetching photos:", error)
      setExistingPhotos({})
    } finally {
      setIsLoadingPhotos(false)
    }
  }

  const handleDeletePhoto = async (url: string, category: string) => {
    if (!confirm("Are you sure you want to delete this photo?")) return

    setDeletingUrls((prev) => new Set(prev).add(url))

    try {
      const response = await fetch("/api/photos/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (response.ok) {
        setExistingPhotos((prev) => ({
          ...prev,
          [category]: prev[category]?.filter((photo) => photo.url !== url) || [],
        }))
      } else {
        alert("Failed to delete photo")
      }
    } catch (error) {
      console.error("Delete error:", error)
      alert("Error deleting photo")
    } finally {
      setDeletingUrls((prev) => {
        const newSet = new Set(prev)
        newSet.delete(url)
        return newSet
      })
    }
  }

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    const fileArray = Array.from(files)

    const newUploads: UploadedPhoto[] = fileArray.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${file.name}`,
      url: "",
      filename: file.name,
      category: selectedCategory,
      status: "uploading",
    }))

    setUploads((prev) => [...newUploads, ...prev])

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i]
      const uploadId = newUploads[i].id

      try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("category", selectedCategory)

        const response = await fetch("/api/photos/upload", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`)
        }

        const data = await response.json()

        setUploads((prev) =>
          prev.map((upload) => (upload.id === uploadId ? { ...upload, url: data.url, status: "success" } : upload)),
        )
        fetchExistingPhotos()
      } catch (error) {
        console.error("Upload failed for:", file.name, "Error:", error)
        setUploads((prev) => prev.map((upload) => (upload.id === uploadId ? { ...upload, status: "error" } : upload)))
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const removeUpload = (uploadId: string) => {
    setUploads((prev) => prev.filter((upload) => upload.id !== uploadId))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Upload Photos</h1>
          <p className="text-muted-foreground mb-8">
            Upload photos for the gallery. Select a category and drag & drop or click to upload.
          </p>

          <Card className="p-6 mb-8">
            <label className="block mb-4">
              <span className="text-sm font-medium mb-2 block">Select Category</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-md bg-background"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
              }`}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drag & drop photos here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button asChild>
                  <span>Choose Files</span>
                </Button>
              </label>
            </div>
          </Card>

          {uploads.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upload Status</h2>
              <div className="space-y-2">
                {uploads.map((upload) => (
                  <Card key={upload.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {upload.status === "uploading" && (
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        )}
                        {upload.status === "success" && (
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        )}
                        {upload.status === "error" && <X className="w-5 h-5 text-red-500 flex-shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{upload.filename}</p>
                          <p className="text-sm text-muted-foreground">
                            {CATEGORIES.find((c) => c.value === upload.category)?.label || upload.category}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeUpload(upload.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4">Existing Photos</h2>
            {isLoadingPhotos ? (
              <Card className="p-8 text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-muted-foreground">Loading photos...</p>
              </Card>
            ) : (
              <div className="space-y-6">
                {CATEGORIES.map((category) => {
                  const photos = existingPhotos?.[category.value] || []
                  if (photos.length === 0) return null

                  return (
                    <Card key={category.value} className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{category.label}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {photos.map((photo) => (
                          <div key={photo.url} className="relative group">
                            <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                              <Image
                                src={photo.url || "/placeholder.svg"}
                                alt="Gallery photo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => handleDeletePhoto(photo.url, category.value)}
                              disabled={deletingUrls.has(photo.url)}
                            >
                              {deletingUrls.has(photo.url) ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </Card>
                  )
                })}
                {Object.values(existingPhotos || {}).every((photos) => photos.length === 0) && (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">No photos uploaded yet. Upload some photos to get started!</p>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
