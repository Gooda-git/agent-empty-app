# Architecture

This repository currently contains an agent harness but no product implementation.

## Current components

- Agent harness documentation.
- Local validation scripts.
- CI workflow.
- Symphony workflow files.
- GitHub PR/status gate configuration.

## Future product architecture

The builder agent must update this file when it creates the first application scaffold.

## Required commands

- Setup: `./scripts/agent-setup`
- Validate: `./scripts/agent-validate`
- Launch: `./scripts/agent-launch`

## Constraints

- No secrets in source control.
- No direct commits to main.
- No human PR approval requirement.
- Every merge must pass CI and agent-review.
