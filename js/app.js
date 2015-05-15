var dinnerPlannerApp = angular.module('dinnerPlanner', ['firebase','ngRoute']);

dinnerPlannerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      
      
      when('/login', {
				templateUrl: 'partials/loginView.html',
				controller: 'userCtrl',
			}).
      
      when('/signup', {
				templateUrl: 'partials/signup.html',
				controller: 'signinCtrl',
			}).
			
	  when('/search', {
				templateUrl: 'partials/search.html',
				controller: 'searchCtrl',
			}).
	  when('/logout', {
			templateUrl: 'partials/home.html',
			controller: 'userCtrl'
			}).
	when('/user', {
			templateUrl: 'partials/contact.html',
			controller: 'contactCtrl'
				
			}).
	when('/trade', {
			templateUrl: 'partials/trade.html',
			controller: 'tradeCtrl'	
			}).
	when('/library', {
			templateUrl: 'partials/library.html',
			controller: 'libraryCtrl'			
			}).				
      otherwise({
        redirectTo: '/home'
      });
  }]);
  
         
  
