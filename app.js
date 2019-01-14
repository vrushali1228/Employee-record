angular.module('App', []).controller('CrudCtrl', ['$scope',
    function ($scope) {
        $scope.employees = [{
                id: 1,
                name: "vrushali sonawane",
                age: 24,
                editable: false
            },
            {
                id: 2,
                name: "kanchan sawalkar",
                age: 22,
                editable: false
            },
            {
                id: 3,
                name: "pooja sawant",
                age: 23,
                editable: false
            },
            {
                id: 4,
                name: "rani saputare",
                age: 26,
                editable: false
            }
        ];

        $scope.entity = {}

        $scope.edit = function (index) {
            $scope.entity = $scope.employees[index];
            $scope.entity.index = index;
            $scope.entity.editable = true;
        }

        $scope.delete = function (index) {
            $scope.employees.splice(index, 1);
        }

        $scope.save = function (index) {
            $scope.employees[index].editable = false;

        }

        $scope.add = function () {
            $scope.employees.push({
                name: "",
                id: "",
                editable: true
            })
        }
    }
]);