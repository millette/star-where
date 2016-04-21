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
const ghGot = require('gh-got')
const flatten = require('lodash.flatten')
const githubToProjects = require('librarian-api').github.projects

// https://libraries.io/account
// export LIBRARIES_IO_TOKEN=d8de9f...

module.exports = function (username) {
  ghGot(['users', username, 'starred'].join('/') + '?per_page=5')
    .then((repos) => Promise.all(
      repos.body
        .map((repo) => repo.full_name.split('/'))
        .map((f) => githubToProjects(f[0], f[1]))
    ))
    .then((libs) => flatten(libs))
    .then((libs) => {
      console.log(libs)
    })
}
