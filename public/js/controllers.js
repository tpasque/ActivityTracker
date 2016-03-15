app.controller('mainController', function($scope, $location, $auth) {

   $scope.login = function() {
     $auth.login($scope.user)
       .then(function() {
         console.log('You have successfully signed in!');
         $location.path('/');
       })
       .catch(function(error) {
         console.log(error.data.message, error.status);
       });
   };
   $scope.authenticate = function(provider) {
     $auth.authenticate(provider)
       .then(function(response) {
         console.log('You have successfully signed in with ' + provider + '!');
         console.log(response.data.token);
         $location.path('/post');
       })
       .catch(function(error) {
         if (error.error) {
           // Popup error - invalid redirect_uri, pressed cancel button, etc.
           console.log(error.error);
         } else if (error.data) {
           // HTTP response error from server
         console.log(error.data.message, error.status);
         } else {
           console.log(error);
         }
       });
   };
   $scope.logout = function(){
     $auth.logout()
     console.log("successfully logged out!");
   }
 });


app.controller("postController", function($scope, $http, posts, $location){
  posts.getPosts().then(function(response){
    $scope.posts = response;
  })

  $scope.submitPost = function(){

    users.getUserData().then(function(result){
      var post = {};
      post.facebook_id = result.facebook_id;
      post.author = result.name
      post.title = $scope.title
      post.description = $scope.description
      post.picture_url = $scope.picture_url


      $http.post('post', post).then(function(response){
        console.log(response);
        window.location.href = '/#/post';
      })

    })

  }

});
