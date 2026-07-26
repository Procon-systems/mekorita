import { Notification } from "@/types";
import { APP_CONFIG } from "@/constants/config";

let mockNotifications: Notification[] = [
  {
    id: "n-1",
    title: "Project Update",
    message: "Sarah Jenkins pushed a new commit to Platform V2 Rewrite.",
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: "n-2",
    title: "Meeting Reminder",
    message: "Frontend Weekly Sync in 15 minutes.",
    read: true,
    createdAt: new Date(Date.now() - 3600000).toISOString()
  }
];

const delay = (ms: number = APP_CONFIG.api.mockLatencyMs) => new Promise(res => setTimeout(res, ms));

export async function getNotifications(): Promise<Notification[]> {
  await delay();
  return [...mockNotifications];
}

export async function markAsRead(id: string): Promise<void> {
  await delay();
  const notif = mockNotifications.find(n => n.id === id);
  if (notif) notif.read = true;
}

// TODO(intern): Add clearAllNotifications method
