# Architecture

Mekorita uses a modern feature-based architecture built on Next.js 15 App Router.

## Directory Structure
- `app/`: Next.js App Router pages and layouts. Grouped by `(auth)` and `(dashboard)`.
- `components/`: React components.
  - `ui/`: Shadcn-ui primitive components (buttons, inputs, etc).
  - `shared/`: Highly reusable composite components (PageHeader, EmptyState).
  - `layout/`: Global layout components (Sidebar, Header).
- `lib/`: Utility functions and services.
  - `mock-api/`: Simulated backend services with artificial latency.
  - `services/`: Business logic services (e.g., Auth service).
- `types/`: Global TypeScript definitions.
- `constants/`: Global static configurations (Routes, Configs).
- `hooks/`: Custom React hooks.

## State Management
- Currently using React Context for global state (Auth).
- Component-level state is managed via `useState` / `useReducer`.
- Server state (data fetching) will eventually be managed by SWR or React Query (currently raw `useEffect` in some places).

## Styling
- Tailwind CSS v4.
- CSS Variables for theming (dark/light mode).
