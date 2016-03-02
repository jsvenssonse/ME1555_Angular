angular.module('app').controller('createController', function($scope, $http) {


    
   $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                user_id: 1,
                tags: "lol, lol",
                title: "lolololol",
                content: "mawoidmawd"
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;'
                }
            }

            $http.post(apiURL + 'post/create',   angular.fromJson(data), config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = console.log(data);
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + console.log(data) +
                    "<hr />status: " + console.log(status) +
                    "<hr />headers: " + console.log(header) +
                    "<hr />config: " + console.log(config);
            });
        };

});