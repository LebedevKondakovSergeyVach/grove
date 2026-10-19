# Contributing

Grove 0.1.0 is an MVP, so the process is short. The rules agents and humans share are in [`AGENTS.md`](AGENTS.md); this file points to them instead of repeating them.

## Getting set up

Requires Rust 1.88 or newer (edition 2024). Install it with [rustup](https://rustup.rs).

<!--site:steps-->

1. **Clone the repository**
   ```bash
   git clone https://github.com/LebedevKondakovSergeyVach/grove.git
   cd grove
   ```

2. **Enable the Git hooks** (once per clone)
   ```bash
   git config core.hooksPath .githooks
   ```

3. **Build and run**
   ```bash
   cargo build
   cargo run
   ```

<!--site:/steps-->

`cargo run` prints the version. Workspace commands are not implemented yet.

## Before you commit

Run what CI runs. Warnings are build failures.

```bash
cargo fmt --all -- --check && cargo clippy --all-targets --locked -- -D warnings && cargo test --locked
```

If you changed `README*.md`, `docs/`, `CONTRIBUTING.md`, `CHANGELOG*.md`, `assets/` or `website/`, also run the site gate:

```bash
cd website && npm ci && npm test && npm run build
```

The site build fails on a dead internal link.

## Things that are easy to get wrong

The full list is "Product invariants" in [`AGENTS.md`](AGENTS.md). In short:

- Every user-facing string exists in English and Russian.
- Never overwrite a configuration file that failed to parse.
- Quote any value a shell will evaluate.
- A failing command returns a non-zero exit status.
- `grove switch` is all-or-nothing: a failed preflight changes nothing, and a failure part way rolls back.
- No private hosts, ticket prefixes or module paths in defaults.

## Documentation

Change commands or configuration in both languages: `README.md` and `README.ru.md`, the matching `docs/X.md` and `docs/X.ru.md`, and `CHANGELOG.md` and `CHANGELOG.ru.md`. This file has no Russian twin.

These files are also the documentation website, so keep them plain CommonMark: no JSX and no `import` line. Site-only structure is written as `<!--site:...-->` comments, which GitHub renders as nothing. The syntax is in `website/AGENTS.md`.

## Changelog

A change to `src/`, `locales/`, `shell/`, `configs/` or `Cargo.toml` needs an entry under `## [Unreleased]` in `CHANGELOG.md` **and** the matching entry in `CHANGELOG.ru.md`. Write it for the person upgrading.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `perf:`, `ci:`, `build:`. Stage files by name.

Do not add tool attribution to a commit or a pull request: no `Co-Authored-By:` line, no "Generated with" line. The `commit-msg` hook rejects them. Do not bypass hooks with `--no-verify`.

## Branches and releases

<!--site:steps-->

1. Version 0.1.0 is an MVP. Commit on `main`. It is the only branch.
2. Do not push `main` and do not create or push a tag. A push to `main` runs the publishing pipeline, and the `pre-push` hook refuses both.
3. Once a `release/X.Y.Z` branch is open, work lands there and `main` only changes when a release is merged into it. The rules are in [`.ai/GIT_WORKFLOW.md`](.ai/GIT_WORKFLOW.md).

<!--site:/steps-->

Cutting a release is for maintainers. A release builds the archives, tags `vX.Y.Z`, creates the GitHub release, updates the Homebrew tap and publishes the crate. Never tag by hand as part of another change.

## Layout

<!--site:filetree-->

- README.md
- docs/
- website/ documentation site, generated from the Markdown above
- .github/ CI workflows
- .ai/ project map, Git workflow and verification guides
- AGENTS.md rules for AI agents

<!--site:/filetree-->

## Using an AI agent

Point it at [`AGENTS.md`](AGENTS.md) first. `.ai/PROJECT_OVERVIEW.md` maps ownership and execution flows.
