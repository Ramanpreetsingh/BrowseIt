'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('myApp',['ngRoute','myAppControllers']);


myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/movies',{
			templateUrl: 'templates/movies.html',
			controller: 'MovieListCtrl'
		}).
		when('/related-movies/:Title',{
			templateUrl: 'templates/related-movies.html',
			controller: 'RelatedMoviesListCtrl'
		}).
		otherwise({
			redirectTo: '/movies'
		});
	}]);

