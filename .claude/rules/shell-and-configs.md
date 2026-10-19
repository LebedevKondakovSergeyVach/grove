---
paths:
  - "docs/SHELL_INTEGRATION.md"
  - "docs/SHELL_INTEGRATION.ru.md"
---

# Shell integration and shipped defaults

`grove init`, `shell/` and `configs/` do not exist yet;
`docs/SHELL_INTEGRATION.md` describes the planned integration. When that work
lands, add `shell/**` and `configs/**` to the `paths:` above and to
`.cursor/rules/shell-and-configs.mdc`.

- Everything the parent shell evaluates goes through one `shell_quote`
  function (`AGENTS.md`, invariant 3).
- Shell files must stay valid in both shells: check them with `zsh -n` and
  `bash -n`.
- The shipped workspace default equals the code default, locked by a test
  (`AGENTS.md`, invariant 6). It contains no private hosts, ticket prefixes or
  machine-specific paths.
- `shell/` and `configs/` are user-facing: a change there needs an entry under
  `## [Unreleased]` in `CHANGELOG.md` and `CHANGELOG.ru.md`.
