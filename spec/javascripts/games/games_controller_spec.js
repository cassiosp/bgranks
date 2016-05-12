describe('GamesCtrl', function() {
  beforeEach(module('bgRanks'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.games', function() {
    it('has games', function() {
      var $scope = {};
      var controller = $controller('GamesCtrl', { $scope: $scope });
      expect($scope.games.length).toBeGreaterThan(0);
    });

    it ('has names and descriptions for games', function() {
      var $scope = {};
      var controller = $controller('GamesCtrl', { $scope: $scope });
      expect($scope.games[0].name).toBeDefined();
      expect($scope.games[0].designer).toBeDefined();
    });
  });
});
