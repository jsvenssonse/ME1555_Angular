app.controller('coursesController', function($scope, $http) {


    $http.get( apiURL + "courses")
    .then(function(response) {
        
        $scope.filters = {};
        
        var data = [{
            categories: [
                {name : "Programming", title: "Learn C++"},
                {name : "Science", title: "Learn nuclear fission"},
                {name : "Plan", title: [
                   "Trip to Paris", 
                   "Start a company",
                   "Get sixpack abs"
                ]}
            ]
        }]
        
        
        $scope.categories = data[0].categories;
        
        $scope.mo = console.log(data[0].concat(categories));
        
        
//    angular.element(document).ready(function () {
//         $(".categories").click(function( event ){
//             console.log($scope.categories);
//         }); 
//     });
    });
});