---
paths:
  - ".github/**"
  - "Cargo.toml"
  - "Cargo.lock"
---

# CI, dependencies and releases

High-risk area: a mistake here publishes. Read the workflow file before stating
what a job does — names are not behaviour. Reference: `.ai/GIT_WORKFLOW.md`,
"What CI runs, and when".

## Workflows

Triggers and jobs: `.ai/GIT_WORKFLOW.md`, "What CI runs, and when". Cautions
that table does not carry:

- `release.yml` runs on every push to `main`. `verify` checks both changelogs,
  the `CARGO_API_KEY` and `HOMEBREW_TAP_TOKEN` secrets and the tap's
  `Formula/grove.rb` before anything is tagged, because a tagged version never
  re-enters the release path from `main`. `publish` tags, publishes bilingual
  notes and replaces the complete formula using its current blob SHA; the
  formula comes from `.github/scripts/homebrew_formula.py`, which validates all
  four archives and checksums first. `crates` then runs `cargo publish
  --locked` with `contents: read`, so a failed upload is retried by re-running
  `crates` alone; a re-dispatch on the tag repeats `publish`.
- `website.yml`'s diff check does not detect unchanged tracked generated pages;
  local verification checks the manifest separately.
- `pages.yml`'s `workflow_dispatch` can deploy another ref; treat that as a
  deliberate act.

Never point `pages.yml` or `release.yml` at a release or task branch, and never
widen a workflow's `permissions` beyond what a step demonstrably needs.

## Versions

- `version` in `Cargo.toml` changes only when a release is cut on
  `release/X.Y.Z`, and must match the branch name — `branch-policy.yml` compares
  them. Never as a side effect of another task. Procedure: `release-manager`.
- `rust-version` and the `toolchain:` of the MSRV job in `ci.yml` change in
  the same commit. Raising them is a user-visible change: changelog entry, and
  say why.
- A `Cargo.toml` change needs both changelog entries. A `cargo update -p` that
  only touches `Cargo.lock` does not trigger CI's check — a security fix still
  deserves a `### Security` entry (`cargo-audit` skill).
- Dependabot opens grouped updates weekly for cargo and npm (`/website`),
  monthly for GitHub Actions.

## Crate identity

| Role | Name |
| :--- | :--- |
| crates.io package (`cargo install`, `cargo uninstall`) | `grove-git` (`grove` is taken) |
| Binary target, shell init, Homebrew formula, release archives | `grove` |

`exclude` in `Cargo.toml` keeps agent tooling, CI and site sources out of the
published crate; check `cargo package --list` after adding a top-level path.

## Before you push a change here

Run the gate from `AGENTS.md`. For workflow YAML, also reread the whole job you
edited: a typo in an `if:` silently skips a job rather than failing it.
