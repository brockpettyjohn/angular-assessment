angular.module('app').service('shopService', function($http){

    this.getData = function(){
        return $http.get('https://practiceapi.devmountain.com/products')
    }

    this.getId = function(id){
        return $http.get('https://practiceapi.devmountain.com/products/'+id)
    }
})