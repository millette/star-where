#!/usr/bin/env node
/*
Jours se suivent.

Copyright 2016 Robin Millette <robin@millette.info> (<http://robin.millette.info>)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// npm
const pick = require('lodash.pick')
const pickBy = require('lodash.pickby')
const sortBy = require('lodash.sortby')
const meow = require('meow')
const daylies = require('./')

const cli = meow([
  'Usage',
  '  $ daylies [input]',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Examples',
  '  $ daylies',
  '  unicorns & rainbows',
  '  $ daylies ponies',
  '  ponies & rainbows'
])

const bla = function (data) {
  const fields = [
    'name', 'id', 'full_name', 'html_url',
    'homepage', 'stargazers_count', 'language', 'platform',
    'forks_count', 'repository_url', 'rank', 'normalized_licenses'
  ]

  const out = sortBy(
    data.map((project) => pickBy(pick(project, fields), (v) => v)),
    (x) => x.html_url || x.repository_url)

  console.log(JSON.stringify(out, null, '  '))
}

daylies(cli.input[0] || 'millette')
  .then(bla)
/*
  .then((libs) => {
    // console.log(JSON.stringify(libs, null, '  '))
    bla(libs)
  })
*/
// const data = require('./last-100c-millette-stars.json')
// bla(data)
