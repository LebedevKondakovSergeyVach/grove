# Project map

The binding rules are in [`AGENTS.md`](../AGENTS.md). This map names owners
and flows that are not obvious from the tree; verify a flow in source before
changing it, and update this file in the same change when an owner moves.

## Behavior reference

`src/main.rs` prints the version. Workspace commands are not implemented; the
planned behavior is in `README.md` and `docs/`.

The behavior to preserve is the zsh script at
`/Users/lebedevsergeyvach/Projects/Sequenia/Edna/EdnaChat/chatcenter-demo/repos`.
It stays outside this repository; do not copy it in. It hardcodes one
workspace: modules `demo` (the root), `ui` (`chatcenterui`) and `core`
(`chatcentercore`), and the task prefix `ECM-`. Grove's workspace file makes
modules and the task pattern configurable; neither is a Grove default.

Git operations will call the `git` binary on `PATH`, not libgit2. The script
fetches modules in parallel with background jobs.

## Owners

| Path | Role |
| :--- | :--- |
| `AGENTS.md`, `CLAUDE.md`, `.claude/`, `.cursor/`, `.agents/` | Agent instructions, hooks and skills |
| `.github/workflows/`, `.github/scripts/` | CI, release, Homebrew formula generator ([Git workflow](GIT_WORKFLOW.md)) |
| `.githooks/` | Commit-message attribution and push guards (`git config core.hooksPath .githooks`) |
| `website/` | Documentation site generated from repository Markdown ([`website/AGENTS.md`](../website/AGENTS.md)) |
| `Cargo.toml`, `src/main.rs` | Package `grove-git`; binary `grove` |

## Planned ownership

When the crate grows, one implementation owns module git operations
(invariant 4) and one function owns shell quoting (invariant 3). `shell/` and
the shipped workspace default arrive with that work.
