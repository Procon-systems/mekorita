"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  FileText,
  BarChart3
} from "lucide-react"

import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Insights", href: "/insights", icon: BarChart3 },
  { name: "Profile", href: "/profile", icon: Settings },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 p-1">
          <img src="/logoPng.png" alt="Mekorita" className="h-full w-full object-contain" />
        </div>
        <span className="text-xl font-bold tracking-tight">Mekorita</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <Link
          href="/docs"
          className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <FileText className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground" />
          Documentation
        </Link>
      </div>
    </div>
  )
}
