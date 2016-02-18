app.controller('newsController', function($scope, $http) {

$http({
		method: 'GET',
		url: 'http://88.131.100.231:81/api/posts'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
	    $scope.flows = datan;
	  });



function names(id) {
	$http.get("http://88.131.100.231:81/api/user/"+id)
	.then(function successCallback1(response){
		users = response.data;
		names = users.firstname + users.lastname;
		//console.log(users);
	});
	return names;
};

/*
function posts(){
	$http.get("http://88.131.100.231:81/api/posts")
	.then(function successCallback1(response){
		data = response.data;
		//console.log(data);
		return data;
	});
};
*/

	

	/*
  $http.get("http://88.131.100.231:81/api/posts")
  .then(function (response) {$scope.flows = response.data;});
  console.log();
  
  /*$http.get("http://88.131.100.231:81/api/users")
  .then(function (response) {$scope.user = response.data;});
	*/

});