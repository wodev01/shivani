/**
 * Created by WO-1 on 21-Dec-15.
 */
app.controller('HomeCtrl1', function($scope,ContactService,$cookies, $http,uiGridConstants) {
    $scope.contacts = ContactService.list();
    console.log($scope.contacts);
    var uname = $cookies.get('userName');
    $scope.message = "welcome " + uname;

    var today = new Date();
    var nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);


    $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
        if( col.filters[0].term ){
            return 'header-filtered';
        } else {
            return '';
        }
    };

    $scope.gridOptions1 = {
       enableSorting: true,
        showGridFooter: true,
        showColumnFooter: true,
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
        },
        columnDefs: [
            { field: 'name', width: '13%' },
            { field: 'address.street',aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%' },
            { field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, aggregationHideLabel: true, width: '13%' },
            { name: 'ageMin', field: 'age', aggregationType: uiGridConstants.aggregationTypes.min, width: '13%', displayName: 'Age for min' },
            { name: 'ageMax', field: 'age', aggregationType: uiGridConstants.aggregationTypes.max, width: '13%', displayName: 'Age for max' },
            { name: 'customCellTemplate', field: 'age', width: '14%', footerCellTemplate: '<div class="ui-grid-cell-contents" style="background-color: Red;color: White">custom template</div>' },
            { name: 'registered', field: 'registered', width: '20%', cellFilter: 'date', footerCellFilter: 'date', aggregationType: uiGridConstants.aggregationTypes.max }
        ],
    };

    $scope.gridOptions2 = {
        enableSorting: true,
         /*columnDefs: [
             {
                 field: 'name',
                 sort: {
                    direction: uiGridConstants.DESC,
                    priority: 1
                }
             },

             {
                 field: 'gender',
                 sort: {
                     direction: uiGridConstants.ASC,
                     priority: 0
                 }
             }
         ],*/
         //suppressRemoveSort: true;
    };
    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
        .success(function(data) {
            data.forEach( function(row) {
                row.registered = Date.parse(row.registered);
            });
            $scope.gridOptions1.data = data;
            $scope.gridOptions2.data = data;
        });
});

app.controller('HomeCtrl',function ($scope, $http, $interval, uiGridConstants,$state,$uibModal,$cookies) {
    var uname = $cookies.get('userName');
    $scope.message = "welcome " + uname;

    $scope.gridOptions = {
        enableRowSelection: true,
        enableRowHeaderSelection: false ,
        enableColumnMenus : false,
        paginationPageSizes: [10,25, 50, 75],
        paginationPageSize: 10
    };

    $scope.mySelections = [];

    $scope.gridOptions.columnDefs = [
        { name: 'id' },
        { name: 'name'},
        { name: 'email'},
        /*{ name: 'age', displayName: 'Age (not focusable)', allowCellFocus : false },*/
        { name: 'address.city', displayName: 'Address'},
        { name: 'edit', displayName: 'Action', cellTemplate: '<div style="text-align: center"><a href="javscript:void(0);" uib-tooltip="View" tooltip-placement="left" id="editBtn" type="button" ng-click="grid.appScope.edit(row)" ><i class="fa fa-eye"></i></a> | ' +
        '<a href="javscript:void(0);" uib-tooltip="Delete" tooltip-placement="right" id="deletetBtn" type="button"  ng-click="grid.appScope.delete(row)" ><i class="fa fa-trash" style="color:red"></i></a> </div>'}
    ];

    $scope.gridOptions.multiSelect = false;
    $scope.gridOptions.modifierKeysToMultiSelect = false;
    $scope.gridOptions.noUnselect = true;

    $scope.edit = function(row) {
        window.console && console.log(row.entity);

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/employeeDialog.html',
            controller: 'ViewCtrl',
            resolve: {
                emp: function () {
                    return  row.entity;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            console.log(selectedItem);
            var data = $scope.gridOptions.data ;
            for (i in data) {
                if (data[i].id == selectedItem.id) {
                    data[i] = selectedItem;
                }
            }
            console.log(data);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.delete = function(row) {
        window.console && console.log(row.entity);

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/deleteDialog.html',
            controller: 'DeleteCtrl',
            size: 'sm'
        });

        modalInstance.result.then(function () {
            var data = $scope.gridOptions.data ;
            for (i in data) {
                if (data[i].id == row.entity.id) {
                    data.splice(i, 1);
                }
            }
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            var msg = 'row selected ' + row.isSelected;
            $scope.mySelections = gridApi.selection.getSelectedRows();
            console.log( row.entity.id);
            //$state.go("Employee",{id: row.entity.id});
        });
    };

    $scope.toggleRowSelection = function() {
        $scope.gridApi.selection.clearSelectedRows();
        $scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
        $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
    };

    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
        .success(function(data) {
            $scope.gridOptions.data = data;
            // $interval whilst we wait for the grid to digest the data we just gave it
            //$interval( function() {$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);}, 0, 1);
        });
});
