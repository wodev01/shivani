/*
app.controller('EmployeeDetailCtrl', function($scope,$state,ContactService,$sessionStorage) {
    $scope.message = "This is Employee Detail page";

    $scope.contacts = ContactService.list();

    $scope.delete = function (id) {
        console.log(id);
        ContactService.deletedata(id);

        $scope.newcontact = ContactService.getEmployee() ? ContactService.getEmployee() : {};

        if ($scope.newcontact.id == id)
            $scope.newcontact = {};
    }

    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
        ContactService.setEmployee($scope.newcontact);
        $sessionStorage.SessionMessage = "Edit";
        $state.go("Employee");
    }
});*/

app.controller('EmployeeDetailCtrl', function($scope,$state,ContactService, $uibModal, $log) {
    $scope.message = "This is Employee Detail page";

    $scope.contacts = ContactService.list();

    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
        ContactService.setEmployee($scope.newcontact);
        $state.go("Employee",{id: id});
    };

    $scope.animationsEnabled = true;

    $scope.delete = function (id) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/deleteDialog.html',
            controller: 'DeleteCtrl',
            size: 'sm'
        });

        modalInstance.result.then(function () {
            ContactService.deletedata(id);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.view = function(id){
        console.log(id);
        $scope.emp = angular.copy(ContactService.get(id));
        if(id>=0) {
            $scope.emp = angular.copy(ContactService.get(id));
            console.log("yyy");
        }else{
            $scope.emp ={};
            console.log("hhh");
        }
        console.log($scope.emp);
        //console.log( $scope.emp);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/employeeDialog.html',
            controller: 'ViewCtrl',
            resolve: {
                emp: function () {
                    return $scope.emp;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log(selectedItem);
            ContactService.save(selectedItem);
            /*if (selectedItem.id == null) {
                //if this is new contact, add it in contacts array
                selectedItem.id = uid++;
                contacts.push(contact);
            } else {
                for (i in $scope.contacts) {
                    if ($scope.contacts[i].id == selectedItem.id) {
                        $scope.contacts[i] = selectedItem;
                    }
            }*/

            /*for (i in $scope.contacts) {
                if ($scope.contacts[i].id == selectedItem.id) {
                    $scope.contacts[i] = selectedItem;
                }
                else{
                    console.log("new");
                }
            }*/
           /* $scope.contacts = angular.copy(selectedItem);*/
            console.log($scope.contacts);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

});

