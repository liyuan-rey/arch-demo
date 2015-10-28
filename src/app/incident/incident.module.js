// incident.module.js

define([
    // 'require',
    'angular',
    '../navigator/navigator.module'
], function (ng) {
    'use strict';

    // require(['./incident-list.controller']);

    var mdl = ng
        .module('app.incident', ['app.navigator']);
        //.run(moduleRun);

    moduleRun.$inject =
        ['$state', 'navigator'];

    return mdl;

    ////////////

    function moduleRun($state, navigator) {
        navigator.register({
            id: '1',
            display: 'City Safety',
            state: {
                name: 'layout.default.incident',
                url: '/incident',
                views: {
                    'dummy': {
                        templateUrl: './app/incident/incident-list.tpl.html',
                        controller: 'IncidentListController'
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