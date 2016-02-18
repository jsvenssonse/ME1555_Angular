angular.module('app').controller('profileController', function($scope, $http) {

$http({
		method: 'GET',
		url: apiURL+'user/'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.newsen = datan;
	  });
});