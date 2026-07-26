import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { BarChart3 } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Insights & Analytics" description="Engineering velocity and metrics." />
      {/* TODO(intern): Integrate Recharts and fetch real data points for velocity graphs */}
      <EmptyState 
        icon={BarChart3} 
        title="No data available" 
        description="The analytics module will be built out soon. Stay tuned for charts!" 
      />
    </div>
  );
}
