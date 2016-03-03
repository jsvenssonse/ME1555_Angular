app.controller('coursesController', function($scope, $http) {


    $http.get( apiURL + "courses")
    .then(function(response) {
        
        $scope.filters = {};
        
        
        $scope.categories = response.data;
        
        $scope.mo = console.log(response.data);
        
        
//    angular.element(document).ready(function () {
//         $(".categories").click(function( event ){
//             console.log($scope.categories);
//         }); 
//     });
    });
});