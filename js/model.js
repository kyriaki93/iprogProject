
dinnerPlannerApp.factory('Dinner',function () {

	this.user = "";
	var tradingList = [];
	
	
	//get email from user logged in 
	this.getUser = function(){
		var ref = new Firebase("https://dazzling-torch-7020.firebaseio.com");
		var authData = ref.getAuth();
		if (authData) {
  			return authData.password.email;
		} 
		else{
  			return 'no user';
		}
	}

	//alert function
	this.alerts = function(title, content){
		$.alert({
			title: title,
			content: content,
			animation: 'opacity',
			confirmButtonClass: 'btn-warning'
		});

	}

	this.chunk = function(arr, size) {
  		var newArr = [];
  		for (var i=0; i<arr.length; i+=size) {
    	newArr.push(arr.slice(i, i+size));
  		}
  		return newArr;
	}

	this.tradeList = function(book, user){
	
		var title = book.title;
		var user = this.getUser();
		
		var tradingRef = new Firebase('https://dazzling-torch-7020.firebaseio.com/TradingList');
		
		var newTradingRef = tradingRef.push();
		newTradingRef.set({ 'Title': title, 'User': user, id: newTradingRef.key() });

		alertTitle = 'Yay!';
		content = 'You have successfully addad the book '+ title +' up for trade!';
		this.alerts(alertTitle,content);
				
  	};	
  	
/*	this.f = function(x,user){
		
       		for(var prop in x) {
    			if(x.hasOwnProperty(prop)) {
        		if(x[prop] === title ) {
        		
        		
       		for(var proppa in x) {
       		
    			if(x.hasOwnProperty(proppa)) {
        		if(x[proppa] === user ) {
    		
				this.test.push(x)
    				
       		 }}}
       		 }}}
       		console.log(this.test);
	};	
  	
  	this.searchTradelist = function(book){
		
		var tradingsRef = new Firebase('https://dazzling-torch-7020.firebaseio.com/TradingList');
		var title = book.volumeInfo.title;
		var user = this.getUser();
		var string ="";
		if (string == ""){
		tradingsRef.on('value', function(snapshot) {
		
   			var x = snapshot.val();
   			for(var a in x) {
   			var bookObjekt = x[a];
   			
   			for(var b in bookObjekt){
   			
   			if (bookObjekt[b] === title){
   			
   			for(var s in bookObjekt){
   			if (bookObjekt[s] === user){
   				string= "<p> HEJ </p>"
   			}}}
   			}}
   			
       		 
   	 	
   			});
}else {   			
		console.log(string)
		return string;
   	 	}};   //count is now safe to use.
*/
		
	
	//console.log('YES'+Post.Title +"="+ title +"="+ Post.User +"="+ user);
  	//	if (Post.Title === title && Post.User != user ){
	/*tradingRef.on("child_added", function(snapshot) {
  		var Post = snapshot.val();
  		
  		console.log('YES'+Post.Title +"="+ title +"="+ Post.User +"="+ user);
  		if (Post.Title === title && Post.User != user ){
  		console.log('YES'+Post.Title +"="+ title +"="+ Post.User +"="+ user);
  	*/	
  		
  		 
  		
	
	
	
	this.removeTradeList = function(title){
	
		
		var user = this.getUser();
		
		var tradingDeleteRef = new Firebase('https://dazzling-torch-7020.firebaseio.com/TradingList');
		
		tradingDeleteRef.on("child_added", function(snapshot) {
  		var newPost = snapshot.val();
  		
  		if(newPost.User == user && newPost.Title == title){
  				var DeleteBookref = new Firebase("https://dazzling-torch-7020.firebaseio.com/TradingList/" + newPost.id)
  				DeleteBookref.remove();
		
		}});		
	}

  return this;

});


dinnerPlannerApp.service('BookQueryService', ['$http',
  function($http) {
    
    var service={};
    
    service.getBooks = function(searchWord) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=" + searchWord + "&key=AIzaSyDgsLy0_408ln-F6N4tt36E-vB7LSZo_kY&maxResults=40");
    };

    service.getBookByID = function(bookISBN) {
      return $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:"+bookISBN);
    };
 return service;

  }
]);