'use strict';
app.factory('AuthService', [ '$q', '$cookies', '$rootScope', '$location','$state','$window',
    function ($q, $cookies, $rootScope, $location, $state,$window) {
        console.log("services");
        var AuthService = {};

        AuthService.isLoggedIn = function(){
            console.log("loggedIn",$cookies.get('token'));
            var token = $cookies.get('token');
            var deferred = $q.defer();
            if(token) {
                $rootScope.isLoggedIn = true;
                deferred.resolve(token);
            } else {
                $location.url("/");
                //deferred.reject(token);
            }
            return deferred.promise;
        };

        AuthService.isNotLoggedIn = function(){
            var token = $cookies.get('token');

            var deferred = $q.defer();
            if(!token) {
                $rootScope.isLoggedIn = false;
                deferred.resolve(token);
            }
            else {
                $rootScope.isLoggedIn = true;
                $location.url("/home");
                deferred.resolve(token);
            }
            return deferred.promise;
        };

        return AuthService;
    }]);