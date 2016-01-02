var app = angular.module('app', ['ui.router','ngCookies','ngStorage','ngAnimate', 'ui.bootstrap','ui.grid', 'ui.grid.edit',
    'ui.grid.selection','ngTouch','ui.grid.pagination','ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {
    console.log("app config");
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isNotLoggedIn();
                }]
            }
        })

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    console.log(AuthService.isNotLoggedIn());
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('Employee', {
            url: '/Employee/:id',
            /*url: '/Employee',*/
            templateUrl: 'views/employee.html',
            controller: 'EmployeeCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('EmployeeDetail', {
            url: '/EmployeeDetail',
            templateUrl: 'views/employeeDetail.html',
            controller: 'EmployeeDetailCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('Directive', {
            url: '/Directive',
            templateUrl: 'views/directive.html',
            controller: 'DirectiveCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('Promise', {
            url: '/Promise',
            templateUrl: 'views/promise.html',
            controller: 'PromiseCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('AboutUs', {
            url: '/AboutUs',
            templateUrl: 'views/aboutUs.html',
            controller: 'AboutUsCtrl',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('movies', { // state for showing all movies
            url: '/movies',
            templateUrl: 'views/movies.html',
            controller: 'MovieListController',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('viewMovie', { //state for showing single movie
            url: '/movies/:id/view',
            templateUrl: 'views/movie-view.html',
            controller: 'MovieViewController',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('newMovie', { //state for adding a new movie
            url: '/movies/new',
            templateUrl: 'views/movie-add.html',
            controller: 'MovieCreateController',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        })

        .state('editMovie', { //state for updating a movie
            url: '/movies/:id/edit',
            templateUrl: 'views/movie-edit.html',
            controller: 'MovieEditController',
            resolve: {
                fnCheckAuth: ['AuthService',function (AuthService) {
                    return AuthService.isLoggedIn();
                }]
            }
        });

       /* .state('signOut', {
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'SignoutCtrl'
        });*/

});

/*app.run(['$rootScope','$cookies', '$state',
    function($rootScope,$cookies,$state) {
        // Get cookie

        /!*$rootScope.globals = $cookies.get('globals') || {};
        console.log($rootScope.globals);*!/


        var userName = $cookies.get('userName');
        if(userName != "")
        {
            console.log("in");
            $state.go('home');
        }
        else{
            console.log("in 9999");
        }
        console.log("app run",userName);
}]);*/


app.run( function( $rootScope, $location ,$cookies) {
   /* var token = $cookies.get('token');
    $rootScope.isLoggedIn = token ? true : false;
    $rootScope.$on( "$stateChangeStart", function(event, toState, toParams
        , fromState, fromParams){
         if (!token){
            $rootScope.isLoggedIn = false;
             //$scope.$apply()
            $location.url('/');

        }
        else{
            $rootScope.isLoggedIn = true;
             //$scope.$apply();
            $location.url('/home');

        }
    });*/
} );





