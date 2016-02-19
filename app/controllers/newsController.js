angular.module('app').controller('newsController', function($scope, $http) {

$http({
		method: 'GET',
		url: apiURL+'posts'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.data = datan;
	   
	  });
      
      
$http({
		method: 'GET',
		url: apiURL+'user/1/posts'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.posts = datan;
	   console.log(datan);
	  });


});