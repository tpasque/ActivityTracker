var app = angular.module("myApp", ['ngRoute', 'ngResource', 'satellizer']);


//satellizer oauth config.  This connects facebook oauth to our application.

app.config(function ($routeProvider, $authProvider, $locationProvider) {

 $authProvider.facebook({
     clientId: '976973585702482',
     scope: ['email'],
     scopeDelimiter: ',',
     profileFields: ['name', 'id', 'picture.type(large)', 'emails']
   });


 $routeProvider
 .when('/', {
   templateUrl: 'partials/home.html',
   controller: 'mainController'
 })
 .when('/post',{
   templateUrl: 'partials/posts.html',
   controller: 'postController'
 })
 $locationProvider.html5Mode(true);

});
