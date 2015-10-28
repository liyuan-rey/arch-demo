// workspace.controller.js

define([
    'angular',
    './workspace.module'
], function (ng) {
    'use strict';

    ng
        .module('app.workspace')
        .controller('WorkspaceController', WorkspaceController);

    WorkspaceController.$inject =
        ['$scope'];

    ////////////

    function WorkspaceController($scope) {
        //$scope.categories = categoryService.getCategoryList();
    }

});
