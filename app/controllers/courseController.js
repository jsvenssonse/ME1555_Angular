app.controller('courseController', function ($scope, $http) {

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