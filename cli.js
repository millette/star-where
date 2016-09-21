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
const starWhere = require('./')

const numDefault = 10

var running = true

const cli = meow(`
  Usage
    $ star-where username

  Options
    -n
    --num  Number of stars to fetch. [Default: ${numDefault}]

  Examples
    $ star-where millette
    ...
    $ star-where millette --num 50
    ...
`, {
  alias: { n: 'num' },
  default: { 'num': numDefault },
  string: 'num'
})

const output = function (data) {
  const fields = [
    'name', 'id', 'full_name', 'html_url', 'description',
    'homepage', 'stargazers_count', 'language', 'platform',
    'forks_count', 'repository_url', 'rank', 'normalized_licenses'
  ]

  const out = sortBy(
    data.map((project) => pickBy(pick(project, fields), (v) => v)),
    (x) => x.html_url || x.repository_url)

  running = false
  console.log(JSON.stringify(out, null, '  '))
}

const timer = () => { if (running) { setTimeout(timer, 500) } }

const doneError = (e) => {
  running = false
  console.error(e)
}

if (cli.input[0] && cli.flags.num && parseInt(cli.flags.num, 10)) {
  running = true
  timer()
  starWhere(cli.input[0], parseInt(cli.flags.num, 10))
    .then(output)
    .catch(doneError)
} else {
  if (!cli.flags.num) {
    console.log('--num needs a positive integer argument telling how many stars to fetch.')
  }
  if (!cli.input[0]) {
    console.log('star-where needs a Github username argument.')
  }
  console.log('See "star-where --help" for more.')
}
