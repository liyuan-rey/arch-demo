// navigator.service.js

define([
	'angular',
	'lodash',
	'./navigator.module'
], function (ng, _) {
	'use strict';
	
	ng
		.module('app.navigator')
		.provider('navigator', navigatorProvider);

    navigatorProvider.$inject =
        ['$stateProvider'];

	////////////
	
	function navigatorProvider($stateProvider) {
        this.$get = Navigator;

        Navigator.$inject =
            [];

        ////////////

        function Navigator() {
            var config = [];

            var svc = {
                register: register,
                getConfig: getConfig
            };

            return svc;

            ////////////

            function register(cfg) {
                config.push(cfg);
                //var t = $state.get();
                $stateProvider.state(cfg.state);
            }

            function getConfig() {
                return config;
            }
        }
	}
});