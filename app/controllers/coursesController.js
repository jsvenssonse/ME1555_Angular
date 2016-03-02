app.controller('coursesController', function($scope, $http) {
   angular.element(document).ready(function () {
        $(".categories").click(function(){
            console.log("lol");
        }); 
    });

    $http.get( apiURL + "cats")
    .then(function(response) {
        
        var data = {
            cat : response.data.cat,
            desc : response.data[0].desc
        };
        
        $scope.categories = response.data;
    });
});