iPlayerProgrammes.controller('iPlayerProgrammesController', ['Search', function(Search) {
  var self = this;
  self.pages = [];
  self.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  (self.searchResult = function(){
    Search.query()
      .then(function(response) {
        self.searchResult = response.data.atoz_programmes.elements
        self.page_count(response);
      })
  })()

  self.doSearch = function(pageNo) {
    Search.query(pageNo)
      .then(function(response) {
        self.searchResult = response.data.atoz_programmes.elements
      })
  };

  self.page_count = function(response) {
    for (var i=1;i<=(Math.round(response.data.atoz_programmes.count/20));i++) {
      self.pages.push(i)}
  };

}]);
