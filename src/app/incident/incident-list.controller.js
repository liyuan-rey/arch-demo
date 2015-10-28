// incident-list.controller.js

define([
	'angular',
	'./incident.module'
], function (ng) {
	'use strict';
	
	ng
		.module('app.incident')
		.controller('IncidentListController', IncidentListController);

	IncidentListController.$inject =
        ['$scope', 'incidentService'];

	////////////
	
	function IncidentListController($scope, incidentService) {
		$scope.incidents = incidentService.getIncidentList();
	}

});
