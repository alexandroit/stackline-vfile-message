# Upstream and maintenance review

This package maintains `vfile-message@3.1.4` under the independent `@stackline/vfile-message` name.

- Source: https://github.com/vfile/vfile-message/tree/a174d9fc7cdd7f4ce3d48ceeecb01a02e18ef691
- Public npm artifact integrity: `sha512-fa0Z6P8HUrQN4BZaX05SIVXic+7kE3b05PWAtPuYP9QLHsLKYR7/AlLW3NtOrpXRLeawpDLMsVkmk5DG0NXgWw==`.
- Upstream issue evidence checked: 2026-09-29T00:22:19.275343+00:00.
- Original license and author notices are retained.
- The upstream published runtime files and declarations are hash-checked in `.stackline/upstream.json`. Any runtime fix is explicitly listed there.
- Functional upstream suites run against the source and extracted final package. Development tools were reduced to those used by validation; full source and runtime audits must pass.
- Only direct dependencies of the original Stackline portfolio are in this migration. This is not a claim that all transitive projects are maintained by Stackline.

## Issue triage

- https://github.com/vfile/vfile-message/issues/22: reproduced on 3.1.4 with both inherited read-only and getter-only `Error.prototype.stack`. Fixed by defining the own prototype default. Two isolated-process regressions preserve instance behavior and descriptor attributes.
- https://github.com/vfile/vfile-message/issues/13: adding a fixes property is a feature/API proposal; it is not introduced in this compatibility release.

The evidence query fetched the latest 100 open and 30 closed issue/PR entries and removed PRs. Closed entries were collected for context; this report does not claim an exhaustive historic review.

## Release discipline

The source commit, passing CI and CodeQL, reviewed CI tarball hash, npm provenance, normal and aliased installs, and immutable GitHub release are checked before a release is complete. Published versions and tags are never replaced.
