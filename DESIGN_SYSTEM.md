# Design System

Mekorita uses a custom design system heavily inspired by modern enterprise SaaS applications, built on top of `shadcn/ui` and `Tailwind CSS v4`.

## Core Principles
- **Subtle and Premium**: Use rounded corners, soft shadows, and muted borders.
- **Micro-interactions**: Use `framer-motion` for subtle entrance animations (e.g., page loads, list items staggering in).
- **Accessibility**: Ensure sufficient contrast ratios and proper ARIA labels on all interactive elements.

## Components
Always check the `components/ui/` and `components/shared/` folders before building a new component. If you need a button, card, input, or dialog, it likely already exists.

## Theming
We use `next-themes`. Ensure your components look good in both light and dark mode by using Tailwind's `dark:` modifier or relying on semantic CSS variables (e.g., `bg-background`, `text-foreground`, `bg-muted`).
