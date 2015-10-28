// navigator.controller.js

define([
    'angular',
    './navigator.module',
    './navigator.provider'
], function (ng) {
    'use strict';

    ng
        .module('app.navigator')
        .controller('NavigatorController', NavigatorController);

    NavigatorController.$inject =
        ['$scope', 'navigator'];

    ////////////

    function NavigatorController($scope, navigator) {
        $scope.navData = navigator.getConfig();
    }

});
