/**
 * 测试使用，不做业务
 */

angular.module('starter.controllers', [])
    /**
     * 采购
     */
    .controller('buyCtrl', function ($scope,$location) {
        var vm  = $scope.vm = this;
        console.log($location.$$url)
        vm.data = {
            id:$location.$$url
        };
        //初始化
        vm.init = function () {

        }
    })
    /**
     * 销售
     */
    .controller('sellCtrl', function ($scope) {
        var vm  = $scope.vm = this;

        //初始化
        vm.init = function () {

        }

    })
    /**
     * 物流
     */
    .controller('passCtrl', function ($scope, $stateParams) {
        var vm  = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 司机
     */
    .controller('carCtrl', function ($scope, $stateParams) {
        var vm  = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 企业关系
     */
    .controller('relationCtrl', function ($scope, $stateParams) {
        var vm  = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 市场分布
     */
    .controller('marketCtrl', function ($scope, $stateParams) {
        var vm  = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    });
