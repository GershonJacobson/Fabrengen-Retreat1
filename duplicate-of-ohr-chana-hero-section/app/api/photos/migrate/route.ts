import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

// One-time migration endpoint to copy images to farbrengen-retreat category
export async function POST() {
  try {
    const imagesToMigrate = [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-236-Zy6rMYhTtv5hBo2f1y7JJSJnOgPyUq.jpg",
        name: "campfire-cardboard.jpg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-247-1EluhliGIHFMf213GVfmzh0TQ4HARi.jpg",
        name: "prayer-study.jpg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-249-iVysoDWaYMhgIAG2AL88CfOUqXA0iR.jpg",
        name: "embrace-night.jpg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-238-aCWf242mtDzNT3CE0hqyF48v5FFyV7.jpg",
        name: "campfire-contemplation.jpg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-172-hAIFKn97DJ9hszjTet9QizpP1XJqxn.jpg",
        name: "adventure-vehicle.jpg",
      },
    ]

    const results = []

    for (const image of imagesToMigrate) {
      try {
        console.log(`[v0] Migrating ${image.name} from ${image.url}`)

        const response = await fetch(image.url, {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0",
          },
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch ${image.url}: ${response.status} ${response.statusText}`)
        }

        console.log(`[v0] Fetched ${image.name}, converting to buffer...`)

        const blob = await response.blob()
        const arrayBuffer = await blob.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        console.log(`[v0] Buffer created, size: ${buffer.length} bytes`)

        const pathname = `photos/farbrengen-retreat/${Date.now()}-${image.name}`
        console.log(`[v0] Uploading to ${pathname}...`)

        const uploadedBlob = await put(pathname, buffer, {
          access: "public",
        })

        console.log(`[v0] Successfully uploaded to ${uploadedBlob.pathname}`)

        results.push({
          original: image.url,
          new: uploadedBlob.url,
          pathname: uploadedBlob.pathname,
        })

        // Small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 200))
      } catch (imageError) {
        console.error(`[v0] Error migrating ${image.name}:`, imageError)
        results.push({
          original: image.url,
          error: imageError instanceof Error ? imageError.message : "Unknown error",
        })
      }
    }

    const successCount = results.filter((r) => !("error" in r)).length

    return NextResponse.json({
      success: successCount > 0,
      message: `Successfully migrated ${successCount} of ${imagesToMigrate.length} images`,
      results,
    })
  } catch (error) {
    console.error("[v0] Migration error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Migration failed",
      },
      { status: 500 },
    )
  }
}
