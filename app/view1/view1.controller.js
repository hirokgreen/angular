'use strict';

var module = angular.module('myApp.view1')

module.controller('arrayController', function($scope) {
  var namearray = [
    { id: 3, name: 'rahman'},
    { id: 1, name: 'bashar'},
    { id: 2, name: 'anwar'}
  ];
  $scope.namearray = namearray;
});

module.controller('ListCtrl', function (messages){
  var self = this;

  self.messages = messages.list;
});

module.controller('numController', function (messages, $scope){
  $scope.num = null;
    $scope.$watch('num', function(val) {
      $scope.num = parseInt(val);
    });
  var self = this;
  self.addMessage = function(message){
    messages.add(message);
  };
});


