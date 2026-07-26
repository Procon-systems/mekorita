import { User } from "@/types";
import { APP_CONFIG } from "@/constants/config";

const mockUsers: User[] = [
  {
    id: "u-1",
    email: "alex@mekorita.dev",
    name: "Alex Chen",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    role: "Senior Engineer",
  }
];

const delay = (ms: number = APP_CONFIG.api.mockLatencyMs) => new Promise(res => setTimeout(res, ms));

export async function login(email: string, password: string): Promise<User> {
  await delay(800); // login takes slightly longer

  const user = mockUsers.find((u) => u.email === email);
  if (!user || password !== "password123") {
    throw new Error("Invalid email or password");
  }

  return user;
}
