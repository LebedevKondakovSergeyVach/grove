# Installation

Version 0.1.0, MVP. No release exists yet. Workspace commands are not implemented, so every route below installs a binary that prints `grove 0.1.0`.

<!--site:tabs-->

## Homebrew

Until the first release the formula in the tap `LebedevKondakovSergeyVach/homebrew-tap` is head-only. It builds from `main` with Rust:

```bash
brew install --HEAD LebedevKondakovSergeyVach/tap/grove
```

After the first release, install the released version:

```bash
brew install LebedevKondakovSergeyVach/tap/grove
```

## Cargo

Install from the repository now:

```bash
cargo install --git https://github.com/LebedevKondakovSergeyVach/grove
```

The package name is `grove-git`. After the first release, `cargo install grove-git` installs it from crates.io. Until then that command finds no package.

## Prebuilt binary

After the first release, the GitHub release carries these archives: `grove-macos-arm64.tar.gz`, `grove-macos-x86_64.tar.gz`, `grove-linux-arm64.tar.gz` and `grove-linux-x86_64.tar.gz`. Each archive contains the `grove` binary; its checksum is the matching `.sha256` file next to it. No archive exists today.

## From source

Requires Rust 1.88 or newer.

```bash
git clone https://github.com/LebedevKondakovSergeyVach/grove.git
cd grove
cargo build --release
```

The binary is `target/release/grove`.

<!--site:/tabs-->

<!--site:aside type="note"-->

Release archives, the stable Homebrew formula and the crates.io package appear with the first release. Until then use the head formula, `cargo install --git`, or a source build.

<!--site:/aside-->
