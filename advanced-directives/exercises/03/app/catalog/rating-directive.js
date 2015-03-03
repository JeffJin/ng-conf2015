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
    link: function(scope, elm, attrs, ctrl, transclude){
      var times = parseInt(scope.rating);

    }
  }
});
