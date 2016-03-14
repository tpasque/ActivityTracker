var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
    $locationProvider.html5Mode(true);
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'partials/post.html',
        controller: 'postController'
      })
    $locationProvider.html5Mode(true);
});
