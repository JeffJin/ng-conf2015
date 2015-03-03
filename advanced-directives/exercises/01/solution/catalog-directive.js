angular.module('APP')
.directive('catalog', function(){
   return {
    controller: ['$scope', 'CatalogService', function($scope, catalogService){
      this.catalog = catalogService.getCatalog();
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
