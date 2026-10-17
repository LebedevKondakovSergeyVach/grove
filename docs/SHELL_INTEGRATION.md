# Shell integration

`grove init` will print a shell function. The parent shell evaluates it. That output is not in this repository yet.

<!--site:steps-->

1. zsh: `eval "$(grove init zsh)"`
2. bash: `eval "$(grove init bash)"`

<!--site:/steps-->

Values the shell evaluates are quoted by one function in the Rust code. Shell setup is <!--site:badge text="Planned"--> until `grove init` exists. When `shell/` exists, check the files with `zsh -n` and `bash -n`.

<!--site:aside type="note"-->

`grove init` does not change the parent shell by itself. The shell has to evaluate what it prints.

<!--site:/aside-->
