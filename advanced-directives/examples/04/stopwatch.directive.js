angular.module('App')
.directive('stopWatch', function(){
  return {
    scope: {},
    restrict: 'E',
    template: '<h3>Stop $watch</h3><input type="text" ng-model="txt" />{{updated}} updates <button ng-click="stop()">Stop</button>',
    link: function(scope, elm, attrs, ctrl){
      scope.updated = 0;
      var myWatch = scope.$watch('txt', function(n, o){
        if(n!==o)  {
          scope.updated++;
        }
      });
      scope.stop = function(){
        myWatch();//TODO stoppin watchers are important
      }
    }
  };
})
