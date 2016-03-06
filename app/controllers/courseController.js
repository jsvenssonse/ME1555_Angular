app.controller('courseController', function ($scope, $http) {

$http({
		method: 'GET',
		url: apiURL+'course/1'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
        $scope.data = datan;
        $scope.steps = datan.steps;
       
        $scope.course_owner = response.data['user_id'];
	  });
$http({
		method: 'GET',
		url: apiURL+'users'
	}).then(function successCallback(response) {
        $scope.user = console.log(response.data[0]['id']);
	  });
      
      if($scope.user === $scope.steps) { console.log("sucess"); }
      else { console.log("not"); }
    
});