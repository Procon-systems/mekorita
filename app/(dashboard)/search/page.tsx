import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Global Search" description="Find issues, docs, and people across Mekorita." />
      {/* TODO(intern): Connect to a search service and display rich results across all domains */}
      <EmptyState 
        icon={Search} 
        title="Search coming soon" 
        description="Global search is disabled in this environment." 
      />
    </div>
  );
}
