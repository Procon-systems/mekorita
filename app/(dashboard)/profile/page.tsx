"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Building, Link as LinkIcon, Edit2, Globe } from "lucide-react"

export default function ProfilePage() {
  const { user, updateUser } = useAuth()
const [isEditing, setIsEditing] = useState(false)
const [name, setName] = useState(user?.name || "")
const [role, setRole] = useState(user?.role || "")

  if (!user) return null

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-background border">
        {/* Cover Image Placeholder */}
      </div>

      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end -mt-16 mb-6">
          <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
            <p className="text-xl text-muted-foreground">{user.role}</p>
          </div>
          <Button
  variant="outline"
  className="shrink-0 gap-2"
  onClick={() => setIsEditing(!isEditing)}
>
  <Edit2 className="h-4 w-4" />
  {isEditing ? "Cancel" : "Edit Profile"}
</Button>
        </div>
        {isEditing && (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>Edit Profile</CardTitle>
    </CardHeader>

    <CardContent className="space-y-4">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Role</label>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <Button
        onClick={() => {
          updateUser({ name, role })
          setIsEditing(false)
        }}
      >
        Save Changes
      </Button>
    </CardContent>
  </Card>
)}

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Frontend Core</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <a href="#" className="hover:underline">github.com/alexchen</a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Senior Frontend Engineer with a passion for building exceptional user interfaces. 
                  Currently leading the internal design system and core platform architecture. 
                  Advocate for web accessibility and performance optimization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex h-32 items-center justify-center rounded-lg border border-dashed bg-muted/50">
                  <p className="text-sm text-muted-foreground">Contribution graph placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
