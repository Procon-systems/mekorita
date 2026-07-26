import { Team } from "@/types";
import { APP_CONFIG } from "@/constants/config";

let mockTeams: Team[] = [
  {
    id: "t-1",
    name: "Frontend Core",
    description: "Responsible for the internal design system and core platform architecture.",
    members: [
      { id: "u-1", name: "Alex Chen", role: "Lead", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
      { id: "u-2", name: "Sarah Jenkins", role: "Senior Engineer", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e" },
    ]
  },
  {
    id: "t-2",
    name: "Growth",
    description: "Experiments and marketing technology.",
    members: [
      { id: "u-3", name: "David Kim", role: "Engineer", avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f" }
    ]
  }
];

const delay = (ms: number = APP_CONFIG.api.mockLatencyMs) => new Promise(res => setTimeout(res, ms));

export async function getTeams(): Promise<Team[]> {
  await delay();
  return [...mockTeams];
}

export async function getTeamById(id: string): Promise<Team | undefined> {
  await delay();
  return mockTeams.find(t => t.id === id);
}

// TODO(intern): Implement createTeam and updateTeam methods for the Teams module.
