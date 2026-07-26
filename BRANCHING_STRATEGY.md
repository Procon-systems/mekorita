# Branching Strategy

We follow a simplified GitFlow model tailored for agile teams.

## Branches
- `main`: The production-ready state of the codebase. All code here is deployable.
- `feature/*`: For new features (e.g., `feature/kanban-board`).
- `bugfix/*`: For fixing bugs (e.g., `bugfix/login-crash`).

## Creating a Pull Request
1. Branch off from `main`.
2. Commit your changes to your feature branch.
3. Open a PR against `main`.
4. Ensure your PR title is descriptive and follows conventional commits (e.g., `feat: add notifications panel`).
