# 0001 Stack Selection

## Status

Accepted

## Date

2026-05-03

## Context

The project starts from an agent harness with no product implementation. GOO-5
asks for the first minimal runnable scaffold, repeatable setup, validation, and
launch commands, plus enough documentation for future agents to continue.

The first stack should minimize operational risk while proving the repository can
run a useful vertical slice in CI and locally.

## Decision

Use a dependency-free static web app:

- HTML in `src/index.html`
- CSS in `src/styles.css`
- JavaScript in `src/app.js`
- Node.js only for validation scripts
- Python's built-in HTTP server for local launch

The initial product slice is a compact project cockpit that shows the current
agent-built scaffold focus, repeatable commands, and an interactive launch
checklist.

## Rationale

- No package installation is required, so setup is fast and deterministic.
- CI can run the same `./scripts/agent-validate` command as local agents.
- Static assets are easy for independent review agents to inspect.
- The app remains runnable in any environment with Node.js 20+ and Python 3.
- The stack can be replaced later if product requirements justify a framework.

## Alternatives Considered

### Vite and React

- Pros: strong ecosystem, good development ergonomics, easy path to richer UI.
- Cons: adds dependency installation and package lock churn before the product
  needs component-level complexity.
- Decision: defer until a later issue needs it.

### Next.js

- Pros: production-ready full-stack framework, routing, deployment patterns.
- Cons: too much framework surface for the first static vertical slice.
- Decision: reject for now.

### Plain HTML without JavaScript

- Pros: simplest possible runtime.
- Cons: would not demonstrate client-side behavior or state.
- Decision: use a tiny JavaScript file for an interactive checklist.

## Consequences

- Future feature work should keep this static structure until requirements need
  routing, persistence, server APIs, or build tooling.
- `scripts/project-setup`, `scripts/project-validate`, and
  `scripts/project-launch` are the stable product command surface under the
  existing agent harness.
- Validation intentionally checks source structure and JavaScript syntax without
  relying on external packages.
