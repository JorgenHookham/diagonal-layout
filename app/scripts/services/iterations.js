'use strict';

angular.module('diagonalLayoutAngularApp')
  .factory('iterations', function () {
    // Service logic
    // ...

    var iterations = [
      'simple-layout',
      'simple-diagonal-pattern',
      'iteration-2'
    ];

    // Public API here
    return {
      getIterations: function () {
        return iterations;
      }
    };
  });
