angular.module('APP',[])
.directive('cat', function(){
  return {
    scope: {name: '@'},
    restrict: 'E',
    templateUrl: 'cat.tpl.html',
    controller: ['$scope', function($scope){
      $scope.cat = {};
      $scope.cat.name = $scope.name
      $scope.cat.features = ['is a cat']
      this.addFeature = function(f){
        $scope.cat.features.push(f);
      }

    }],
  };
})
.directive('housebroken', function(){
  return {
    restrict: 'A',
    require: '^cat',
    link: function(scope, elm, attrs, ctrl){
      ctrl.addFeature('is housebroken')
    }
  };
})
.directive('declawed', function(){
  return {
    restrict: 'A',
    require: '^cat',
    link: function(scope, elm, attrs, ctrl){
      ctrl.addFeature('is declawed')
    }
  };
})

