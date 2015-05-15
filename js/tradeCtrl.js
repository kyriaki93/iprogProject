
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
  			//gets all the information from the user that is logged in
  			$scope.email = newPost.user;
  			$scope.number = newPost.number;
  			$scope.fname = newPost.fname;
  			$scope.lname = newPost.lname;
  			$scope.id = newPost.id; 
  			$scope.$apply(); 

			  // $.alert({
			  //   title: 'Contact information',
			  //   content: '<h4><b>Email: </b>'+ newPost.user + "<br><b>Phone number: </b>" + newPost.number + "<b><br>Name: </b> " + newPost.fname + " " + newPost.lname +'</h4>',
			  //   animation: 'opacity',
			  //   confirmButtonClass: 'btn-warning'
			  // });
        title = 'Contact information';
        content = '<h4><b>Email: </b>'+ newPost.user + "<br><b>Phone number: </b>" + newPost.number + "<b><br>Name: </b> " + newPost.fname + " " + newPost.lname +'</h4>'
        Dinner.alerts(title, content);
  	
  	}
  	else{
  		  //if no user is logged in or does not exist in the database, then no one is found
  			$scope.email = 'no user found';
  	}
  			
	});
  

  };

});
