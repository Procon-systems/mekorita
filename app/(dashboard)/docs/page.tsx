"use client";

import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { PageHeader } from "@/components/shared/page-header";

const defaultContent = `# Team Documentation

Welcome to the internal team wiki.

## Getting Started

Add your documentation here using **Markdown**.

### Useful Resources

- Project guidelines
- Development setup
- API documentation
- Team processes

> Keep this documentation updated as the project evolves.
`;

export default function DocsPage() {
  const [content, setContent] = useState("");
const [isSaved, setIsSaved] = useState(true);

useEffect(() => {
  const savedContent = localStorage.getItem("mekorita-docs");

  if (savedContent) {
    setContent(savedContent);
  } else {
    setContent(defaultContent);
  }
}, []);

  const handleChange = (value?: string) => {
    setContent(value || "");
    setIsSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("mekorita-docs", content);
    setIsSaved(true);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Documentation"
        description="Internal team wiki and design docs."
      />

      <div className="rounded-xl border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Team Wiki
            </h2>

            <p className="text-sm text-muted-foreground">
              Write and format internal documentation using Markdown.
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaved}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>

        <div data-color-mode="light">
          <MDEditor
            value={content}
            onChange={handleChange}
            height={500}
            preview="live"
          />
        </div>
      </div>
    </div>
  );
}