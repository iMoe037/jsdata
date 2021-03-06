'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function(User, $stateParams){

				return User.find($stateParams.userId);
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, author, Post) {

	$scope.newPost = {};

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	};

	$scope.createNewPost = function(info) {
		Post.create({title: info.title, body: info.body, author: author._id})
		.then(function(response){
			$state.go('main');
			
		});
	};

	

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 