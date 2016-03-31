iPlayerProgrammes.controller('iPlayerProgrammesController', ['Search', function(Search) {
  var self = this;
  self.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  self.letter = 'a';

  (self.searchResult = function(){
    Search.query(self.letter, 1)
      .then(function(response) {
        self.searchResult = response.data.atoz_programmes.elements
        self.page_count(response);
      })
  })()

  self.doSearch = function(letter, pageNo) {
    self.letter = letter
    Search.query(self.letter.toLowerCase(), pageNo)
      .then(function(response) {
        self.searchResult = response.data.atoz_programmes.elements
        self.page_count(response);
      })
  };

  self.page_count = function(response) {
    self.pages = [];
    for (var i=1;i<=(Math.round(response.data.atoz_programmes.count/20));i++) {
      self.pages.push(i)}
  };

  self.image_url = function(image) {
    return image.replace("{recipe}", "192x108")
  }

}]);
