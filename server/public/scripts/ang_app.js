var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "homeController"
    })
    .when('/dog', {
      templateUrl: '/views/dog.html',
      controller: "dogController"
    })
    .when('/bird', {
      templateUrl: '/views/bird.html',
      controller: "birdController"
    })
    .when('/cat', {
      templateUrl: '/views/cat.html',
      controller: "catController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
