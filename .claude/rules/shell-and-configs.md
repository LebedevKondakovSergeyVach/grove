---
paths:
  - "docs/SHELL_INTEGRATION.md"
  - "docs/SHELL_INTEGRATION.ru.md"
---

# Shell integration and shipped defaults

Both directories are user-facing: a change here needs an entry under
`## [Unreleased]` in `CHANGELOG.md` **and** `CHANGELOG.ru.md`.

## `shell/`

- The `grove` shell function for zsh and bash is the documented integration
  point, and `docs/SHELL_INTEGRATION*.md` describe it.
- These files are **hand-maintained**. `grove init` prints its own copy of the
  function; no test compares the two, so a change to one must be mirrored in
  the other by hand. `cargo run -- init zsh` prints to stdout — it does not
  write `shell/`.
- Whatever the function passes to `eval` is already quoted by `shell_quote`.
  Do not add a second, unquoted path.
- Keep it valid in both shells: the CLI integration tests syntax-check the `init` output,
  not these files. Check them yourself with `zsh -n` and `bash -n`.

## `configs/`

The shipped workspace default must equal the code default. A test compares
them. Never edit the shipped file by hand — regenerate it from the binary with
settings and workspace paths pointed at `/dev/null`, so the command does not
read or create personal state.

Defaults contain no private hosts, ticket prefixes, or machine-specific paths.
