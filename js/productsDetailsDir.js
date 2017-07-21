angular.module('app')
.directive('products', function(){
    return {
        restrict: "E",
        templateUrl: './views/product-tmpl.html',
        controller: productsFun,
        scope:{
            prodsSpecial: '=prod'
        }
    }
})
function productsFun($scope, shopService, $stateParams){
    $scope.getId = function(){
        shopService.getId($stateParams.id).then(function(response){
            $scope.id = response.data
        })
    }
    $scope.getId()

    $scope.products = false;
    console.log($scope.products)

    $scope.showProducts = () => {
        $scope.products = !$scope.products;
    }
}
