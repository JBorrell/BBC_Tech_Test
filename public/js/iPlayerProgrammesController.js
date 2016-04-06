iPlayerProgrammes.controller('iPlayerProgrammesController', ['Search', function(Search) {
  var self = this;
  self.alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0-9".split(' ');

  self.doSearch = function(letter, pageNo) {
    self.letter = letter
    Search.query(self.letter.toLowerCase(), pageNo)
      .then(function(response) {
        self.searchResult = response.data.atoz_programmes.elements;
        self.page_count(response);
      })
  };

  self.page_count = function(response) {
    self.pages = [];
    for (var i=1;i<=(Math.ceil(response.data.atoz_programmes.count/20));i++) {
      self.pages.push(i)}
  };

  self.image_url = function(image) {
    return image.replace("{recipe}", "192x108")
  }

}]);
