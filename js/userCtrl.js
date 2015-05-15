
dinnerPlannerApp.controller('userCtrl', function($scope, $route, $routeParams, $location,Dinner) {
  
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
  			if (!error) {
   		    	window.location = 'http://projekt.clindstrom.se.preview.citynetwork.se/#/library';
  				
  			} else {
				$("#state").html("Login Failed!", error);
    			
  			}
			
		});
		}
});

  