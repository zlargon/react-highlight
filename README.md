# react-highlight

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> React component for syntax highlighting

## JS Bin Demo

http://jsbin.com/bibaqu/edit?js,output

## Change Log

Please see [CHANGELOG](https://github.com/zlargon/react-highlight/blob/master/CHANGELOG.md).

## Installation

```bash
$ npm install --save react react-dom          # peer dependencies
$ npm install --save react-syntax-highlight
```

## Usage

### Highlight Theme

include a highlight.js theme in your HTML file

```html
<link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/default.css'/>
<link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/xxxx.css'/>
```

or if you're using `webpack`, you can require themes like is:

```js
require('highlight.js/styles/default.css');
require('highlight.js/styles/xxxx.css');
```

see all the highlight theme [here](https://github.com/isagalaev/highlight.js/tree/master/src/styles)

### React Part

```jsx
var Highlight = require('react-syntax-highlight');

<Highlight lang={language} value={content} />
```

## License

MIT

[npm-url]: https://nodei.co/npm/react-syntax-highlight
[npm-img]: https://nodei.co/npm/react-syntax-highlight.png

[dependency-url]: https://david-dm.org/zlargon/react-highlight
[dependency-img]: https://img.shields.io/david/zlargon/react-highlight.svg
