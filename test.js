/*eslint arrow-parens: [2, "as-needed"]*/
'use strict'
import test from 'ava'
import fn from './'

test('title', async t => {
  const result = await fn('millette', 10)
  t.true(result.length > 10)
})
