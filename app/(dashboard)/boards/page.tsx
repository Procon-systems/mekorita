import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { KanbanSquare } from "lucide-react";

export default function BoardsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Boards" description="Agile boards for project management." />
      {/* TODO(intern): Implement drag-and-drop Kanban board using dnd-kit */}
      <EmptyState 
        icon={KanbanSquare} 
        title="No boards configured" 
        description="Kanban functionality is coming soon. Create a board to organize issues." 
      />
    </div>
  );
}
