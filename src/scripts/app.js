/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers',
  'myServices'
]);

myApp.config(function($routeProvider,$locationProvider){
  'use strict';
  
  $routeProvider.

    // Home route
    when('/', {
      templateUrl:  'templates/home.html',
      controller:   'AppHomeCtrl'
    }).

    // Utility routes
    when('/select-destination', {
      templateUrl:  'templates/select-destination.html',
      controller:   'selectDestinationCtrl'
    }).

    // Info routes
    when('/hear/:destination/:name', {
      templateUrl:  'templates/hear.html',
      controller:   'HearDestCtrl'
    }).
    when('/talk/:destination:name', {
      templateUrl:  'templates/talk.html',
      controller:   'TalkDestCtrl'
    }).
    when('/see/:destination:name', {
      templateUrl:  'templates/see.html',
      controller:   'SeeDestCtrl'
    }).
    when('/plan/:destination:name', {
      templateUrl:  'templates/plan.html',
      controller:   'PlanDestCtrl'
    });
  });