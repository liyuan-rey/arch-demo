// app.module.js

define([
    'angular',
    'angular-ui-router',
    './workspace/workspace.module',
    './navigator/navigator.module',
    './incident/incident.module',
    './emergency/emergency.module'
], function (ng) {
    'use strict';

    return ng
        .module('app', ['ui.router', 'app.workspace', 'app.navigator', 'app.incident', 'app.emergency'])
        .run(appRun);

    ////////////

    function appRun() {

    }
});