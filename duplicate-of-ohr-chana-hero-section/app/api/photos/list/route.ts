import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    console.log("[v0] Fetching photos from Blob storage")
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    // List all blobs with photos prefix
    const { blobs } = await list({
      prefix: category ? `photos/${category}/` : "photos/",
    })

    console.log("[v0] Found blobs:", blobs.length)

    console.log(
      "[v0] Sample blob pathnames:",
      blobs.slice(0, 5).map((b) => b.pathname),
    )

    const photos = blobs.map((blob) => {
      const pathParts = blob.pathname.split("/")
      const photoCategory = pathParts[1] || "uncategorized"
      const filename = pathParts[pathParts.length - 1] || "unknown"

      console.log("[v0] Blob pathname:", blob.pathname, "-> category:", photoCategory)

      return {
        url: blob.url,
        pathname: blob.pathname,
        filename,
        category: photoCategory,
        uploadedAt: blob.uploadedAt,
        size: blob.size,
      }
    })

    const photosByCategory: Record<string, typeof photos> = {}
    photos.forEach((photo) => {
      if (!photosByCategory[photo.category]) {
        photosByCategory[photo.category] = []
      }
      photosByCategory[photo.category].push(photo)
    })

    console.log("[v0] Photos grouped by category:", Object.keys(photosByCategory))
    Object.entries(photosByCategory).forEach(([cat, photos]) => {
      console.log(`[v0] Category "${cat}": ${photos.length} photos`)
    })

    return NextResponse.json({ photos, photosByCategory })
  } catch (error) {
    console.error("[v0] Error listing photos:", error)
    return NextResponse.json({ error: "Failed to list photos" }, { status: 500 })
  }
}
