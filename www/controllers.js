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
        vm.donglimei = [
            {value: 3, name: '进行中'},
            {value: 1, name: '已完成'},
            {value: 2, name: '已发布'}
        ];
        vm.wuyanmei=[
            {value: 3, name: '进行中'},
            {value: 3, name: '已完成'},
            {value: 4, name: '已发布'}
        ];
        vm.penchuimei=[
            {value: 5, name: '进行中'},
            {value: 8, name: '已完成'},
            {value: 4, name: '已发布'}
        ]
        vm.lianjiaomei=[
            {value: 3, name: '进行中'},
            {value: 2, name: '已完成'},
            {value: 4, name: '已发布'}
        ]
        vm.yuanmei=[
            {value: 3, name: '进行中'},
            {value: 3, name: '已完成'},
            {value: 1, name: '已发布'}
        ]
        //初始化
        vm.init = function () {

        }
        vm.test = function () {
            vm.donglimei[0].value++
            vm.wuyanmei[1].value++
            vm.penchuimei[2].value++
            vm.lianjiaomei[0].value++
            vm.yuanmei[2].value++
        }
    })
    /**
     * 销售
     */
    .controller('sellCtrl', function ($scope,$location) {
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
