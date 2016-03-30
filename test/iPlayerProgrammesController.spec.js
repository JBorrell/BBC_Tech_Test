describe('iPlayerProgrammesController', function() {
  beforeEach(module('BBCiPlayer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('iPlayerProgrammesController');
  }));
});

it('initializes with an empty program result list', function() {
  expect(ctrl.list).toBeUndefined();
});
