# Configuration

Two TOML files. The command that writes them does not exist yet.

<!--site:steps-->

1. **Workspace.** `.grove/workspace.toml` at the workspace root. It lists each module (name, path, remote), the task pattern, branch formats, the base branch, and which preflight checks run.
2. **Settings.** `settings.toml` in the OS config directory. Shell (`zsh` or `bash`), icons, color, language (`ru` or `en`), and the default remote.
3. **Precedence.** A flag wins, then `GROVE_WORKSPACE`, `GROVE_SETTINGS`, or `GROVE_LANG`, then the file. If a file fails to parse, commands use in-memory defaults and refuse to overwrite that file.

<!--site:/steps-->
