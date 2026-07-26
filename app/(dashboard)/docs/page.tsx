import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { FileText } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Documentation" description="Internal team wiki and design docs." />
      {/* TODO(intern): Build a rich markdown editor and document tree view here */}
      <EmptyState 
        icon={FileText} 
        title="Documentation Center" 
        description="The markdown editor module is scheduled for future development." 
      />
    </div>
  );
}
