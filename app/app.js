var app = angular.module('app', ['ngRoute']);

var apiURL = 'http://88.131.100.231:81/api/';

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
	.when('/news', {
		templateUrl: 'views/news.html',
		controller: 'newsController'
	})
	.otherwise({ redirectTo: '/' });
});

