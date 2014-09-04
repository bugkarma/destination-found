/* Services */

var myServices = angular.module('myServices', ['ngResource']);

myServices.service('Destination', ['$resource',
  function($resource){
    return $resource('destinations.json');
  }]);

myServices.factory('SelectedDestinations', ['$resource',
  function($resource){
    return {active:null,selected:[]};
  }]);