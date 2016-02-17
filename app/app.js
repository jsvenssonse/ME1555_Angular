

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
	.when('/news', {
		templateUrl: 'views/news.html',
		controller: 'newsController'
	})
	.otherwise({ redirectTo: '/' });
});

