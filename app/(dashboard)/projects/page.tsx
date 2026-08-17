"use client"

import { useState, useEffect } from "react"
import { getProjects, createProject, Project } from "@/lib/mock-api/projects"
import { KanbanBoard } from "@/components/projects/kanban-board"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Plus, FolderKanban } from "lucide-react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [showForm, setShowForm] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data)
      setIsLoading(false)
    })
  }, [])

  const handleCreateProject = async () => {
    if (!projectName.trim()) {
      return
    }

    setIsCreating(true)

    try {
      const newProject = await createProject({
        name: projectName.trim(),
        description: projectDescription.trim(),
        status: "on_hold",
        progress: 0,
        members: [],
      })

      setProjects((currentProjects) => [
        ...currentProjects,
        newProject,
      ])

      setProjectName("")
      setProjectDescription("")
      setShowForm(false)
    } catch (error) {
      console.error("Failed to create project:", error)
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all engineering initiatives.
          </p>
        </div>

        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {showForm && (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Create New Project</h2>

          <div className="mt-4 space-y-4">
            <Input
              placeholder="Project name"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
            />

            <Input
              placeholder="Project description"
              value={projectDescription}
              onChange={(event) => setProjectDescription(event.target.value)}
            />

            <div className="flex gap-2">
              <Button
                onClick={handleCreateProject}
                disabled={isCreating || !projectName.trim()}
              >
                {isCreating ? "Creating..." : "Create Project"}
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  setShowForm(false)
                  setProjectName("")
                  setProjectDescription("")
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
          />
        </div>

        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      ) : projects.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <FolderKanban className="h-10 w-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            No projects found
          </h2>

          <p className="mt-2 text-center text-sm font-normal leading-6 text-muted-foreground">
            You don't have any projects yet. Create one to get started.
          </p>

          <Button
            className="mt-6"
            onClick={() => setShowForm(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </div>
      ) : (
        <KanbanBoard projects={projects} />
      )}
    </div>
  )
}