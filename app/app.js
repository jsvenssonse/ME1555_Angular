

var app = angular.module('app', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})
	.when('/profile', {
		templateUrl: 'views/profile.html',
		controller: 'profileController'
	})
	.when('/flow', {
		templateUrl: 'views/flow.html',
		controller: 'flowController'
	})
	.otherwise({ redirectTo: '/' });
});

