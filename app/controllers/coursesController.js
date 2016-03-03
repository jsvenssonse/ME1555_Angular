app.controller('coursesController', function($scope, $http) {
    
    $scope.categories = "";
    $http.get( apiURL + "cat/" + $scope.categories )
    .then(function(response) {
        
        $scope.filters = {};
        
        $scope.categories = "programming";
        
        $scope.cats = response.data;
        
        $scope.mo = console.log($scope.categories);
        
        
//    angular.element(document).ready(function () {
//         $(".categories").click(function( event ){
//             console.log($scope.categories);
//         }); 
//     });
    });
});