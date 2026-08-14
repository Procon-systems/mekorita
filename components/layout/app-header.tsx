"use client"

import Link from "next/link"
import { Bell, Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useAuth } from "@/hooks/use-auth"
import { useEffect, useState } from "react"
import {
  getNotifications,
  addMockNotification,
} from "@/lib/mock-api/notifications"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu" // For now, we will create a simple dropdown menu or just use native if we don't have it built fully.

// Actually, since I didn't build a full Dropdown Menu component, I'll build a simplified header first.

export function AppHeader() {
  const { setTheme, theme } = useTheme()
  const { user, logout } = useAuth()
  const [unreadCount, setUnreadCount] = useState(0)
  useEffect(() => {
  const fetchUnreadCount = async () => {
    const notifications = await getNotifications()

    const unread = notifications.filter(
      (notification) => !notification.read
    ).length

    setUnreadCount(unread)
  }

  fetchUnreadCount()

  const interval = setInterval(async () => {
    await addMockNotification()
    await fetchUnreadCount()
  }, 10000)

  return () => clearInterval(interval)
}, [])

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-6">
      <div className="flex w-full max-w-md items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search everywhere..."
          className="h-9 border-none bg-transparent shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Link href="/notifications">
  <Button variant="ghost" size="icon" className="relative">
    <Bell className="h-5 w-5" />

    {unreadCount > 0 && (
  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
)}
  </Button>
</Link>


        <div className="flex items-center gap-2 pl-2 border-l">
          <Avatar>
            <AvatarImage src={user?.avatarUrl} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div className="hidden flex-col md:flex">
            <span className="text-sm font-medium">{user?.name}</span>
            <span className="text-xs text-muted-foreground">{user?.role}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={logout} className="ml-2 text-xs text-muted-foreground hover:text-foreground">
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
