"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("Mekorita");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [saved, setSaved] = useState(true);

  const handleSave = () => {
    localStorage.setItem(
      "mekorita-workspace-settings",
      JSON.stringify({
        workspaceName,
        timezone,
      })
    );

    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Settings"
        description="Manage your workspace preferences."
      />

      <Card>
        <CardHeader>
          <CardTitle>Workspace Configuration</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Workspace Name
            </label>

            <Input
              value={workspaceName}
              onChange={(e) => {
                setWorkspaceName(e.target.value);
                setSaved(false);
              }}
              placeholder="Enter workspace name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Timezone
            </label>

            <select
              value={timezone}
              onChange={(e) => {
                setTimezone(e.target.value);
                setSaved(false);
              }}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="Asia/Kolkata">Asia/Kolkata</option>
              <option value="America/Los_Angeles">
                America/Los_Angeles
              </option>
              <option value="America/New_York">
                America/New_York
              </option>
              <option value="Europe/London">
                Europe/London
              </option>
            </select>
          </div>

          <Button onClick={handleSave} disabled={saved}>
            {saved ? "Saved" : "Save Changes"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}