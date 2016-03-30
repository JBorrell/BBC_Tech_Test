iPlayerProgrammes.controller('iPlayerProgrammesController', ['Search', function(Search) {
  var self = this;

  (self.searchResult = function(){
    Search.query()
      .then(function(response) {
        self.searchResult = response.data
      })
  })()

}]);
