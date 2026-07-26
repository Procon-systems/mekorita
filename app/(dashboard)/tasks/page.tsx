import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { ListTodo } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Tasks" description="My issues and assigned work." />
      {/* TODO(intern): Connect to the mock task API and render an interactive task list */}
      <EmptyState 
        icon={ListTodo} 
        title="No tasks assigned" 
        description="You have zero issues assigned to you. Enjoy your free time!" 
      />
    </div>
  );
}
