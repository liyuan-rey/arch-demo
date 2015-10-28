// app.routes.js

define([
    'angular',
    'angular-ui-router',
    './app.module'
], function (ng) {
    'use strict';
    
    ng
        .module('app')
        .config(configure);

    configure.$inject =
        ['$stateProvider', '$urlRouterProvider'];

    ////////////

    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('layout', {
                //abstract: true,
                url: '/layout',
                templateUrl: './app/layout-default.tpl.html'
                //views: {
                //    '': {
                //        templateUrl: './app/layout.tpl.html'
                //    }
                //    //,'category@global': {
                //    //    templateUrl: './app/category/category-list.tpl.html'
                //    //}
                //
                //}
            })
            .state('layout.default', {
                //abstract: true,
                url: '/default',
                views: {
                    'workspace': {
                        templateUrl: './app/workspace/workspace.tpl.html',
                        controller: 'WorkspaceController'
                    },
                    'navigator': {
                        templateUrl: './app/navigator/navigator.tpl.html',
                        controller: 'NavigatorController'
                    },
                    'content': {
                        templateUrl: './app/content.tpl.html'
                    }
                }
            })
            .state('layout.default.welcome', {
                url: '/welcome',
                views: {
                    'dummy': {
                        templateUrl: './app/welcome.tpl.html'
                    }
                }
            })
            .state('layout.default.incident', {
                url: '/incident',
                views: {
                    'dummy': {
                        templateUrl: './app/incident/incident-list.tpl.html',
                        controller: 'IncidentListController'
                    }
                }
            })
            .state('layout.default.emergency', {
                url: '/emergency',
                views: {
                    'dummy': {
                        templateUrl: './app/emergency/emergency-list.tpl.html',
                        controller: 'EmergencyListController'
                    }
                }
            //})
            //------------
            //.state('layout.workspace', {
            //    url: '/workspace',
            //    templateUrl: './app/workspace/workspace.tpl.html',
            //    controller: 'WorkspaceController'
            //})
            //.state('layout.navigator', {
            //    url: '/navigator',
            //    templateUrl: './navigator/navigator.tpl.html',
            //    controller: 'WorkspaceController'
            //})
            //.state('layout.content', {
            //    url: '/content',
            //    templateUrl: './welcome.tpl.html'
            //})
            //------------
            //.state('emergency', {
            //    //url: '/emergency',
            //    templateUrl: '/emergency/emergency-list.tpl.html',
            //    controller: 'EmergencyListController'
            //})
            //.state('incident', {
            //    //url: '/incident',
            //    templateUrl: '/incident/incident-list.tpl.html',
            //    controller: 'IncidentListController'
            });
        $urlRouterProvider
            //.when('', 'archDemo')
            .otherwise('/layout/default/welcome');
    }    
});