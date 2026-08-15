"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { Project } from "@/types";
import { updateProject } from "@/lib/mock-api/projects";

type ColumnId = "on_hold" | "active" | "completed";

const columns: {
  id: ColumnId;
  title: string;
}[] = [
  {
    id: "on_hold",
    title: "To Do",
  },
  {
    id: "active",
    title: "In Progress",
  },
  {
    id: "completed",
    title: "Done",
  },
];

interface KanbanBoardProps {
  projects: Project[];
}

function ProjectCard({
  project,
  isDragging = false,
}: {
  project: Project;
  isDragging?: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: project.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`cursor-grab rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md active:cursor-grabbing ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h3 className="font-semibold">{project.name}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function KanbanColumn({
  column,
  projects,
}: {
  column: (typeof columns)[number];
  projects: Project[];
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[500px] flex-1 flex-col rounded-xl border p-4 transition-colors ${
        isOver ? "bg-primary/10" : "bg-muted/30"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">{column.title}</h2>

        <span className="rounded-full bg-background px-2 py-1 text-xs text-muted-foreground">
          {projects.length}
        </span>
      </div>

      <SortableContext
        items={projects.map((project) => project.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="min-h-[420px] space-y-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export function KanbanBoard({ projects }: KanbanBoardProps) {
  const [projectList, setProjectList] = useState(projects);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const findProject = (id: string) => {
    return projectList.find((project) => project.id === id);
  };

  const findColumn = (id: string): ColumnId | undefined => {
    if (columns.some((column) => column.id === id)) {
      return id as ColumnId;
    }

    const project = findProject(id);

    return project?.status;
  };

  const handleDragStart = (event: {
    active: {
      id: string | number;
    };
  }) => {
    const project = findProject(String(event.active.id));

    if (project) {
      setActiveProject(project);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveProject(null);

    if (!over) {
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);

    const project = findProject(activeId);

    if (!project) {
      return;
    }

    const newStatus = findColumn(overId);

    if (!newStatus || newStatus === project.status) {
      return;
    }

    const previousProjects = projectList;

    // Update UI immediately
    setProjectList((currentProjects) =>
      currentProjects.map((item) =>
        item.id === project.id
          ? {
              ...item,
              status: newStatus,
            }
          : item
      )
    );

    try {
      // Update mock API
      await updateProject(project.id, {
        status: newStatus,
      });
    } catch (error) {
      console.error("Failed to update project status:", error);

      // Restore previous state if API fails
      setProjectList(previousProjects);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((column) => {
          const columnProjects = projectList.filter(
            (project) => project.status === column.id
          );

          return (
            <KanbanColumn
              key={column.id}
              column={column}
              projects={columnProjects}
            />
          );
        })}
      </div>

      <DragOverlay>
        {activeProject ? (
          <ProjectCard
            project={activeProject}
            isDragging
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
