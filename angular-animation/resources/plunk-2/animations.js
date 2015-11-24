angular.module('website')
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        finishPoint = element.parent().width();

                    if(scope.direction !== 'right') finishPoint = -finishPoint;

                    TweenLite.to(element, 0.5, {left:finishPoint, ease: Ease.easeInOut, onComplete: done});
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        startPoint = element.parent().width(),
                        tl = new TimelineLite();

                    if(scope.direction === 'right') startPoint = -startPoint;

                    tl.fromTo(element, 0.5, { left: startPoint}, {left:0, ease: Ease.easeInOut, onComplete: done})
                        .fromTo(element.find('.title'), 0.5, { left: -200, alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
                        .fromTo(element.find('.subtitle'), 0.5, { left: -200, alpha: 0}, {left:0, alpha:1, ease:Ease.easeInOut} )
                        .fromTo(element.find('.avatar'), 0.5, { left: 800, alpha: 0}, {left:300, alpha:1, ease:Ease.easeInOut} );
                }
                else {
                    done();
                }
            }
        };
    })
  ;