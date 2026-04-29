"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MigratePage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleMigrate = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/photos/migrate", {
        method: "POST",
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : "Migration failed",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Migrate Photos to Farbrengen Retreat</CardTitle>
          <CardDescription>
            Click the button below to migrate the 5 photos to the farbrengen-retreat category
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleMigrate} disabled={loading}>
            {loading ? "Migrating..." : "Migrate Photos"}
          </Button>

          {result && (
            <div className="mt-4 p-4 rounded-lg bg-muted">
              <pre className="text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
