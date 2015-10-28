// emergency-list.controller.js

define([
	'angular',
	'./emergency.module'
], function (ng) {
	'use strict';
	
	ng
		.module('app.emergency')
		.controller('EmergencyListController', EmergencyListController);

	EmergencyListController.$inject =
		['$scope'];

	////////////
	
	function EmergencyListController($scope) {
		//$scope.categories = categoryService.getCategoryList();
	}

});
