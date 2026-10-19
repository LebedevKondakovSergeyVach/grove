## What changed

<!-- One or two sentences. Link the issue this closes, if any. -->

## Why

<!-- The problem this solves. For a fix, what went wrong before. -->

## Checklist

- [ ] Targets the branch [`.ai/GIT_WORKFLOW.md`](../.ai/GIT_WORKFLOW.md) names for
      current work (only `release/*` and `hotfix/*` may target `main`)
- [ ] `cargo fmt --all -- --check && cargo clippy --all-targets --locked -- -D warnings && cargo test --locked`
      passes (CI also adds `--all-features`; the crate defines no features)
- [ ] New user-facing strings exist in both the English and the Russian catalog
- [ ] New or changed CLI commands are reflected in `README.md`, `README.ru.md`
      and `docs/`
- [ ] `CHANGELOG.md` **and** `CHANGELOG.ru.md` have an entry under
      `## [Unreleased]` (required for any change to `src/`, `locales/`,
      `shell/`, `configs/` or `Cargo.toml`)
- [ ] If this touches `docs/`, the READMEs, `CONTRIBUTING.md`, a changelog, `assets/` or `website/` —
      those are the website's content — `cd website && npm ci && npm test && npm run build`
      passes, and the sources are still plain CommonMark (no JSX, no `import`)

<!--
Releasing? If this is release/X.Y.Z -> main, merging publishes: CI builds four
targets, tags the commit, bumps the Homebrew tap and publishes the grove-git
crate. Confirm first that Cargo.toml and Cargo.lock are at X.Y.Z, and that
CHANGELOG.md and CHANGELOG.ru.md both have a `## [X.Y.Z]` section with updated
link footers. PR readiness checks CHANGELOG.md; release verification checks both
changelogs, the publishing secrets and the tap formula.
-->
