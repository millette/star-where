'use strict'
import test from 'ava'
import fn from './'

test('title', async t => {
  const result = await fn('millette', 10)
  t.truthy(result.length > 10)
})
