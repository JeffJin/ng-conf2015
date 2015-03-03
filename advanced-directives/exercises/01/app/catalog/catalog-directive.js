/*
Move catalogController into the catalog directive

Implement a 25% discount on any items with a calcPrice over $100

Bonus: set the on sale items' onSale property to true, we'll use this later
 */

angular.module('APP')
.controller('catalogController', ['$scope', 'CatalogService', function($scope, catalogService){
  this.catalog = catalogService.getCatalog();;
  this.calcPrice = function(item){
    return item.cost*2 //if this is over 100 reduce by 25%
  }
}])
.directive('catalog', function(){
   return {
    controller: null,
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'app/catalog/catalog-directive.tpl.html'
  };
});
