---
"payblocks": patch
---

Security: harden release workflow and project config against supply chain attacks

- Add `pnpm.onlyBuiltDependencies` allowlist to `package.json` — only `esbuild`, `sharp`, and `unrs-resolver` are permitted to run install scripts, blocking all other postinstall hooks
- Set `npm_config_ignore_scripts: true` as job-level env in release workflow — prevents any `pnpm install` (including internal calls by `changesets/action`) from running lifecycle scripts
- Pin `changesets/action` to exact commit SHA instead of mutable version tag
- Add strict post-action integrity check — only `.changeset/*`, `CHANGELOG.md`, `package.json`, and `pnpm-lock.yaml` are allowed to be modified during the release process; any other file change fails the build
