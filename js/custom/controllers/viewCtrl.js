app.controller('ViewCtrl', function ($scope, $uibModalInstance, emp) {


    $scope.emp = emp;
    console.log($scope.emp);
    $scope.employeename = angular.copy(emp.name),
    /*$scope.employee = {
        id: $scope.emp.id,
        name: angular.copy($scope.emp.name),
        email: $scope.emp.email,
        salary: $scope.emp.salary,
        phone: $scope.emp.phone
    };*/

    $scope.editable = true;


    $scope.ok = function () {
        $uibModalInstance.close(emp);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.edit = function (emp) {
        //$uibModalInstance.close(emp);
       /* $scope.employee = {
            id: $scope.emp.id,
            name: angular.copy($scope.emp.name),
            email: $scope.emp.email,
            salary: $scope.emp.salary,
            phone: $scope.emp.phone
        };*/
        $scope.editable = false;
    };
});
