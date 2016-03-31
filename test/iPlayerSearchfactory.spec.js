describe('factory: Search', function() {

  var search;

  beforeEach(module('BBCiPlayer'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  it('responds to query', function() {
    expect(search.query()).toBeDefined();
  });
  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes")
      .respond(
        { list: "list" }
      );
  }));
  it('returns search results', function(){
    search.query()
      .then(function(response) {
        expect(response.data.list).toEqual("list")
      })
      httpBackend.flush()
  })

});
