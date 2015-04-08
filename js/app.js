
var app = angular.module('app',
 ['firebase', 'ngRoute', 'userCtrl']);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/', {
				templateUrl: 'js/view/home.html',
			}).when('/login', {
				templateUrl: 'js/view/loginView.html',
				controller: 'userCtrl',
			})
			.when('/signup', {
				templateUrl: 'js/view/signup.html',
				controller: 'userCtrl',
			})
			.when('/home', {
				templateUrl: 'js/view/home.html',
				
			});
		}
		]);
		

		
		
		