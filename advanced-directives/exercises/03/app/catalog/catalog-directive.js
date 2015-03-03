angular.module('APP')
.directive('catalog', function(){
  'use strict';
  return {
    controller: ['$scope', 'CatalogService', function($scope, catalogService) {
      this.catalog = catalogService.getCatalog();
      this.fallbackImage = function(){
        var min = 130,max=155;
        var d = Math.floor(Math.random() * (max - min + 1)) + min;
        return catalogService.fallbackImageUrl() + d + '/150';
      }

      this.calcPrice = function(item){
        if (item.cost*2 > 100){
          item.onSale = true;
          return (item.cost*2)*0.75
        }
        else {
          return item.cost*2
        }
      }
    }],
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'app/catalog/catalog-directive.tpl.html'
  };
});
