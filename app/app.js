var app = angular.module('app', ['ngRoute']);

<<<<<<< HEAD
var apiURL = 'http://88.131.100.231:81:81/api/';
=======
var apiURL = 'http://88.131.100.231:81/api/';
>>>>>>> jesper

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
    .when('/courses', {
		templateUrl: 'views/courses.html',
		controller: 'coursesController'
	})
    .when('/course', {
		templateUrl: 'views/course.html',
		controller: 'courseController'
	})
    .when('/create', {
		templateUrl: 'views/create.html',
		controller: 'createController'
	})
	.otherwise({ redirectTo: '/' });
});

