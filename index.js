'use strict';

var ce = require('react').createElement;
var currencies = require('paylike-currencies');

module.exports = render;

function render( props ){
	return ce('select', {
		value: props.value,
		required: props.required,
		className: props.className || 'currency-select',

		onChange: function( e ){
			props.onChange && props.onChange(e.target.value);
		},
	},
		currencies.map(function( c ){
			if (props.funding && !c.funding)
				return;

			return ce('option', { 
				value: c.code,
				key: c.code
			}, c.code + ' (' + c.currency + ')');
		})
	);
}
