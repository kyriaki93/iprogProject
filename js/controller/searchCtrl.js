var search = angular.module('searchCtrl', []);

search.controller('searchCtrl', ['$scope',

function ($scope){

		
		var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com/Books");
		
		$scope.searchBooks = function(searchString){

			$scope.status = "Searching for books...";

			ref.on("value", function(snapshot) {
  			$scope.status = (snapshot.val());
			}, function (errorObject) {
  			$scope.status = ("The read failed: " + errorObject.code);
			});

		}
		
}]);
