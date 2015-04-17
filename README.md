# UpperCamelCase

[![Build Status](http://img.shields.io/travis/SamVerschueren/uppercamelcase.svg)](https://travis-ci.org/SamVerschueren/uppercamelcase)

> Convert a dash/dot/underscore/space separated string to UpperCamelCase: `foo-bar` → `FooBar`

## Install

```sh
$ npm install --save uppercamelcase
```

## Usage

```js
var upperCamelCase = require('uppercamelcase');

upperCamelCase('foo-bar');
//=> FooBar

upperCamelCase('foo_bar');
//=> FooBar

upperCamelCase('Foo-Bar');
//=> FooBar

upperCamelCase('--foo.bar');
//=> FooBar

upperCamelCase('__foo__bar__');
//=> FooBar

upperCamelCase('foo bar');
//=> FooBar

console.log(process.argv[3]);
//=> --foo-bar
upperCamelCase(process.argv[3]);
//=> FooBar
```

## Related

See [`camelcase`](https://github.com/sindresorhus/camelcase) for the lowerCamelCase variant.

## License

MIT © Sam Verschueren
