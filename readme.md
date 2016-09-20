# star-where
[![Build Status](https://travis-ci.org/millette/star-where.svg?branch=master)](https://travis-ci.org/millette/star-where)
[![Coverage Status](https://coveralls.io/repos/github/millette/star-where/badge.svg?branch=master)](https://coveralls.io/github/millette/star-where?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/star-where.svg)](https://gemnasium.com/github.com/millette/star-where)

> Jours se suivent.

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
