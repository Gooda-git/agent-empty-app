# Agent Operating Guide

This repository is agent-operated. Durable workflow details live in
`docs/agent-operating-guide.md`.

## Start here

1. Read `docs/README.md`.
2. Read `docs/product-specs/project-charter.md`.
3. Read `ARCHITECTURE.md`.
4. Read `docs/agent-operating-guide.md`.
5. For non-trivial work, create or update an execution plan under
   `docs/exec-plans/active/`.

## Commands

- Setup: `./scripts/agent-setup`
- Validate: `./scripts/agent-validate`
- Optional launch: `./scripts/agent-launch`

## Rules

- Do not commit directly to `main`.
- Every code change goes through a PR.
- Never hardcode secrets.
- Never modify files outside this workspace.
- Keep changes small and reviewable.
