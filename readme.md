# daylies [![Build Status](https://travis-ci.org/millette/daylies.svg?branch=master)](https://travis-ci.org/millette/daylies) [![Coverage Status](https://coveralls.io/repos/github/millette/daylies/badge.svg?branch=master)](https://coveralls.io/github/millette/daylies?branch=master)
> Jours se suivent.

## Install
```
$ npm install --save daylies
```

## Usage
```js
const daylies = require('daylies');

daylies('unicorns');
//=> 'unicorns & rainbows'
```

## API
### daylies(input, [options])
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
$ npm install --global daylies
```

```
$ daylies --help

  Usage
    daylies [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ daylies
    unicorns & rainbows
    $ daylies ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)
