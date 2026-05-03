# Agent Operating Guide

This repository starts as an empty product repository with an agent-first harness.
Humans define intent in Linear and docs. Agents implement, review, fix, and merge.

## Non-negotiable workflow

- Do not commit directly to `main`.
- Every code change must go through a PR.
- PRs are opened, reviewed, fixed, and merged by agents.
- Human approval is not required for normal flow.
- The required gate is machine evidence: CI plus `agent-review`.
- Never hardcode secrets.
- Never modify files outside the current workspace.
- Keep changes small and reviewable.

## Start here

1. Read `docs/README.md`.
2. Read `docs/product-specs/project-charter.md`.
3. Read `ARCHITECTURE.md`.
4. For non-trivial work, create or update an execution plan under `docs/exec-plans/active/`.

## Commands

- Setup: `./scripts/agent-setup`
- Validate: `./scripts/agent-validate`
- Optional launch: `./scripts/agent-launch`

## Branch and PR convention

- Branch name: `agent/<LINEAR-ISSUE-ID>-short-slug`
- PR title must include the Linear issue identifier.
- PR body must include:
  - Summary
  - Validation evidence
  - Risk notes
  - Linear issue URL

## Review guidelines

Treat the following as blocking review failures:

- Security or auth regressions.
- Secret exposure.
- Data loss or data corruption risk.
- Broken setup or validation commands.
- Tests removed without replacement.
- New behavior without product-spec or architecture update.
- Large unrelated changes.
- Code that passes happy-path tests but lacks edge-case handling.

Non-blocking findings should be listed as follow-up issues instead of blocking merge.
