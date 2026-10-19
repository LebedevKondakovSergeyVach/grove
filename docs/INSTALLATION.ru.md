# Установка

Версия 0.1.0, MVP. Релизов пока нет. Команды workspace не реализованы, поэтому любой способ ниже ставит бинарник, который печатает `grove 0.1.0`.

<!--site:tabs-->

## Homebrew

До первого релиза формула в tap `LebedevKondakovSergeyVach/homebrew-tap` содержит только head. Она собирается из `main` с помощью Rust:

```bash
brew install --HEAD LebedevKondakovSergeyVach/tap/grove
```

После первого релиза можно ставить выпущенную версию:

```bash
brew install LebedevKondakovSergeyVach/tap/grove
```

## Cargo

Установка из репозитория уже работает:

```bash
cargo install --git https://github.com/LebedevKondakovSergeyVach/grove
```

Имя пакета — `grove-git`. После первого релиза `cargo install grove-git` поставит его с crates.io. До тех пор эта команда не найдёт пакет.

## Готовый бинарник

После первого релиза в релизе на GitHub будут архивы: `grove-macos-arm64.tar.gz`, `grove-macos-x86_64.tar.gz`, `grove-linux-arm64.tar.gz` и `grove-linux-x86_64.tar.gz`. В каждом архиве бинарник `grove`; контрольная сумма — соседний файл `.sha256`. Сейчас архивов нет.

## Из исходников

Нужен Rust 1.88 или новее.

```bash
git clone https://github.com/LebedevKondakovSergeyVach/grove.git
cd grove
cargo build --release
```

Бинарник — `target/release/grove`.

<!--site:/tabs-->

<!--site:aside type="note"-->

Архивы релиза, стабильная формула Homebrew и пакет на crates.io появятся с первым релизом. До тех пор используйте head-формулу, `cargo install --git` или сборку из исходников.

<!--site:/aside-->
