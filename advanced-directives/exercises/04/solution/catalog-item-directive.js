angular.module('APP')
.directive('catalogItem', function(){
  'use strict';
  return {
    scope: { item: '=item' },
    restrict: 'E',
    require: '^catalog',
    templateUrl: 'solution/catalog-item.tpl.html',
    link: function(scope, e, a, ctrl){
      scope.item.price = ctrl.calcPrice(scope.item)
    }
  };
})
