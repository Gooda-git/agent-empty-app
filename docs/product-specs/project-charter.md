# Project Charter

## Product name

TBD

## Goal

Start from an empty repository and let agents create the first runnable product scaffold.

## Default technical direction

If the Linear issue does not specify a stack, the builder agent should:

1. Propose a minimal stack in `docs/design-docs/0001-stack-selection.md`.
2. Choose the simplest stack that satisfies the issue.
3. Create setup, validation, and launch commands.
4. Keep the first vertical slice intentionally small.

## Quality bar

- The project must have a repeatable setup command.
- The project must have a repeatable validation command.
- CI must run the same validation command as local agents.
- Docs must explain how to continue development.

## Migration notes

To reuse this harness in another project:

1. Copy `AGENTS.md`, `ARCHITECTURE.md`, `docs/`, `scripts/`, `.github/`, and `WORKFLOW.*.md`.
2. Update this charter.
3. Update Linear project slug and GitHub repo env vars.
4. Keep branch protection and agent-review status gate.
