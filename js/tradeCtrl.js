
dinnerPlannerApp.controller('tradeCtrl',function($scope, $routeParams, $location, Dinner, BookQueryService) {
 
 
 
	var user = Dinner.getUser();
	
	var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com/TradingList");
	
	ref.on("value", function(snapshot) {
		//all the emails
  		$scope.tradeList = snapshot.val();
		
	});

  $scope.alertMsg = {
    show: false,
    text:""
  };

   
  $scope.showAlert =function(tradeBook){ 
	var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com/Users");
	ref.on("child_added", function(snapshot) {
		//all the users
  		var newPost = snapshot.val();
		if(newPost.user == tradeBook.User){

        title = 'Contact information';
        content = '<h4><b>Email: </b>'+ newPost.user + "<br><b>Phone number: </b>" + newPost.number + "<b><br>Name: </b> " + newPost.fname + " " + newPost.lname +'</h4>'
        Dinner.alerts(title, content);
  	
  	}
  	else{
  		 
  			$scope.email = 'no user found';
  	}
  			
	});
  

  };

});
