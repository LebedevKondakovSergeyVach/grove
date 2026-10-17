# Contributing

## Layout

<!--site:filetree-->

- README.md
- docs/
- website/ documentation site, generated from the Markdown above
- .github/ CI workflows

<!--site:/filetree-->

## Branches

<!--site:steps-->

1. Version 0.1.0 is an MVP. Commit on `main`. It is the only branch.
2. Do not push `main`. A push runs the publishing pipeline.
3. Do not add a tool attribution line to a commit or a pull request.

<!--site:/steps-->

Rust sources are the version entry point only. `cargo test` passes with no
workspace-command tests. Agent instructions are in `AGENTS.md`.
