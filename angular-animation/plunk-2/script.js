angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {bg: 'http://i.imgur.com/ETtFCDZ.jpg', avatar: 'http://i.imgur.com/a1bXufB.png', title: 'John Lindquist', subtitle: 'The Godfather'},
            {bg: 'http://i.imgur.com/TQObU5t.jpg', avatar: 'http://i.imgur.com/ypIHnAv.png', title: 'Joel Hooks', subtitle: 'The Hustler'},
            {bg: 'http://i.imgur.com/kVYo0Rh.jpg', avatar: 'http://i.imgur.com/n6j9wVo.png', title: 'Lukas Ruebbelke', subtitle: 'The Cleaner'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
    })
  ;