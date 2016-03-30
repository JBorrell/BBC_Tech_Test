iPlayerProgrammes.controller('iPlayerProgrammesController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('https://ibl.api.bbci.co.uk//ibl/v1/atoz/a/programmes?page=2');

  self.searchResult = searchResource.get();
  // {
  //   "list": [
  //     {
  //       "title": "Vikings",
  //       "avatar": "vikings.png"
  //     },
  //     {
  //       "title": "Black Sails",
  //       "avatar": "BlackSails.png"
  //     }
  //   ]
  // };

}]);
