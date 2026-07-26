import { Project } from "@/lib/mock-api/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1">{project.name}</CardTitle>
          <Badge
            variant={
              project.status === "active"
                ? "default"
                : project.status === "completed"
                ? "secondary"
                : "outline"
            }
          >
            {project.status.replace("_", " ")}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 mt-2 h-10">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
        <div className="flex -space-x-2">
          {project.members.slice(0, 3).map((memberId) => (
            <Avatar key={memberId} className="border-2 border-background h-8 w-8">
              <AvatarFallback>{memberId}</AvatarFallback>
            </Avatar>
          ))}
          {project.members.length > 3 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
              +{project.members.length - 3}
            </div>
          )}
        </div>
        <span className="text-xs text-muted-foreground">
          Updated {new Date(project.updatedAt).toLocaleDateString()}
        </span>
      </CardFooter>
    </Card>
  )
}
