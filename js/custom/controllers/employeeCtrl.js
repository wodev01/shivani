app.controller('EmployeeCtrl', function($scope,$state,ContactService) {
    $scope.message = "Employee";
    $scope.newcontact={};
    $scope.buttonText = 'Save';

    //console.log($state.params.id);

    if($state.params.id)
    {
        $scope.newcontact = angular.copy(ContactService.get($state.params.id));
        $scope.buttonText = 'Update';
    }

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $state.go("EmployeeDetail");
    }
});