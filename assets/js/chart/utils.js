'use strict';

window.chartColors = {
	red: 'rgb(255,99,132)',
	orange: 'rgb(255,159,64)',
	yellow: 'rgb(255,205,86)',
	green: 'rgb(75,192,192)',
	blue: 'rgb(54,162,235)',
	purple: 'rgb(153,102,255)',
	grey: 'rgb(201,203,207)',
	black: 'rgb(0,0,0)',
	aqua: 'rgb(0,255,255)',
	aquamarine: 'rgb(127,255,212)',
	blueviolet: 'rgb(138,43,226)',
	brown: 'rgb(165,42,42)',
	cadetblue: 'rgb(95,158,160)',
	chartreuse: 'rgb(127,255,0)',
	chocolate: 'rgb(210,105,30)',
	coral: 'rgb(255,127,80)',
	cornflowerblue: 'rgb(100,149,237)',
	crimson: 'rgb(220,20,60)',
	darkblue: 'rgb(0,0,139)',
	darkcyan: 'rgb(0,139,139)',
	darkgoldenrod: 'rgb(184,134,11)',
	darkgreen: 'rgb(0,100,0)',
	darkmagenta: 'rgb(139,0,139)',
	darkolivegreen: 'rgb(85,107,47)',
	darkorange: 'rgb(255,140,0)',
	darkorchid: 'rgb(153,50,204)',
	darkred: 'rgb(139,0,0)',
	darkslateblue: 'rgb(72,61,139)',
	darkslategray: 'rgb(47,79,79)',
	darkturquoise: 'rgb(0,206,209)',
	darkviolet: 'rgb(148,0,211)',
	deeppink: 'rgb(255,20,147)',
	deepskyblue: 'rgb(0,191,255)',
	dodgerblue: 'rgb(30,144,255)',
	firebrick: 'rgb(178,34,34)',
	gold: 'rgb(255,215,0)',
	goldenrod: 'rgb(218,165,32)',
	greenyellow: 'rgb(173,255,47)',
	hotpink: 'rgb(255,105,180)',
	indianred: 'rgb(205,92,92)',
	indigo: 'rgb(75,0,130)',
	lawngreen: 'rgb(124,252,0)',
	lightcoral: 'rgb(240,128,128)',
	lightgreen: 'rgb(144,238,144)',
	lightpink: 'rgb(255,182,193)',
	lightskyblue: 'rgb(135,206,250)',
	lime: 'rgb(0,255,0)',
	magenta: 'rgb(255,0,255)',
	maroon: 'rgb(128,0,0)',
	mediumblue: 'rgb(0,0,205)',
	mediumspringgreen: 'rgb(0,250,154)',
};

(function(global) {
	var MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

	// Google Analytics
	/* eslint-disable */
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-28909194-3', 'auto');
		ga('send', 'pageview');
	}
	/* eslint-enable */

}(this));