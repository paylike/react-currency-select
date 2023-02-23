# Paylike currency select

A ReactJS module exporting a select of [paylike supported currencies](https://github.com/paylike/currencies)


## Usage

#### Requires ReactJS ^v0.14.2

Pin the dependency to the current version branch to ensure future installs of
your application will work. Like so:

```json
"dependencies": {
	"@paylike/react-currency-select": "^1.0.1"
}
```

```js

var ReactDOM = require('react-dom');
var CurrencySelect = require('@paylike/react-currency-select');

ReactDOM.render(CurrencySelect, {
/*
	value,
	required,
	initial,		// set a text to display in an initial option
	className,
	funding,		// show only funding currencies
	deprecated,		// include deprecated currencies

	onChange: function( currency ){},
*/
});

```
