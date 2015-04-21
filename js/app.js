
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
				
			})
			.when('/search', {
			templateUrl: 'js/view/search.html',
				
			})
			.when('/logout', {
			templateUrl: 'js/view/home.html',
			controller: 'userCtrl'
				
			})
			.when('/user', {
			templateUrl: 'js/view/user.html',
				
			})
			.when('/cart', {
			templateUrl: 'js/view/cart.html',
				
			})
			.when('/library', {
			templateUrl: 'js/view/library.html',			
			})
			.when('/current', {
			templateUrl: 'js/view/startpage.html',
			
			});

		}
		]);


		


		
		
		