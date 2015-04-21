
//Login
var users = angular.module('userCtrl', []);

users.controller('userCtrl', ['$scope', '$routeParams','$location', 
function($scope, $routeParams, $location) {

	var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");
		//Register button
		$scope.create = function(){
			ref.createUser({
				email    : $scope.email,
				password : $scope.password
		 		}, function(error, userData) {
				if (error) {
			  		$("#state").html("Error creating user:", error);
				} else {
			  		$("#state").html("You have successfully created an account!");

			  		
				}
			});
		}
		
		$scope.logout = function(){
			//document.getElementById("state").innerHTML =("Loged out")
			authClient.logout();
		}

		$scope.submit = function(){
			ref.authWithPassword({
  			email    : $scope.email,
  			password : $scope.password
			}, function(error, authData) {
  			if (error) {
   		    	$("#state").html("Login Failed!", error);
  			} else {
  				$location.path('/current')
    			$("#state").html("Yay! Click on the login button again to continue." );
    			$("#well").html("<h1>Welcome</h1><h2> "+ authData.password.email +"</h2>");
    			
  			}
			
		});
		}

}]);