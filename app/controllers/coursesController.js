app.controller('coursesController', function($scope, $http, $route) {
    $http.get( apiURL + "courses" )
    .then(function(response) {

        $scope.courses = response.data;
        

    angular.element(document).ready(function () {
            $(".col-md-4").click(function(){
                $(".click").fadeOut();
                $(".click").remove();
                $(".col-md-4.box").remove();
         });
    });
});
});
