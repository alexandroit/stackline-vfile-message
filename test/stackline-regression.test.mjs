import assert from 'node:assert/strict'
import {spawnSync} from 'node:child_process'
import test from 'node:test'

for (const descriptor of [
  "{configurable: true, value: '', writable: false}",
  "{configurable: true, get() { return 'host stack' }}"
]) {
  test(`imports and creates messages with hardened Error.prototype.stack: ${descriptor}`, () => {
    const script = `
      import assert from 'node:assert/strict';
      Object.defineProperty(Error.prototype, 'stack', ${descriptor});
      const {VFileMessage} = await import('./index.js');
      const message = new VFileMessage('example', {line: 2, column: 3}, 'source:rule');
      assert(message instanceof Error);
      assert.equal(message.reason, 'example');
      assert.equal(message.stack, '');
      assert.equal(message.line, 2);
      assert.equal(message.column, 3);
      assert.equal(message.source, 'source');
      assert.equal(message.ruleId, 'rule');
      assert.equal(String(message), '2:3: example');
      assert.deepEqual(Object.getOwnPropertyDescriptor(VFileMessage.prototype, 'stack'), {
        configurable: true, enumerable: true, value: '', writable: true
      });
      const original = new Error('original');
      original.stack = 'captured stack';
      assert.equal(new VFileMessage(original).stack, 'captured stack');
    `
    const result = spawnSync(process.execPath, ['--input-type=module', '-e', script], {encoding: 'utf8'})
    assert.equal(result.status, 0, result.stdout + result.stderr)
  })
}
