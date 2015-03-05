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
        var tempCost = item.cost*2 //if this is over 100 reduce by 25%
        if(tempCost > 100){
          tempCost = tempCost * 0.75;
          item.onSale = true
        }
        else{
          item.onSale = false;
        }
        return tempCost;
      }
    }],
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'app/catalog/catalog-directive.tpl.html'
  };
});
