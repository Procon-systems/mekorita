"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { PageHeader } from "@/components/shared/page-header";

const velocityData = [
  { week: "Week 1", completed: 18, planned: 22 },
  { week: "Week 2", completed: 24, planned: 25 },
  { week: "Week 3", completed: 21, planned: 28 },
  { week: "Week 4", completed: 30, planned: 30 },
  { week: "Week 5", completed: 27, planned: 32 },
  { week: "Week 6", completed: 34, planned: 35 },
];

const cycleTimeData = [
  { week: "Week 1", days: 5.2 },
  { week: "Week 2", days: 4.8 },
  { week: "Week 3", days: 4.5 },
  { week: "Week 4", days: 4.1 },
  { week: "Week 5", days: 3.8 },
  { week: "Week 6", days: 3.5 },
];

const metrics = [
  {
    title: "Velocity",
    value: "34",
    description: "Completed story points",
  },
  {
    title: "Completion Rate",
    value: "91%",
    description: "Planned work completed",
  },
  {
    title: "Cycle Time",
    value: "3.5 days",
    description: "Average completion time",
  },
  {
    title: "Active Projects",
    value: "8",
    description: "Currently in progress",
  },
];

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Insights & Analytics"
        description="Engineering velocity and metrics."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">
              {metric.title}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {metric.value}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">
              Engineering Velocity
            </h2>

            <p className="text-sm text-muted-foreground">
              Planned vs completed story points.
            </p>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="planned" name="Planned" />
                <Bar dataKey="completed" name="Completed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">
              Cycle Time
            </h2>

            <p className="text-sm text-muted-foreground">
              Average number of days to complete work.
            </p>
          </div>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cycleTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="days"
                  name="Days"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}