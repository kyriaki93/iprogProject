
dinnerPlannerApp.controller('headerCtrl', function($scope, $routeParams, $location, Dinner) {
  
  	var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");

	$scope.user = Dinner.getUser();
	
});

  