angular.module('APP',[])
.directive('cat', function(){
  return {
    scope: {name: '@'},
    restrict: 'E',
    templateUrl: 'cat.tpl.html',
    controller: ['$scope', function($scope){
      $scope.cat = {};
      $scope.cat.name = $scope.name;
      $scope.cat.features = ['is a cat'];
      //TODO this method is attached to current function and will be shared when this controller is passed to child directives
      this.addFeature = function(f){
        $scope.cat.features.push(f);
      }

    }]
  };
})
.directive('housebroken', function(){
  return {
    restrict: 'A',
    require: '^cat',
    link: function(scope, elm, attrs, ctrl){
      //TODO ctrl is the controller reference from parent directive
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

