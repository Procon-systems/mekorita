import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div 
      className={cn("flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/10 p-8 text-center animate-in fade-in duration-500", className)} 
      {...props}
    >
      {Icon && (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
          <Icon className="h-10 w-10 text-primary" />
        </div>
      )}
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 mb-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  )
}
