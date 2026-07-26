import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notifications" description="Stay updated on what's happening." />
      {/* TODO(intern): Fetch notifications from mock API and render them here */}
      <EmptyState 
        icon={Bell} 
        title="No notifications yet" 
        description="You're all caught up! New alerts will appear here." 
      />
    </div>
  );
}
