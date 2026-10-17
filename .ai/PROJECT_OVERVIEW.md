# Project map

Grove 0.1.0 is an MVP. The only branch is `main`.

Grove is a Rust CLI for a workspace of related git repositories. The command
name is `grove`. The Cargo package name is `grove-git`. GitHub repository:
<https://github.com/LebedevKondakovSergeyVach/grove>.

The binding rules are in [`AGENTS.md`](../AGENTS.md). This is a map, not a file
inventory: verify the relevant flow in source before changing it. Update this
document in the same change when a named owner or flow changes.

## Behavior reference

`src/main.rs` prints the version. Workspace git commands are not implemented.
Do not invent the planned modules ahead of their implementation.

Behavior to preserve is the zsh script at
`/Users/lebedevsergeyvach/Projects/Sequenia/Edna/EdnaChat/chatcenter-demo/repos`.
That file stays outside this repository. Do not copy it in. It hardcodes one
workspace (module paths `chatcenterui` and `chatcentercore`, task prefix
`ECM-`). Grove's workspace file must make those configurable.

Git operations go through the `git` binary (`std::process::Command`), not
libgit2. Parallel fetch may use threads. The first slice is status, switch,
fetch, preflight, rollback, and the workspace file. A TUI is later.

## What is already in the tree

| Path | Role |
| :--- | :--- |
| `AGENTS.md`, `.claude/`, `.cursor/`, `.agents/` | Agent instructions |
| `.github/` | CI and release workflows. Not published yet |
| `.githooks/` | Attribution and push guards. Enabled with `git config core.hooksPath .githooks` |
| `website/` | Documentation site scaffold. Not published yet |
| `Cargo.toml`, `src/main.rs` | Package `grove-git` 0.1.0. The binary prints its version |

## Planned ownership

When the rest of the crate is added, one implementation owns module git
operations and shell quoting. The planned modules are a library root, a clap
tree, config, git operations, one module per command, and a typed error. The
shell directory and the shipped workspace default are added with that work.
The bin name is already `grove`. `release.yml` packs `target/<target>/release/grove`.

## Release

`.github/workflows/release.yml` tags and publishes GitHub release archives.
It does not update Homebrew. The `grove` formula is not in
[homebrew-tap](https://github.com/LebedevKondakovSergeyVach/homebrew-tap)
until a release tarball and its sha256 exist. Do not point the workflow at the
other formula in that tap.
