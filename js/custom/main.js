var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /index
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            controller: "LoginCheckController"
        })
        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        });
});

app.controller('LoginCheckController', ['$scope', '$location', LoginCheckController]);

function LoginCheckController($scope, $location) {

    $scope.users = [{
        UserName: 'wo.dev02@gmail.com',
        Password: 'hi'
    }, {
        UserName: '159@gmail.com',
        Password: 'hi'
    }, {
        UserName: '753@gmail.com',
        Password: 'hi'
    }];

    $scope.LoginCheck = function() {
        $location.path("home");
    };

    $scope.go = function(path) {
        $location.path("/home");
    };
}
