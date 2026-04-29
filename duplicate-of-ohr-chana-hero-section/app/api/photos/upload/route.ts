import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const category = formData.get("category") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!category) {
      return NextResponse.json({ error: "No category provided" }, { status: 400 })
    }

    const lastDotIndex = file.name.lastIndexOf(".")
    const nameWithoutExt = lastDotIndex > 0 ? file.name.slice(0, lastDotIndex) : file.name
    const ext = lastDotIndex > 0 ? file.name.slice(lastDotIndex) : ".jpg"

    // Remove all non-alphanumeric characters except hyphens and underscores
    let sanitizedName = nameWithoutExt
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[()]/g, "") // Remove parentheses
      .replace(/[^\w-]/g, "") // Keep only word characters and hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, "") // Remove leading/trailing hyphens

    // Ensure we have a valid filename
    if (!sanitizedName || sanitizedName.length < 2) {
      sanitizedName = `photo-${Date.now()}`
    }

    const uniqueFilename = `${Date.now()}-${sanitizedName}${ext.toLowerCase()}`

    const sanitizedCategory = category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")

    const pathname = `photos/${sanitizedCategory}/${uniqueFilename}`

    console.log("[v0] Uploading file:", file.name, "->", pathname)

    // Upload to Blob - pass the File object directly
    const blob = await put(pathname, file, {
      access: "public",
    })

    console.log("[v0] Upload successful:", blob.url)

    return NextResponse.json({ url: blob.url, pathname: blob.pathname })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Upload failed",
      },
      { status: 500 },
    )
  }
}
