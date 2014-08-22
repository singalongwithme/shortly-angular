angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLink = function(){
    $scope.loading = true;

    Links
      .get()
      .success(function(links) { $scope.data.links = links; });
  };
  $scope.getLink();
});
