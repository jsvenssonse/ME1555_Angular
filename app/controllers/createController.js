angular.module('app').controller('createController', function($scope, $http) {

$scope.submitForm = function() {
    
    $scope.postData = {};
    
    $http({
            method: 'POST',
            url: apiURL+'post/create',
            data: $scope.postData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        }).then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
      });
}



});