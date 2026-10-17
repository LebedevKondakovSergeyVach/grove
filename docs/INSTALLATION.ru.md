# Установка

Версия 0.1.0, MVP. Единственная ветка — `main`. Команда `grove` не опубликована. Нет формулы Homebrew, релиза на crates.io и архива на GitHub.

<!--site:tabs-->

## Homebrew

Пока недоступно. Когда появится первый архив релиза, формула будет называться `grove` в tap `LebedevKondakovSergeyVach/homebrew-tap`.

## Cargo

Имя пакета — `grove-git`. `cargo install grove-git` ничего не поставит, пока пакет не опубликован.

## Готовый бинарник

Архивы релиза ещё не собираются. Планируемые имена: `grove-macos-arm64.tar.gz`, `grove-macos-x86_64.tar.gz`, `grove-linux-arm64.tar.gz`, `grove-linux-x86_64.tar.gz`. В каждом архиве бинарник `grove` и файл `.sha256`.

<!--site:/tabs-->

<!--site:aside type="note"-->

`cargo build` собирает бинарник, который печатает `grove 0.1.0`. Команды workspace не реализованы, релизов нет.

<!--site:/aside-->
