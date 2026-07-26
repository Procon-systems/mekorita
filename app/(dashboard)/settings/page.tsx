import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage your workspace preferences." />
      {/* TODO(intern): Create forms for profile settings, notification preferences, and API keys */}
      <EmptyState 
        icon={Settings} 
        title="Settings page under construction" 
        description="Workspace settings are currently locked." 
      />
    </div>
  );
}
