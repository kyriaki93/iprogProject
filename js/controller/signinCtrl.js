//sign in controller
var users = angular.module('signinCtrl', []);

	users.controller('signinCtrl', function ($scope){
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