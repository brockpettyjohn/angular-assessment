angular.module('app').controller('productDetailsCtrl', function($scope, shopService, $stateParams){
    $scope.getId = function(){
        shopService.getId($stateParams.id).then(function(response){
            $scope.id = response.data
        })
    }
    $scope.getId()
})
