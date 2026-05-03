# Repository Knowledge Map

This repo is designed for autonomous agents.

## Product

The first runnable product scaffold is a dependency-free static web app under
`src/`. It presents a project cockpit with the current scaffold focus,
repeatable agent commands, and an interactive launch checklist.

Run it with:

```sh
./scripts/agent-launch
```

Then open `http://localhost:4173`.

## Commands

```sh
./scripts/agent-setup
./scripts/agent-validate
./scripts/agent-launch
```

The `agent-*` scripts are stable harness entry points. Product-specific behavior
lives in `scripts/project-*`.

## Durable knowledge

- `agent-operating-guide.md`: durable agent workflow and PR/review rules.
- `product-specs/`: product behavior, requirements, acceptance criteria.
- `design-docs/`: architecture decisions and alternatives.
- `exec-plans/active/`: active implementation plans.
- `exec-plans/completed/`: completed plans and retrospectives.
- `references/`: external docs converted into stable Markdown.
- `generated/`: generated summaries such as schemas or API maps.

## Rule

Keep `AGENTS.md` short. Put long-lived context here.
