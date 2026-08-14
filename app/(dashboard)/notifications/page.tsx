"use client";

import { useCallback, useEffect, useState } from "react";
import { Bell, Check, CheckCheck, Trash2 } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import {
  getNotifications,
  markAsRead,
  clearAllNotifications,
} from "@/lib/mock-api/notifications";
import { Notification } from "@/types";
import { getActivities, Activity } from "@/lib/mock-api/activity";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchNotifications = useCallback(async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();

    getActivities().then((data) => {
      setActivities(data);
    });

    const interval = setInterval(fetchNotifications, 10000);

    return () => clearInterval(interval);
  }, [fetchNotifications]);

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);

    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleClearAll = async () => {
    await clearAllNotifications();
    setNotifications([]);
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="Stay updated on what's happening."
      />

      {notifications.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {unreadCount} unread notification
            {unreadCount !== 1 ? "s" : ""}
          </p>

          <div className="flex gap-2">
            <button
              onClick={fetchNotifications}
              className="rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              Refresh
            </button>

            <button
              onClick={handleClearAll}
              className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              <Trash2 className="h-4 w-4" />
              Clear all
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-sm text-muted-foreground">
            Loading notifications...
          </p>
        </div>
      ) : notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No notifications yet"
          description="You're all caught up! New alerts will appear here."
        />
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                notification.read
                  ? "bg-background"
                  : "border-primary/30 bg-primary/5"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="mt-1">
                    {notification.read ? (
                      <Check className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <span className="block h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-medium">{notification.title}</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {notification.message}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground">
                      {new Date(notification.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                {!notification.read && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors hover:bg-muted"
                  >
                    <CheckCheck className="h-4 w-4" />
                    Mark read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Activity Feed */}
      <div className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold tracking-tight">
          Activity Feed
        </h2>

        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />

                <div>
                  <p className="font-medium">{activity.user}</p>

                  <p className="text-sm text-muted-foreground">
                    {activity.action} — {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(activity.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}