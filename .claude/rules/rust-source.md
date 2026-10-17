---
paths:
  - "src/**"
---

# Rust source, tests and locales

The invariants are in `AGENTS.md`, "Product invariants". This file holds the
mechanics.

## Translations

- `i18n.t("key")` for a plain string, `i18n.format("key", &[a, b])` for `{}`
  placeholders. Keys in `locales/*.json` are kept in alphabetical order.
- Tests next to the translation loader assert both locales define the same
  keys and no value is empty; `main.rs` asserts every subcommand has a
  `cmd_<name>` key. Without that key `--help` prints the raw key.
- Command doc comments stay bilingual, using the format
  `/// English translation | Russian translation`.
  They are the static fallback; `main.rs` swaps in `cmd_<name>` at runtime.
- Error text inside `GroveError` is English. Attach the translated sentence as
  `anyhow` context so the user reads their language first:

  ```rust
  return Err(GroveError::ModuleNotFound(name.to_string()))
      .context(i18n.format("module_not_found", &[name]));
  ```

  A new `GroveError` variant only when a caller needs to match on it.

## A new subcommand or flag touches all of these

The clap command tree (variant + bilingual doc), its handler (one module per
command, or the dispatch in `src/main.rs`), `cmd_<name>` and any labels in both
locales, tests,
`README.md` + `README.ru.md`, the matching `docs/*.md` + `.ru.md`, and both
changelogs. Flag names and exit codes are interface: renaming one is not a
patch release (`.ai/GIT_WORKFLOW.md`, "Choosing the number").

## Tests

- Named as sentences stating the guarantee
  (`switch_aborts_when_any_module_is_dirty`); one behavior per test.
- Pure logic: `#[cfg(test)] mod tests` beside the code. Argv, exit codes, files:
  the CLI integration tests.
- Integration tests isolate state through `GROVE_WORKSPACE`, `GROVE_SETTINGS`
  and `GROVE_LANG` — use the helper at the top of those tests. A test
  that touches the real home config directory is a bug.
- Git tests use a temporary repository. No network remotes.
- A bug fix comes with the test that fails without it.

## Lints and docs

Lint levels live in `[lints]` of `Cargo.toml`: `unsafe_code = "forbid"`,
`missing_docs = "warn"` (an error under CI's `-D warnings`). An `# Errors`
section on fallible public functions is a convention — no lint enforces it.

## Configuration precedence

Know this before changing path resolution:

- Workspace: `--workspace` → `GROVE_WORKSPACE` → the workspace TOML file
  walked upward from the working directory.
- Settings: `--settings-file` → `GROVE_SETTINGS` → the OS config directory
  `settings.toml`.
- Language: `--lang` → `GROVE_LANG` → `lang` in settings → `ru`.

Both files are TOML. `--workspace`, `--settings-file` and `--lang` are read
from raw argv by `main::preparse` before clap parses, because help text is
localised while the command tree is built.

## Library APIs

Look crate APIs up through context7 (`AGENTS.md`, "Skills and documentation tools")
rather than recalling them. Check the version in `Cargo.toml` first and prefer a
version-specific documentation when available; resolve the ID at query time.
