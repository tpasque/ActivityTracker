app.service('posts', function($http){
  this.getPosts = function(){
  return $http.get('posts').then(function(response){
    return response.data;
  })
};

})
