describe('iPlayerProgrammesController', function() {
  beforeEach(module('BBCiPlayer'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('iPlayerProgrammesController');
  }));

  it('initializes with an empty program result list', function() {
    expect(ctrl.list).toBeUndefined();
  });

  //I had difficulties testing responses from the controller's search factory &
  //testing values set within the promises returned. I'd love to learn more about
  //testing angular factories to prevent unnecessary api calls and to properly
  //test every feature of the controllers used within the app.


  // describe('listing programmes', function() {
  //   var httpBackend;
  //   beforeEach(inject(function($httpBackend) {
  //     httpBackend = $httpBackend
  //     httpBackend
  //       .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=1")
  //       .respond(
  //         { data: {
  //           "atoz_programmes": {
  //             "count": 45,
  //             "elements": [{"title": "Abadas"}]
  //             }
  //           }
  //         }
  //       )
  //   }));
  //
  //   it('displays list of avalable programmes', function(){
  //     ctrl.doSearch('a', '1');
  //     console.log(ctrl);
  //     httpBackend.flush();
  //     expect(ctrl.searchResult[0].title).toEqual("Abadas");
  //   });
    //
    // describe('counting pages required to display results', function(){
    //   ctrl.doSearch('a', '1');
    //   expect(ctrl.pages).toEqual([1, 2, 3, 4, 5]);
    // });
    //
    // describe('substituting image size for recipe in image url', function(){
    //   image = "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
    //   console.log(image);
    //   expect(ctrl.image_url(image)).toEqual("http://ichef.bbci.co.uk/images/ic/192x108/p017mqg6.jpg")
    // })
    //
    // afterEach(function() {
    //   httpBackend.verifyNoOutstandingExpectation();
    //   httpBackend.verifyNoOutstandingRequest();
    //  });
    // });

});
