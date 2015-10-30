// emergency.module.js

define([
    'angular',
    '../navigator/navigator.module'
], function (ng) {
    'use strict';
    
    var mdl = ng
        .module('app.emergency', ['app.navigator'])
        .run(moduleRun);

    moduleRun.$inject =
        ['$state', 'navigator'];

    return mdl;

    ////////////

    function moduleRun($state, navigator) {
        navigator.register({
            id: '2',
            display: 'Emergency Management',
            state: {
                name: 'layout.default.emergency',
                url: '/emergency',
                views: {
                    'dummy': {
                        templateUrl: './app/emergency/emergency-list.tpl.html',
                        controller: 'EmergencyListController'
                    }
                }
            }
            //,children: [{
            //    id: '1.1',
            //    display: 'Incident List',
            //    state: {
            //        name: 'incident-list',
            //        //url: '',
            //        templateUrl: '',
            //        controller: ''
            //    }
            //}, {
            //    id: '1.2',
            //    display: 'Others'
            //}]
        });
    }
});