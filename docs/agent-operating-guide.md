# Agent Operating Guide

This repository is operated by agents from Linear issue intake through PR review
and merge. Keep changes small, documented, and validated by machine evidence.

## Workflow

1. Read `docs/README.md`, `docs/product-specs/project-charter.md`, and
   `ARCHITECTURE.md`.
2. For non-trivial work, create or update an execution plan under
   `docs/exec-plans/active/`.
3. Work on a branch named `agent/<LINEAR-ISSUE-ID>` from `origin/main`.
4. Keep one Linear comment titled `## Agent Workpad` updated with plan, branch,
   PR URL, validation evidence, and blockers.
5. Run `./scripts/agent-setup` and `./scripts/agent-validate` before opening or
   updating a PR.
6. Open a PR whose title includes the Linear issue identifier.
7. Move the Linear issue to `Agent Review` only after validation passes and the
   PR is ready.

## Required Commands

- Setup: `./scripts/agent-setup`
- Validate: `./scripts/agent-validate`
- Launch: `./scripts/agent-launch`

The agent commands are stable wrappers. Product-specific behavior belongs in
`scripts/project-setup`, `scripts/project-validate`, and
`scripts/project-launch`.

## PR Requirements

The PR body must include:

- Linear issue URL
- Summary
- Validation evidence
- Risk notes

## Blocking Review Failures

- Security or authentication regressions.
- Secret exposure.
- Data loss or corruption risk.
- Broken setup or validation commands.
- Tests removed without replacement.
- New behavior without a matching product spec or architecture update.
- Large unrelated changes.
- Happy-path-only behavior where edge cases matter.

List non-blocking findings as follow-up issues instead of blocking merge.
