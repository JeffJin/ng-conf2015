angular.module('website', ['ngAnimate'])
  .constant('TweenMax', TweenMax)
  .controller('MainCtrl', function ($scope) {
    $scope.pages = {
      'home': {label: 'Home', sublabel: 'Home-Sublabel', content: 'This is home page content.'},
      'about': {label: 'About', sublabel: 'About-Sublabel', content: 'This is about page content.'},
      'contact': {label: 'Contact', sublabel: 'Contact-Sublabel', content: 'This is contact page content.'}
    };

    $scope.currentPage = 'home';
    $scope.page = $scope.pages['home'];
    $scope.isInTransit = false;

    $scope.setCurrentPage = function (page) {
      if ($scope.currentPage !== page) {
        $scope.page = $scope.pages[page];
        $scope.currentPage = page;
        $scope.isInTransit = true;
      }
    };

    $scope.isCurrentPage = function (page) {
      return $scope.currentPage === page;
    };

    $scope.toggleItems= function(){
      if($scope.items && $scope.items.length){
        $scope.items = [];
      }
      else{
        $scope.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      }
    };

    $scope.$on('bgTransitionComplete', function () {
      $scope.isInTransit = false;
    });
  })
  .directive('bg', function ($window) {
    return function (scope, element, attrs) {
      var resizeBG = function () {
        var bgwidth = element.width();
        var bgheight = element.height();

        var winwidth = $window.innerWidth;
        var winheight = $window.innerHeight;

        var widthratio = winwidth / bgwidth;
        var heightratio = winheight / bgheight;

        var widthdiff = heightratio * bgwidth;
        var heightdiff = widthratio * bgheight;
        //keep the ratio of background images
        if (heightdiff > winheight) {
          element.css({
            width: winwidth + 'px',
            height: heightdiff + 'px'
          });
        } else {
          element.css({
            width: widthdiff + 'px',
            height: winheight + 'px'
          });
        }
      };

      var windowElement = angular.element($window);
      windowElement.resize(resizeBG);

      element.bind('load', function () {
        resizeBG();
      });
    }
  })
  .animation('.bg-animation', function ($window, $rootScope, TweenMax) {
    return {
      enter: function (element, done) {
        TweenMax.fromTo(element, 0.5, {left: $window.innerWidth}, {
          left: 0, onComplete: function () {
            $rootScope.$apply(function () {
              $rootScope.$broadcast('bgTransitionComplete');
            });
            done();
          }
        });
      },

      leave: function (element, done) {
        TweenMax.to(element, 0.5, {left: -$window.innerWidth, onComplete: done});
      }
    };
  })
  .animation('.panel-animation', function (TweenMax) {
    return {
      addClass: function (element, className, done) {
        if (className == 'ng-hide') {
          TweenMax.to(element, 0.2, {opacity: 0, onComplete: done});
        }
        else {
          done();
        }
      },
      removeClass: function (element, className, done) {
        if (className == 'ng-hide') {
          element.removeClass('ng-hide');
          TweenMax.fromTo(element, 0.5,
            {opacity: 0, height: 0, width: element.width(), x:0, y:269},
            {opacity: 0.8, height: element.height(), width:element.width(), x:0, y:0, onComplete: done}
          );
        }
        else {
          done();
        }
      }
    };
  })
  //.animation('.panel-special-animation', function() {
  //  return {
  //    enter : function(element, done) {
  //      console.log('.panel-special-animation', 'enter');
  //      TweenMax.fromTo(element, 1,
  //        {opacity: 0, height: 0},
  //        {opacity: 1, height: element.height(), onComplete: done}
  //      );
  //
  //      return function(cancelled) {
  //        /* this (optional) function is called when the animation is complete
  //         or when the animation has been cancelled (which is when
  //         another animation is started on the same element while the
  //         current animation is still in progress). */
  //        if(cancelled) {
  //          jQuery(element).stop();
  //        }
  //      };
  //    },
  //
  //    leave : function(element, done) {
  //      console.log('.panel-special-animation', 'leave');
  //      TweenMax.fromTo(element, 1,
  //        {opacity: 1, height: element.height()},
  //        {opacity: 0, height: 0, onComplete: done}
  //      );
  //
  //      return function(cancelled) {
  //        /* this (optional) function is called when the animation is complete
  //         or when the animation has been cancelled (which is when
  //         another animation is started on the same element while the
  //         current animation is still in progress). */
  //        if(cancelled) {
  //          jQuery(element).stop();
  //        }
  //      }
  //    },
  //    move : function(element, done) { done(); },
  //
  //    beforeAddClass : function(element, className, done) { done(); },
  //    addClass : function(element, className, done) { done(); },
  //
  //    beforeRemoveClass : function(element, className, done) { done(); },
  //    removeClass : function(element, className, done) { done(); },
  //
  //    allowCancel : function(element, event, className) {}
  //  };
  //})
;


