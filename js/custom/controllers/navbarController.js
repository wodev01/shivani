app.controller('NavbarController', ['$scope','$cookies','$state',NavbarController]);

function NavbarController($scope, $cookies,$state) {
    $scope.signout = function() {
        /*$cookies.remove('currentUser');*/
        $cookies.remove('token');
        $cookies.remove('userName');
        $cookies.remove('password');
        $state.go('/');
    }

}
