if (Meteor.isClient) {
  angular.module('appointment',['angular-meteor']);

  angular.module("appointment").controller("AppointmentListCtrl", ['$scope',
    function($scope){

      $scope.appointments = [
        {'name': 'Dubstep-Free Zone',
          'time': new Date(),
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
          'time': new Date(),
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'time': new Date(),
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

    }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
