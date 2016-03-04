angular.module('app').controller('profileController', function($scope, $http) {
	$scope.title='Profile';


$http({
		method: 'GET',
		url: apiURL+'user/1'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.user = datan;
	    //console.log(datan);
	  });

$http({
		method: 'GET',
		url: apiURL+'course/1'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
        $scope.data = datan;
        $scope.steps = datan.steps;
       
        console.log(datan);
	  });

});
