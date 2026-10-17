# Commands

The binary is not published. These are the commands the first versions are expected to provide. A failing command exits non-zero.

<!--site:cards stagger-->

## Status

<!--site:item icon="list-format"-->

`grove status` shows the branch, upstream, and local changes for each module.

## Fetch and pull

<!--site:item icon="rocket"-->

`grove fetch` fetches. `grove pull` fast-forwards.

## Switch

<!--site:item icon="laptop"-->

`grove switch <task>` checks every module first. If one cannot switch, none change. A failure after a partial switch rolls the moved modules back.

<!--site:/cards-->

<!--site:aside type="caution"-->

Task ids and branch names come from the workspace file. They are not built into the binary.

<!--site:/aside-->
