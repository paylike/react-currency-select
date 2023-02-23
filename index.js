'use strict';

var ce = require('react').createElement;
var currencies = require('@paylike/currencies');

module.exports = render;

function render( props ){
	var classes = [];

	classes.push(props.className ? props.className : 'currency-select');

	if (props.value === null || props.value === '')
		classes.push('initial');

	return ce('select', {
		value: props.value,
		required: props.required,
		className: classes.join(' '),

		onChange: function( e ){
			props.onChange && props.onChange(e.target.value);
		},
	},
		props.initial && ce('option', { value: '' }, props.initial),

		currencies.map(function( c ){
			if (props.funding && !c.funding)
				return;
			if (!props.deprecated && c.deprecated)
				return;

			return ce('option', { 
				value: c.code,
				key: c.code
			}, c.code + ' (' + c.currency + ')');
		})
	);
}
