angular.
 module('myServiceModule', []).
  controller('FoundController', ['$scope','notify', function ($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]).
 factory('notify', ['$window', function(win) {
  console.log(123);
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join('\\n'));
        msgs = [];
      }
    };
  }]);