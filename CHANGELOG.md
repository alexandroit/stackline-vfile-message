# Changelog

## 1.0.0

- Fix import failure when Error.prototype.stack is non-writable or getter-only, with isolated process regressions (upstream issue #22).
- Start Stackline maintenance of the documented upstream API.
- Preserve and verify published runtime files and TypeScript declarations.
- Run upstream functional suites against both source and the final package.
- Publish the reviewed CI artifact through GitHub Actions with provenance and immutable release evidence.
