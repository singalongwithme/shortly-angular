angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link){
    $scope.loading = true;
    Links
      .add(link)
      .success(function(_, status) {
        $scope.loading = false;
      })
      .error(function(){
        $scope.loading = false;
      });
  };
});
