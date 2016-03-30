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
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=2")
        .respond(
          { list: list }
        );
    }));
    it('displays list of avalable programmes', function(){
      httpBackend.flush()
      expect(ctrl.searchResult.list).toEqual(list)
    });
  });

});
