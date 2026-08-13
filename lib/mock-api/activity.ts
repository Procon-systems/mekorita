export interface Activity {
  id: string
  user: string
  action: string
  description: string
  createdAt: string
}

let mockActivities: Activity[] = [
  {
    id: "a-1",
    user: "Sarah Jenkins",
    action: "Pushed a commit",
    description: "Updated Platform V2 Rewrite",
    createdAt: new Date().toISOString(),
  },
  {
    id: "a-2",
    user: "Alex Morgan",
    action: "Updated documentation",
    description: "Added project setup instructions",
    createdAt: new Date(Date.now() - 300000).toISOString(),
  },
  {
    id: "a-3",
    user: "Engineering Team",
    action: "Created a project",
    description: "Started a new frontend project",
    createdAt: new Date(Date.now() - 600000).toISOString(),
  },
]

export async function getActivities(): Promise<Activity[]> {
  return [...mockActivities]
}