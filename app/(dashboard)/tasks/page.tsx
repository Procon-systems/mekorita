"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  User,
} from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import {
  getTasks,
  updateTaskStatus,
  Task,
  TaskStatus,
} from "@/lib/mock-api/tasks";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (
    id: string,
    status: TaskStatus
  ) => {
    await updateTaskStatus(id, status);

    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, status }
          : task
      )
    );
  };

  const getPriorityClass = (priority: Task["priority"]) => {
    if (priority === "high") {
      return "bg-red-100 text-red-700";
    }

    if (priority === "medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-green-100 text-green-700";
  };

  const getStatusClass = (status: TaskStatus) => {
    if (status === "completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "in-progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tasks"
        description="My issues and assigned work."
      />

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-sm text-muted-foreground">
            Loading tasks...
          </p>
        </div>
      ) : tasks.length === 0 ? (
        <div className="rounded-lg border p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <ListTodo className="h-10 w-10 text-muted-foreground" />

            <h2 className="mt-4 font-semibold">
              No tasks assigned
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              You have no tasks assigned to you.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {task.status === "completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock3 className="h-5 w-5 text-muted-foreground" />
                    )}

                    <h2 className="font-semibold">
                      {task.title}
                    </h2>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${getPriorityClass(
                        task.priority
                      )}`}
                    >
                      {task.priority.toUpperCase()}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClass(
                        task.status
                      )}`}
                    >
                      {task.status === "in-progress"
                        ? "IN PROGRESS"
                        : task.status.toUpperCase()}
                    </span>

                    <span className="text-muted-foreground">
                      Due: {task.dueDate}
                    </span>

                    <span className="flex items-center gap-1 text-muted-foreground">
                      <User className="h-4 w-4" />
                      {task.assignedTo}
                    </span>
                  </div>
                </div>

                <select
                  value={task.status}
                  onChange={(e) =>
                    handleStatusChange(
                      task.id,
                      e.target.value as TaskStatus
                    )
                  }
                  className="rounded-md border bg-background px-3 py-2 text-sm"
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">
                    In Progress
                  </option>
                  <option value="completed">
                    Completed
                  </option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
