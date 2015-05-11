
dinnerPlannerApp.controller('userCtrl', function($scope, $routeParams, $location,Dinner) {
  
  var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");
		//log out user
		$scope.logout = function(){
			ref.unauth();
		}
		//login user
		$scope.submit = function(){
			ref.authWithPassword({
  			email    : $scope.email,
  			password : $scope.password
			}, function(error, authData) {
  			if (error) {
   		    	$("#state").html("Login Failed!", error);
  			} else {
  				$location.path('/library');
    			$("#state").html("Yay! Click on the login button again to continue." );
    			$("#well").html("<h1>Welcome</h1><h2> "+ authData.password.email +"</h2>");
    			
  			}
			
		});
		}
});

  