//user controller
var users = angular.module('userCtrl', []);

	users.controller('userCtrl', function ($scope){
		$scope.email = "";
		$scope.password = "";
		
		var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");

		//Register button
		$scope.create = function(){
			ref.createUser({
				email    : $scope.email,
				password : $scope.password
		 		}, function(error, userData) {
				if (error) {
			  		document.getElementById("state").innerHTML = ("Error creating user:"+ error);
				} else {
			  		document.getElementById("state").innerHTML = ("You have successfully created an account!");
			  		
				}
			});
		}
		
		$scope.logout = function(){
			document.getElementById("state").innerHTML =("Loged out")
			authClient.logout();
		}
		
		
		
	})

//Login
users.controller('userCtrl', ['$scope', '$routeParams','$location', 
function($scope, $routeParams, $location) {

	var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");

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