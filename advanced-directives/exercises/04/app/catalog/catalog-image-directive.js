angular.module('APP')
.directive('catalogImage', function(){
  'use strict';
  return {
    scope: {item: '='},
    require: '^catalog',
    restrict: 'A',
    replace: true,
    compile: function compile(templateElement, templateAttributes) {
          templateElement.append('<img ng-src="{{::item.img}}" />')
          return {
            pre: function preLink(scope, elm, attrs, ctrl) {
              elm.find('img').bind('error', function(){
                  angular.element(this).attr('src', ctrl.fallbackImage())
              })
            },
            post: function postLink(scope, elm){
              scope.$watch('item', function(n ,o){
                if(n.onSale) {
                  elm.addClass('onSale')
                }
              })
            }
          }
    }
  }
})
