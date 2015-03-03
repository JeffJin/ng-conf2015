angular.module('APP')
.directive('rating', function(){
  'use strict';
  return {
    scope: {rating: "="},
    restrict: 'A',
    transclude: 'element',
    link: function(scope, el, attrs, ctrl, transclude){
      var times = parseInt(scope.rating, 10);
      var current = el;
      var cloneScope;

      for(var i = 0; i < times; i += 1){
        cloneScope = scope.$new();

        transclude(cloneScope, function(clone){
          current.after(clone);
          current = clone;
        });
      }
    }
  }
});
