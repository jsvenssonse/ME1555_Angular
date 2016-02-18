angular.module('app').controller('newsController', function($scope, $http) {

$http({
		method: 'GET',
		url: apiURL+'posts'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.data = datan;
	   
	  });
});