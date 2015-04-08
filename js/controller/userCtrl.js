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
	
		
		//Login button
		$scope.submit = function(){
			ref.authWithPassword({
  			email    : $scope.email,
  			password : $scope.password
			}, function(error, authData) {
  			if (error) {
   		    	document.getElementById("state").innerHTML = ("Login Failed!", error);
  			} else {
    			document.getElementById("state").innerHTML = ("Yay "+ authData.password.email);
  			}
			
		});
		}
		
		$scope.logout = function(){
			document.getElementById("state").innerHTML =("Loged out")
			authClient.logout();
		}
		
		
		
	})