# Installation

Version 0.1.0, MVP. The only branch is `main`. The `grove` command is not published. There is no Homebrew formula, no crates.io release, and no GitHub release archive.

<!--site:tabs-->

## Homebrew

Not available. After the first release archive exists, the formula name will be `grove` in the tap `LebedevKondakovSergeyVach/homebrew-tap`.

## Cargo

The package name is `grove-git`. `cargo install grove-git` does nothing until that package is published.

## Prebuilt binary

Release archives are not built yet. The planned file names are `grove-macos-arm64.tar.gz`, `grove-macos-x86_64.tar.gz`, `grove-linux-arm64.tar.gz`, and `grove-linux-x86_64.tar.gz`. Each archive contains the `grove` binary and a `.sha256` file.

<!--site:/tabs-->

<!--site:aside type="note"-->

`cargo build` produces a binary that prints `grove 0.1.0`. Workspace commands are not implemented, and nothing is published.

<!--site:/aside-->
