var app = angular.module("myApp", ['ngRoute', 'ngResource', 'satellizer']);


//satellizer oauth config.  This connects facebook oauth to our application.
//production clientId - 976973585702482
// dev client Id -  230855193941767
app.config(function ($routeProvider, $authProvider, $locationProvider) {

 $authProvider.facebook({

     clientId: '230855193941767',
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
   templateUrl: 'partials/post.html',
   controller: 'postController'
 })
 .when('/new',{
   templateUrl: 'partials/new.html',
   controller: 'newController'
 })

 $locationProvider.html5Mode(true);

});
