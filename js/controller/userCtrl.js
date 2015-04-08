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
			  		alert("Error creating user:"+ error);
				} else {
			  		alert("You have successfully created an account!");
				}
			});
		}
	
		
		//Login button
		$scope.submit = function(){
			ref.authWithPassword({
  			email    : $scope.email,
  			password : $scope.password
			}, function(error, authData) {
  			if (error) {
   		    	alert("Login Failed!", error);
  			} else {
    			alert("Yay "+ authData.password.email);
  			}
			
		});
		}
		
		$scope.logout = function(){
			authClient.logout();
		}
		
		
		
	})