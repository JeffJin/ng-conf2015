/*
In the compile phase of our catalog-image-directive update the template by appending "<img ng-src={ { item.img } } />" to the templateElement.

In the preLink stage of our catalog-image-directive use our controllers fallbackImage method to replace any missing images .

In the postLink stage of our catalog-image-directive add a class of 'onSale' to the 'elm' of any items that are in fact on sale.
Hint: scope.item will change by the time we can detect this
 */

angular.module('APP')
.directive('catalogImage', function(){
  'use strict';
  return {
    scope: {item: '='},
    require: '^catalog',
    restrict: 'A',
    replace: true,
    compile: function compile(templateElement, templateAttributes) {
          /**
           * compile phase
           */
          return {
            pre: function preLink(scope, elm, attrs, ctrl) {
              /*
               * preLink phase
               */
              elm.find('img').bind('error', function(){
                  angular.element(this).attr('src', '???');
              });
            },
            post: function postLink(scope, elm){
              /*
               * postLink phase
               */
            }
          }
    }
  }
})
