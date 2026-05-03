# Architecture

This repository contains an agent harness and the first minimal runnable product
scaffold.

## Current components

- Agent harness documentation in `AGENTS.md`, `docs/README.md`, and
  `docs/agent-operating-guide.md`.
- Product charter in `docs/product-specs/project-charter.md`.
- Stack decision note in `docs/design-docs/0001-stack-selection.md`.
- Static product app in `src/`.
- Source validation in `tests/static-validate.mjs`.
- Local setup, validation, and launch scripts in `scripts/`.
- CI workflow that runs the same setup and validation commands as agents.
- Symphony workflow files and GitHub PR/status gate configuration.

## Product Architecture

The initial product is a dependency-free static web app:

- `src/index.html` defines the document structure and accessible content.
- `src/styles.css` defines responsive layout and visual styling.
- `src/app.js` renders the interactive launch checklist and progress state.

There is no backend, database, authentication, package installation, or build
step in this first scaffold. Future issues should add those only when product
requirements justify the extra operational surface.

## Validation Architecture

`./scripts/agent-validate` checks the agent harness and delegates to
`./scripts/project-validate`. Project validation checks required scaffold files,
JavaScript syntax, and static source invariants using Node.js built-ins.

`./scripts/agent-setup` delegates to `./scripts/project-setup`, which verifies
Node.js 20+ and Python 3 are available.

`./scripts/agent-launch` delegates to `./scripts/project-launch`, which serves
`src/` with Python's built-in HTTP server on `PORT` or `4173`.

## Required commands

- Setup: `./scripts/agent-setup`
- Validate: `./scripts/agent-validate`
- Launch: `./scripts/agent-launch`

## Constraints

- No secrets in source control.
- No direct commits to main.
- No human PR approval requirement.
- Every merge must pass CI and agent-review.
