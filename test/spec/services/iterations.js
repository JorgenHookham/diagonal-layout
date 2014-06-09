'use strict';

describe('Service: iterations', function () {

  // load the service's module
  beforeEach(module('diagonalLayoutAngularApp'));

  // instantiate service
  var iterations;
  beforeEach(inject(function (_iterations_) {
    iterations = _iterations_;
  }));

  it('should do something', function () {
    expect(!!iterations).toBe(true);
  });

});
