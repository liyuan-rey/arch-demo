// emergency.routes.js

define([
    'angular',
    'angular-ui-router',
    './emergency.module'
], function (ng) {
    'use strict';
    
    ng
        .module('app.emergency')
        .config(configure);
    
    ////////////
    
    configure.$inject =
        ['$stateProvider', '$urlRouterProvider'];
    
    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('emergency', {
                templateUrl: './emergency-list.tpl.html',
                controller: 'EmergencyListController'
            });
    }
});
