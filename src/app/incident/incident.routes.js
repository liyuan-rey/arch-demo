// incident.routes.js

define([
    'angular',
    'angular-ui-router',
    './incident.module'
], function (ng) {
    'use strict';
    
    ng
        .module('app.incident')
        .config(configure);
    
    ////////////
    
    configure.$inject = 
        ['$stateProvider', '$urlRouterProvider'];
    
    function configure($stateProvider, $urlRouterProvider) {
        //$stateProvider
        //    .state('incident', {
        //        templateUrl: './incident-list.tpl.html',
        //        controller: 'incidentListController'
        //    });
    }
});
