# UpperCamelCase ![CI](https://github.com/SamVerschueren/uppercamelcase/workflows/CI/badge.svg)

> Convert a dash/dot/underscore/space separated string to UpperCamelCase: `foo-bar` → `FooBar`


## Install

```sh
$ npm install --save uppercamelcase
```


## Usage

```js
const upperCamelCase = require('uppercamelcase');

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

upperCamelCase('foo', 'bar');
//=> 'FooBar'

upperCamelCase('__foo__', '--bar');
//=> 'FooBar'
```


## Related

- [`camelcase`](https://github.com/sindresorhus/camelcase) - The lowerCamelCase variant


## License

MIT © Sam Verschueren
