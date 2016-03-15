
app.service('posts', function($http){
  this.getPosts = function(){
  return $http.get('posts').then(function(response){
    return response.data;
  })
};

this.getUserData = function(){

var token = localStorage.getItem('satellizer_token')
var data = JSON.stringify({token : token})
  return $http.post('user', data).then(function(response){
  return response.data
  })
};

})
