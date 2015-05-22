
dinnerPlannerApp.controller('mapCtrl', ['$scope','$firebaseArray', '$routeParams', '$location', '$http', function($scope,$firebaseArray, $routeParams, $location, Dinner, $http, $interval) {
 

    //marker image for libraries
    $scope.image = '/images/marker.png';

    //marker image for tradeable books
    $scope.imageTrade = '/images/markery.png';
    
    //get books from database that is up for trade
    $scope.getTradingPoint = function(){
      var Addref = $firebaseArray(new Firebase("https://dazzling-torch-7020.firebaseio.com/TradingList"));
 		 
      $scope.tradingPoints =[];
 		
 		  Addref.$loaded().then(function(){
		
		    for (s=0; s<Addref.length; s++){
 		       if (Addref[s] !== undefined){

 		         $scope.tradingPoints.push(Addref[s]);

 		       }
         }

		    });
    };
    


      //get users current position
      navigator.geolocation.watchPosition(function(position) {
      console.log("I am located at: " + position.coords.latitude + ", " + position.coords.longitude);
        $scope.currentLa = position.coords.latitude;
        $scope.currentLo = position.coords.longitude;
      });

      

  $scope.getTradingPoint();


}]);

  