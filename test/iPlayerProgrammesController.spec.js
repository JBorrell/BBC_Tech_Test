describe('iPlayerProgrammesController', function() {
  beforeEach(module('BBCiPlayer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('iPlayerProgrammesController');
  }));

  it('initializes with an empty program result list', function() {
    expect(ctrl.list).toBeUndefined();
  });

  describe('listing programmes', function() {
    var list = [
      {
        "title": "Vikings",
        "avatar": "vikings.png"
      },
      {
        "title": "Black Sails",
        "avatar": "BlackSails.png"
      }
    ];
    it('displays list of avalable programmes', function(){
      expect(ctrl.searchResult.list).toEqual(list)
    });
  });
  
});
