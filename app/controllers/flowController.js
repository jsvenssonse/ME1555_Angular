app.controller('flowController', function($scope, $http) {

	$http({
		method: 'GET',
		url: 'http://88.131.100.231:81/api/posts'
	}).then(function successCallback(response) {
		var datan = response.data;
		var counter = datan.length;
		//console.log(datan.length);
		//console.log(response.data[0].user_id);
		for (var i = 0; i < counter; i++) {
			$http.get("http://88.131.100.231:81/api/user/"+response.data[i].user_id)
			.then(function successCallback(response){
				var users = response.data;
				var names = users[0].firstname + users[0].lastname;
				//console.log(name);
			});

		var flows = {id:response.data[i].id, UserID:response.data[i].user_id}
			
			console.log(flows);
			/*console.log(response.data[i].user_id + ' - ' +
				response.data[i].id);*/
		}
	    $scope.flows = response.data;

	    
	  }, function errorCallback(response) {
	    
	  });

	/*
  $http.get("http://88.131.100.231:81/api/posts")
  .then(function (response) {$scope.flows = response.data;});
  console.log();
  
  /*$http.get("http://88.131.100.231:81/api/users")
  .then(function (response) {$scope.user = response.data;});
	*/

});