'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function(User) {
				return User.findAll()
				.then(function (userObjects){
					// console.log(userObjects);
					return userObjects.map(function(obj){
						var user = User.createInstance(obj);
						return User.inject(user);
					});
				});
			},
			posts: function(Post, users){
				return Post.findAll({});
			}


		}
	});
});

app.controller('MainController', function($scope, posts, Post) {
	var dataInJsDataCache = Post.getAll();
	$scope.allPosts = posts;
	


 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/

});


