import { Project } from "@/types";
import { APP_CONFIG } from "@/constants/config";

// Mock Data
let mockProjects: Project[] = [
  {
    id: "p-1",
    name: "Platform V2 Rewrite",
    description: "Migrating legacy services to the new microservices architecture.",
    status: "active",
    progress: 75,
    members: ["u-1", "u-2", "u-3"],
    updatedAt: new Date().toISOString()
  },
  {
    id: "p-2",
    name: "Design System Overhaul",
    description: "Implementing the new design language across all internal tools.",
    status: "active",
    progress: 40,
    members: ["u-1", "u-4"],
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  }
];

const delay = (ms: number = APP_CONFIG.api.mockLatencyMs) => new Promise(res => setTimeout(res, ms));

export async function getProjects(): Promise<Project[]> {
  await delay();
  return [...mockProjects];
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  await delay();
  return mockProjects.find(p => p.id === id);
}

export async function createProject(project: Omit<Project, "id" | "updatedAt">): Promise<Project> {
  await delay();
  const newProject: Project = {
    ...project,
    id: `p-${Date.now()}`,
    updatedAt: new Date().toISOString()
  };
  mockProjects.push(newProject);
  return newProject;
}

export async function updateProject(id: string, updates: Partial<Project>): Promise<Project> {
  await delay();
  const index = mockProjects.findIndex(p => p.id === id);
  if (index === -1) throw new Error("Project not found");
  
  mockProjects[index] = {
    ...mockProjects[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  return mockProjects[index];
}
