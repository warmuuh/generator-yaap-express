function Application($scope, $http) {
    "use strict";
    $scope.name = "";
    $scope.message = "Hello World!";
    $scope.fetchMessage = function(){
        $http.post("/message", {name: $scope.name}).success(function(data){
             $scope.message = data.message;
        });
    };
}