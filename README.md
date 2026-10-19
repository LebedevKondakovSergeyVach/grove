# Grove

Version 0.1.0, MVP. The only branch is `main`. Workspace commands are not implemented yet.

Grove runs one git workflow across a workspace of related repositories.

`grove switch` checks every repository before it changes any of them. If one repository cannot switch, none of them change. If a switch fails after some repositories have already moved, those repositories return to the branches they were on. The check includes skip-worktree and assume-unchanged files.

The command is `grove`. The Cargo package name is `grove-git`.

## Workspace

A workspace file lists each repository: name, path, and remote. Task branch names and the base branch are settings in that file. They are not names built into the tool.

User settings cover the shell, language, color, and the default remote.

## Install

No release exists yet. Install the head version now:

```bash
brew install --HEAD LebedevKondakovSergeyVach/tap/grove
# or
cargo install --git https://github.com/LebedevKondakovSergeyVach/grove
```

After the first release: `brew install LebedevKondakovSergeyVach/tap/grove` or `cargo install grove-git`. See [Installation](docs/INSTALLATION.md).

## Commands

- `grove status` — branch, upstream, and local changes for each repository
- `grove fetch` — fetch each repository
- `grove pull` — fast-forward each repository
- `grove switch <task>` — move every repository to that task, or roll back
- `grove new <task> <slug>` — create the task branch from the base branch
- `grove init zsh` — print shell setup for `eval`

The first slice is status, switch, fetch, the preflight check, and the workspace file. A terminal dashboard is not part of that slice.

Git operations go through the `git` binary on `PATH`.

## License

GNU Affero General Public License v3.0. See [LICENSE](LICENSE).
