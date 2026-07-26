# Coding Guidelines

To ensure the Mekorita codebase remains maintainable, scalable, and easy to read, please adhere to the following guidelines.

## TypeScript
- **Strict Mode**: `tsconfig.json` has `strict` set to true. Do not disable it.
- **No `any`**: Avoid using `any`. Use `unknown` if the type is truly unknown, or define a proper interface.
- **Interfaces**: Define all domain models in `types/models.ts`.

## React & Next.js
- **Server vs Client**: Default to Server Components. Only add `"use client"` when you need interactivity (hooks, event listeners).
- **Hooks**: Abstract complex logic into custom hooks in the `hooks/` directory.
- **Props**: Destructure props in the function signature.

## Naming Conventions
- **Files**: Use `kebab-case` for file names (e.g., `page-header.tsx`).
- **Components**: Use `PascalCase` for React components.
- **Functions/Variables**: Use `camelCase`.
- **Constants**: Use `UPPER_SNAKE_CASE` (e.g., `APP_CONFIG`).

## Styling
- Use the `cn()` utility function from `lib/utils.ts` to merge Tailwind classes conditionally.
