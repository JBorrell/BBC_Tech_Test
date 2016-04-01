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
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=1")
        .respond(
          { list: "list" }
        );
    }));
    // it('displays list of avalable programmes', function(){
    //   ctrl.doSearch('a', 1)
    //   httpBackend.flush()
    //   expect(ctrl.searchResult.list).toEqual("list")
    // });

    describe('counting pages required to display results', function(){
      ctrl.page_count(4.8);
      expect(ctrl.pages).toEqual([1, 2, 3, 4, 5]);
    });

    describe('substituting image size for recipe in image url', function(){
      image = "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
      expect(ctrl.image_url(image)).toEqual("http://ichef.bbci.co.uk/images/ic/192x108/p017mqg6.jpg")
    })

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
     });
    });

});
