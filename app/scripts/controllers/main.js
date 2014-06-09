'use strict';

angular.module('diagonalLayoutAngularApp')
  .controller('MainCtrl', function ($scope, iterations) {
    $scope.iterations = iterations.getIterations();
  })
  .controller('IterationCtrl', function ($scope, $routeParams, iterations) {
    $scope.template = 'views/iterations/' + iterations.getIterations()[$routeParams.index] + '.html';
    $scope.index = $routeParams.index;
  });
