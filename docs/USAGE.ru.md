# Команды

Бинарник не опубликован. Ниже команды, которые должны появиться в первых версиях. Сбой завершается ненулевым кодом.

<!--site:cards stagger-->

## Status

<!--site:item icon="list-format"-->

`grove status` показывает ветку, upstream и локальные изменения каждого модуля.

## Fetch и pull

<!--site:item icon="rocket"-->

`grove fetch` делает fetch. `grove pull` делает fast-forward.

## Switch

<!--site:item icon="laptop"-->

`grove switch <задача>` сначала проверяет каждый модуль. Если один переключить нельзя, не меняется ни один. Сбой после частичного переключения возвращает уже сдвинутые модули назад.

<!--site:/cards-->

<!--site:aside type="caution"-->

Номера задач и имена веток берутся из файла workspace. В бинарник они не вшиты.

<!--site:/aside-->
