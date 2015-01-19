'use strict';

var testAppControllers = angular.module('testAppControllers', []);
var testAppServices = angular.module('testAppServices', []);

var myApp = angular.module('testApp', [
  'ngRoute',
  'testAppControllers',
  'testAppServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('/view1', {
	    templateUrl: 'partials/view1.html',
	    controller: 'OrgController'
	}).
	when('/view2', {
	    templateUrl: 'partials/view2.html',
	    controller: 'RepoController'
	}).
	when('/view3', {
	    templateUrl: 'partials/view3.html',
	    controller: 'EditDetailsController'
	}).
	when('/', {
		templateUrl: 'partials/default.html'
	})
	.otherwise({redirectTo: '/'});
}]);