angular.module('app')
.directive('products', function(){
    return {
        restrict: "E",
        templateUrl: './views/product-tmpl.html',
        controller: 'productDetailsCtrl.js'
    }
})