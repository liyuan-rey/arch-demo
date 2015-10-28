// main.js

;(function () {
	'use strict';
	
	var loader = require.config({
		context: 'archDemo',
		//baseUrl: '.',
		
		paths: {
			'domReady': '../../node_modules/requirejs-domready/domReady',
			'angular': '../../node_modules/angular/angular',
			'angular-ui-router': '../../node_modules/angular-ui-router/build/angular-ui-router',
			'lodash': '../../node_modules/lodash/index'
			//
			//'app': './app',
			//'category-module': './category/category.module.js',
			//'product-module': './product/product.module.js'
		},
		
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angular-ui-router' : {
				deps: ['angular']
				// ,exports: 'ui.router'
			}
		}
	});

	// loader(['./app/bootstrap']);
	
	loader([
		'require',
		'angular',

		'./app.module',
		'./app.routes',

		'./workspace/workspace.index',

		'./navigator/navigator.index',

		'./incident/incident.index',

		'./emergency/emergency.index'
	], startApplication);
	
	////////////
	
	function startApplication (req, ng) {
		req(['domReady'], function (domReady) {
			domReady(function () {
                // how to use jqLite? ng.element('#archDemo'); not works
				var archDemoElement = document.getElementById('archDemo');
                ng.bootstrap(archDemoElement, ['app']);

                // why 'ng.bootstrap(ng.$document, ['app']);' not works...
                //ng.bootstrap(document, ['app']);
			})
		})
	}

}) ();
