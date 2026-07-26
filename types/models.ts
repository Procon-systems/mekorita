export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on_hold";
  progress: number;
  members: string[]; // User IDs
  updatedAt: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}
