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
