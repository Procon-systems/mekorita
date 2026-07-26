"use client"

import { useEffect, useState } from "react"
import { StatCard } from "@/components/shared/stat-card"
import { ProjectCard } from "@/components/shared/project-card"
import { TeamCard } from "@/components/shared/team-card"
import { getProjects, Project } from "@/lib/mock-api/projects"
import { getTeams, Team } from "@/lib/mock-api/teams"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, FolderKanban, Activity, Code2 } from "lucide-react"

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([getProjects(), getTeams()]).then(([p, t]) => {
      setProjects(p)
      setTeams(t)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening across your engineering organization today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Projects"
          value={isLoading ? "-" : projects.filter((p) => p.status === "active").length}
          description="In progress"
          icon={<FolderKanban className="h-4 w-4" />}
          trend="up"
          trendValue="+2"
        />
        <StatCard
          title="Total Members"
          value={isLoading ? "-" : "124"}
          description="Across all teams"
          icon={<Users className="h-4 w-4" />}
          trend="up"
          trendValue="+4%"
        />
        <StatCard
          title="Deployments"
          value={isLoading ? "-" : "8,234"}
          description="Last 30 days"
          icon={<Activity className="h-4 w-4" />}
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Pull Requests"
          value={isLoading ? "-" : "342"}
          description="Open PRs"
          icon={<Code2 className="h-4 w-4" />}
          trend="down"
          trendValue="-14%"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Recent Projects</h2>
          </div>
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-48 rounded-xl" />
              <Skeleton className="h-48 rounded-xl" />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Your Teams</h2>
          </div>
          {isLoading ? (
            <div className="grid gap-4">
              <Skeleton className="h-32 rounded-xl" />
              <Skeleton className="h-32 rounded-xl" />
            </div>
          ) : (
            <div className="grid gap-4">
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
