# @stackline/vfile-message

> vfile utility to create a virtual message.

[![npm version](https://img.shields.io/npm/v/@stackline/vfile-message.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/vfile-message)
[![license](https://img.shields.io/npm/l/@stackline/vfile-message.svg?style=flat-square)](https://github.com/alexandroit/stackline-vfile-message)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-vfile-message-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-vfile-message)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/vfile-message/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/vfile-message/)** | **[npm](https://www.npmjs.com/package/@stackline/vfile-message)** | **[Issues](https://github.com/alexandroit/stackline-vfile-message/issues)** | **[Repository](https://github.com/alexandroit/stackline-vfile-message)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/vfile-message` is the Stackline-maintained distribution of `vfile-message@3.1.4`. It is an independent continuation of [vfile-message](https://github.com/vfile/vfile-message); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/vfile-message@1.0.1` |
| API target | `vfile-message@3.1.4` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Module type | `module` |
| Main entry | `index.js` |
| Types | `index.d.ts` |
| Runtime dependencies | `@types/unist, unist-util-stringify-position` |

## Installation

```bash
npm install @stackline/vfile-message
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install vfile-message@npm:@stackline/vfile-message
```

## Usage and API reference

### vfile-message


Create [vfile][] messages.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`VFileMessage(reason[, place][, origin])`](#vfilemessagereason-place-origin)
    *   [Well-known](#well-known)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package provides a (lint) message format.

## When should I use this?

In most cases, you can use `file.message` from `VFile` itself, but in some
cases you might not have a file, and still want to emit warnings or errors,
in which case this can be used directly.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install @stackline/vfile-message
```

In Deno with [`esm.sh`][esmsh]:

```js
import {VFileMessage} from 'https://esm.sh/vfile-message@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {VFileMessage} from 'https://esm.sh/vfile-message@3?bundle'
</script>
```

## Use

```js
import {VFileMessage} from '@stackline/vfile-message'

const message = new VFileMessage(
  'Unexpected unknown word `braavo`, did you mean `bravo`?',
  {line: 1, column: 8},
  'spell:typo'
)

console.log(message)
```

Yields:

```txt
[1:8: Unexpected unknown word `braavo`, did you mean `bravo`?] {
  reason: 'Unexpected unknown word `braavo`, did you mean `bravo`?',
  line: 1,
  column: 8,
  source: 'spell',
  ruleId: 'typo',
  position: {start: {line: 1, column: 8}, end: {line: null, column: null}}
}
```

## API

This package exports the identifier [`VFileMessage`][api-vfile-message].
There is no default export.

### `VFileMessage(reason[, place][, origin])`

Create a message for `reason` at `place` from `origin`.

When an error is passed in as `reason`, the `stack` is copied.

###### Parameters

*   `reason` (`string` or `Error`)
    — reason for message, uses the stack and message of the error if given
*   `place` ([`Node`][node], [`Position`][position], or [`Point`][point],
    optional)
    — place in file where the message occurred
*   `origin` (`string`, optional)
    — place in code where the message originates (example:
    `'my-package:my-rule'` or `'my-rule'`)

###### Extends

[`Error`][error].

###### Returns

Instance of `VFileMessage`.

###### Fields

*   `reason` (`string`)
    — reason for message (you should use markdown)
*   `fatal` (`boolean | null | undefined`)
    — state of problem; `true` marks associated file as no longer processable
    (error); `false` necessitates a (potential) change (warning);
    `null | undefined` for things that might not need changing (info)
*   `line` (`number | null`)
    — starting line of error
*   `column` (`number | null`)
    — starting column of error
*   `position` ([`Position | null`][position])
    — full unist position
*   `source` (`string | null`, example: `'my-package'`)
    — namespace of message
*   `ruleId` (`string | null`, example: `'my-rule'`)
    — category of message
*   `stack` (`string | null`)
    — stack of message in code
*   `file` (`string | null`)
    — path of a file (used throughout the `VFile` ecosystem)

### Well-known

It’s OK to store custom data directly on the `VFileMessage`, some of those are
handled by [utilities][util].
The following fields are documented and typed here.

###### Fields

*   `actual` (`string | null`)
    — specify the source value that’s being reported, which is deemed incorrect
*   `expected` (`Array<string> | null`)
    — suggest acceptable values that can be used instead of `actual`
*   `url` (`string | null`)
    — link to docs for the message (this must be an absolute URL that can be
    passed as `x` to `new URL(x)`)
*   `note` (`string | null`)
    — long form description of the message (you should use markdown)

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]



[build-badge]: https://github.com/vfile/vfile-message/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-message/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-message.svg

[coverage]: https://codecov.io/github/vfile/vfile-message

[downloads-badge]: https://img.shields.io/npm/dm/vfile-message.svg

[downloads]: https://www.npmjs.com/package/vfile-message

[size-badge]: https://img.shields.io/bundlephobia/minzip/vfile-message.svg

[size]: https://bundlephobia.com/result?p=vfile-message

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/vfile/.github/blob/main/contributing.md

[support]: https://github.com/vfile/.github/blob/main/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/main/code-of-conduct.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[node]: https://github.com/syntax-tree/unist#node

[position]: https://github.com/syntax-tree/unist#position

[point]: https://github.com/syntax-tree/unist#point

[vfile]: https://github.com/vfile/vfile

[util]: https://github.com/vfile/vfile#utilities

[api-vfile-message]: #vfilemessagereason-place-origin

## Credits and original authors

- Original project: [vfile-message](https://github.com/vfile/vfile-message).
- Titus Wormer.
- Copyright (c) 2017 Titus Wormer <tituswormer@gmail.com>.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
