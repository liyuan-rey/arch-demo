// incident.service.js

define([
	'angular',
	'lodash',
	'./incident.module'
], function (ng, _) {
	'use strict';
	
	ng
		.module('app.incident')
		.factory('incidentService', incidentService);
	
	////////////
	
	function incidentService() {
		var data = [
			{ id: 0, name: 'Fruits' },
			{ id: 1, name: 'Books' }
		];
		
		var svc = {
			getIncidentList: getIncidentList
		};
		
		return svc;
		
		////////////
		
		function getIncidentList() {
			return data;
		}
	}
});