export type TaskStatus = "todo" | "in-progress" | "completed"
export type TaskPriority = "low" | "medium" | "high"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string
  assignedTo: string
}

const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Update dashboard UI",
    description: "Improve the dashboard layout and responsiveness.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-08-18",
    assignedTo: "Alex Chen",
  },
  {
    id: "task-2",
    title: "Fix notification badge",
    description: "Make sure the unread notification count appears on the bell.",
    status: "todo",
    priority: "medium",
    dueDate: "2026-08-20",
    assignedTo: "Alex Chen",
  },
  {
    id: "task-3",
    title: "Review activity feed",
    description: "Review the activity feed implementation and UI.",
    status: "completed",
    priority: "low",
    dueDate: "2026-08-15",
    assignedTo: "Alex Chen",
  },
]

const delay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export async function getTasks(): Promise<Task[]> {
  await delay()
  return [...mockTasks]
}

export async function updateTaskStatus(
  id: string,
  status: TaskStatus
): Promise<void> {
  await delay()

  const task = mockTasks.find((task) => task.id === id)

  if (task) {
    task.status = status
  }
}