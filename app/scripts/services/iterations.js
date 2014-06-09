'use strict';

angular.module('diagonalLayoutAngularApp')
  .factory('iterations', function () {
    // Service logic
    // ...

    var iterations = [
      'simple-layout',
      'simple-diagonal-pattern',
      'striped-diagonal-pattern',
      'advanced-diagonal-pattern',
      'diagonal-layout',
      'verne',
      'nautilus',
      'round-one-v1',
      'round-one-v2'
    ];

    // Public API here
    return {
      getIterations: function () {
        return iterations;
      }
    };
  });
