angular.module('app').controller('shopCtrl', function($scope, shopService){
    $scope.getData = function(){
        shopService.getData().then(function(response){
            $scope.products = response.data
        })
    }
    $scope.getData()
})