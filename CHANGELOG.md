## 15.3.1 (July 10, 2017)

- fix build error with UglifyJs. [issue#2](https://github.com/zlargon/react-highlight/issues/2)

## 15.3.0 (July 07, 2017)

- fix Deprecation Warnings with __React 15.5.0__ and higher. (https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html)
	- remove `React.createClass` (https://fb.me/react-create-class)
	- remove React.PropTypes (https://fb.me/prop-types-docs)
- using ES6 syntax
- add new dependencies
	- `prop-types` (https://github.com/facebook/prop-types)
- This package is compatible with React 15.3.0 and higher. (https://github.com/facebook/prop-types#compatibility)

## 0.0.6 (March 30, 2017)

- add yarn.lock file

## 0.0.5 (Dec 12, 2016)

- move packages `highlight.js` back to `dependencies`

## 0.0.4 (Dec 11, 2016)

- fix bug: it does not work with `webpack`

## 0.0.3 (Dec 11, 2016)

- move packages `dependencies` to `peerDependencies`
	- `react`
	- `react-dom`
	- `highlight.js`

- Instead of including library from [HightLight.browser.js](https://cdn.rawgit.com/zlargon/react-highlight/master/example/HightLight.browser.js) at browser side, please include it from here https://unpkg.com/react-syntax-highlight@0.0.3.

```html
<script type="text/javascript" src="https://unpkg.com/react-syntax-highlight@0.0.3"></script>
```
