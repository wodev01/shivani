
app.controller('LoginCtrl', ['$scope', '$state','$timeout','$cookies',LoginCheckController]);

function LoginCheckController($scope, $state,$timeout,$cookies) {
    $scope.authObj = {
        userName : '',
        pass : ''
    };

    $scope.errorMsg = '';

    $scope.LoginCheck = function(authObj) {
        console.log($scope.authObj);
        $scope.dataLoading = true;
        $timeout(function(){
            if(authObj.userName == 'test@test.com' && authObj.pass == '123456')
            {
                // Setting a cookie
                var rand = function() {
                    return Math.random().toString(36).substr(2); // remove `0.`
                };

                var token = function() {
                    return rand() + rand(); // to make it longer
                };

                var token = token();
                console.log(token);

                /*$scope.currentUser = {
                        username: authObj.userName,
                        authdata: authObj.pass,
                        token :  token
                };
                $cookies.put('currentUser',  $scope.currentUser);
                $cookies.get('currentUser');
                console.log( $scope.currentUser);*/

                $cookies.put('token', token);
                $cookies.put('userName', authObj.userName);
                $cookies.put('password', authObj.pass);

                $state.go('home');
            }
            else{
                $scope.errorMsg="Invalid Username Or Password";
            }
            $scope.dataLoading = false;
        },2000);
    };

    /*$scope.go = function(path) {
        $location.path("/home");
    };*/
}

/*
angular.module('Authentication')

    .controller('LoginCheckController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope, $location, AuthenticationService) {
            // reset login status
            AuthenticationService.ClearCredentials();

            $scope.login = function () {
                $scope.dataLoading = true;
                AuthenticationService.Login($scope.email, $scope.password, function(response) {
                    if(response.success) {
                        AuthenticationService.SetCredentials($scope.email, $scope.password);
                        $location.path('/');
                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });
            };
        }]);
*/
