# star-where
[![Build Status](https://travis-ci.org/millette/star-where.svg?branch=master)](https://travis-ci.org/millette/star-where)
[![Coverage Status](https://coveralls.io/repos/github/millette/star-where/badge.svg?branch=master)](https://coveralls.io/github/millette/star-where?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/star-where.svg)](https://gemnasium.com/github.com/millette/star-where)

> Jours se suivent.

## New since version 0.2.0
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Install
```
$ npm install --save star-where
```

## Usage
```js
const starWhere = require('star-where');

starWhere('unicorns');
//=> 'unicorns & rainbows'
```

## API
### starWhere(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global star-where
```

```
$ star-where --help

  Usage
    star-where [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ star-where
    unicorns & rainbows
    $ star-where ponies
    ponies & rainbows
```

## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
