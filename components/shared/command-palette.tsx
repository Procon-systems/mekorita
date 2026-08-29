"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  ListTodo,
  Bell,
  Settings,
  Search,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Tasks", href: "/tasks", icon: ListTodo },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: Settings },
]

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault()
        setOpen(true)
      }

      if (event.key === "Escape") {
        setOpen(false)
        setSearch("")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const filteredNavigation = navigation.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelect = (href: string) => {
    setOpen(false)
    setSearch("")
    router.push(href)
  }

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => setOpen(false)}
    >
      <div
        className="mx-auto mt-24 w-full max-w-lg overflow-hidden rounded-xl border bg-background shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center border-b px-4">
          <Search className="mr-3 h-5 w-5 text-muted-foreground" />

          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search or jump to..."
            className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredNavigation.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              No results found.
            </p>
          ) : (
            <>
              <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                Navigation
              </p>

              {filteredNavigation.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleSelect(item.href)}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm hover:bg-muted"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </button>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}