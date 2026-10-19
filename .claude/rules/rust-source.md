---
paths:
  - "src/**"
---

# Rust source

The invariants are in `AGENTS.md`, "Product invariants". This file holds the
mechanics.

## Current crate

`src/main.rs` is the only source file: it prints `grove <version>` and parses no
arguments. There is no library target, no `tests/` directory and no locale
files. Planned behavior is specified by `README.md` and `docs/*.md`; build it
from there, not from names that do not exist yet.

## Adding code

- A new subcommand or flag also changes `README.md` + `README.ru.md`, the
  matching `docs/*.md` + `.ru.md`, and both changelogs. Flag names and exit
  codes are interface: renaming one is not a patch release
  (`.ai/GIT_WORKFLOW.md`, "Choosing the number").
- Workspace, settings and language resolution follow `docs/CONFIGURATION.md`
  (flag, then environment variable, then file). Decide new flag names there
  first.
- The first user-facing strings introduce the English and Russian catalogs and
  a test that both define the same non-empty keys (`AGENTS.md`, invariant 1).

## Tests

- Named as sentences stating the guarantee
  (`switch_aborts_when_any_module_is_dirty`); one behavior per test.
- Pure logic: `#[cfg(test)] mod tests` beside the code. Argv, exit codes and
  files: integration tests under `tests/`.
- Tests never read or write the real home configuration; point workspace and
  settings at temporary paths. Git tests use temporary repositories and no
  network remotes.
- A bug fix comes with the test that fails without it.

## Lints and docs

Lint levels live in `[lints]` of `Cargo.toml`: `unsafe_code = "forbid"`,
`missing_docs = "warn"` (an error under CI's `-D warnings`). An `# Errors`
section on fallible public functions is a convention; no lint enforces it.

## Library APIs

Look crate APIs up through Context7 (`AGENTS.md`, "Skills and documentation
tools") rather than recalling them. Check the version in `Cargo.lock` first and
prefer version-specific documentation; resolve the library ID at query time.
