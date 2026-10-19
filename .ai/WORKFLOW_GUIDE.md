# Verification reference

[`AGENTS.md`](../AGENTS.md) defines the required gates;
[`verify-project`](../.claude/skills/verify-project/SKILL.md) owns the procedure
and reporting. Run it before claiming a change is complete.

## Iteration commands

```bash
cargo test --locked          # all tests
cargo test <name-fragment>   # a focused regression
cargo run                    # prints the version; no subcommands exist yet
bash .claude/hooks/tests/guard-git-test.sh .claude/hooks/guard-git.sh
python3 -m unittest discover -s .github/scripts -p 'test_*.py'
```

Once commands read or write state, run manual checks against temporary
workspace and settings paths. Avoid tests that need network access.

## Find the owning procedure

| Change | Reference |
| :--- | :--- |
| Rust source and tests | [Rust rule](../.claude/rules/rust-source.md) |
| Shell integration or shipped defaults | [Shell/config rule](../.claude/rules/shell-and-configs.md) |
| Bilingual docs, changelogs, screenshots | [Docs rule](../.claude/rules/docs-sources.md) |
| Site generator, styling or interactive behavior | [Website contract](../website/AGENTS.md) and [skill](../.claude/skills/starlight-website/SKILL.md) |
| CI triggers, release and recovery | [Git workflow](GIT_WORKFLOW.md) |
| Agent instructions, hooks, delegation | [Instruction audit](../.claude/skills/agent-docs-audit/SKILL.md) |

CI also builds crate documentation, tests on Linux and macOS, and runs the MSRV
job pinned in `ci.yml`. The local gate does not reproduce every CI job; state
which additional checks were run instead of implying full CI coverage.
