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
      .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=1")
      .respond(
        { list: "A: Page 1" }
      );
  }));
  it('returns 1st 20 results for A programmes', function() {
    search.query('a', 1)
    .then(function(response) {
      expect(response.data.list).toEqual("A: Page 1")
    })
    httpBackend.flush()
  })

  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://ibl.api.bbci.co.uk//ibl/v1/atoz/0-9/programmes?page=1")
      .respond(
        { list: "0-9: Page 1" }
      );
  }));
  it('returns search results for numeric programmes', function() {
    search.query('0-9', 1)
      .then(function(response) {
        expect(response.data.list).toEqual("0-9: Page 1")
      })
      httpBackend.flush()
  })

  it('generates query url with parameters given', function() {
    expect(search.query.generateUrl('s', 3))
      .toEqual('https://ibl.api.bbci.co.uk//ibl/v1/atoz/s/programmes?page=3')
  })

});
