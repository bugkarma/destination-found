/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

/*
myApp.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  
  $routeProvider.when('/add-destination',{
    templateUrl:  'templates/selected-places.html',
    controller:   'destinationsCtrl'
  });
});
*/

// Home controller
myAppControllers.controller('AppHomeCtrl', ['$scope', '$routeParams',
  function(){

  }]);

// Select destination controller
myAppControllers.controller('selectDestinationCtrl', ['$scope', 'Destination', 'SelectedDestinations',
  function($scope, Destination, SelectedDestinations){
    'use strict';

    $scope.destinations = Destination.query();
    $scope.selectedDestinations = SelectedDestinations;

    $scope.addDestination = function(destinationId) {
      var thisDestination = $scope.destinations[destinationId],
          destinationInfo = {
          id:             thisDestination.id,
          city:           thisDestination.city_name,
          country:        thisDestination.country_name,
          displayName:    thisDestination.city_name + ', ' + thisDestination.country_name,
        };

      $scope.selectedDestinations.selected.push(destinationInfo);
      $scope.selectedDestinations.active = destinationInfo;
    };

  }]);

myAppControllers.controller('NavDrawerCtrl', ['$scope', 'Destination', 'SelectedDestinations',
  function($scope, Destination, SelectedDestinations){
    'use strict';

    $scope.selectedDestinations = SelectedDestinations;

  }]);



// Hear:destination controller
myAppControllers.controller('HearDestCtrl', ['$scope','$http','SelectedDestinations',
  function($scope,$http,SelectedDestinations){
    'use strict';

    var destinations      = SelectedDestinations,
        activeDestination = destinations.active,
        showError = function(message) {
          document.getElementById('loadingText').className += ' hide';
          $scope.errorMessage = message;
        };


    if (activeDestination===null) {
      showError('Please select a destination.');
      return;
    }

    $http({method: 'GET', url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=24&q=https://news.google.com/news/feeds?q=' + activeDestination.displayName + '&output=rss'}).
      success(function(data, status, headers, config) {
        $scope.loaded = true;
        $scope.newsArticles = data.responseData.feed.entries;
      }).
      error(function(data, status, headers, config) {
        showError(status);
        return;
      });
  }]);

/*
// Talk:destination controller
myAppControllers.controller('TalkDestCtrl', ['$scope',
  function(){

  }]);
*/
// See:destination controller
myAppControllers.controller('SeeDestCtrl', ['$scope','SelectedDestinations',
  function($scope,SelectedDestinations){
    'use strict';
    var destinations      = SelectedDestinations,
        activeDestination = destinations.active;

    document.getElementById('slideshow').src = 'http://www.panoramio.com/wapi/template/slideshow.html?width=640&amp;height=500&amp;delay=8&amp;tag='+activeDestination.displayName;
  }]);
/*
// Plan:destination controller
myAppControllers.controller('PlanDestCtrl', ['$scope',
  function(){

  }]);
*/