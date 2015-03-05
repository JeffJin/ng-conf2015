/*
Implement a star rating directive for each item using scope.rating

Use tranclude: 'element' and the transclude argument in the linking function.
 */
angular.module('APP')
.directive('rating', function(){
  'use strict';
  return {
    scope: {rating: "="},
    restrict: 'A',
    transclude: 'element',
    link: function(scope, elm, attrs, ctrl, transclude){
      var times = parseInt(scope.rating);
      var newScope, current = elm;
      scope.$watch('rating', function(newVal){
        for(var i = 0; i < times; i++){
          newScope = scope.$new();//new scope is isolated scope

          transclude(newScope, function(clone){
            current.after(clone);
            current = clone;
          });
        }
      })
    }
  }
});
