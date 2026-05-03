# GOO-5 Bootstrap Scaffold Execution Plan

## Goal

Create the first minimal runnable product scaffold from the empty harness.

## Scope

- Select and document the initial stack.
- Add a small runnable product surface.
- Add project setup, validation, and launch scripts.
- Update architecture and agent-facing docs.
- Validate through the existing agent harness.
- Publish a PR for independent agent review.

## Plan

1. Read existing harness docs and scripts.
2. Move Linear issue to `In Progress` and maintain the `## Agent Workpad`
   comment.
3. Create branch `agent/GOO-5` from `origin/main`.
4. Implement a dependency-free static web app under `src/`.
5. Add `scripts/project-setup`, `scripts/project-validate`, and
   `scripts/project-launch`.
6. Document the stack decision in `docs/design-docs/0001-stack-selection.md`.
7. Update `ARCHITECTURE.md`, `docs/README.md`, and concise agent guidance.
8. Run `./scripts/agent-setup`, `./scripts/agent-validate`, and a launch smoke
   check.
9. Commit, push, open a PR, and move Linear to `Agent Review`.

## Validation Evidence

- `./scripts/agent-setup` passed.
- `./scripts/agent-validate` passed.
- `./scripts/agent-launch` printed exact launch instructions because the local
  sandbox cannot bind a server socket.

## Notes

The branch is `agent/GOO-5` from `origin/main`. No setup, validation, launch,
git, or GitHub blockers remain in this workspace.
