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
        ];
        vm.lianjiaomei=[
            {value: 3, name: '进行中'},
            {value: 2, name: '已完成'},
            {value: 4, name: '已发布'}
        ];
        vm.yuanmei=[
            {value: 3, name: '进行中'},
            {value: 3, name: '已完成'},
            {value: 1, name: '已发布'}
        ];
        vm.liulan=[
            {
                name: '动力煤',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '无烟煤',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '喷吹煤',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '炼焦煤',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '原煤',
                type: 'line',
                stack: '总量',
                data: [152, 254, 111, 241, 54, 87, 451]
            }
        ];
        //初始化
        vm.init = function () {

        }
        vm.test = function () {
            vm.donglimei[0].value++;
            vm.wuyanmei[1].value++;
            vm.penchuimei[2].value++;
            vm.lianjiaomei[0].value++;
            vm.yuanmei[2].value++;
            for (var i = 1; i < vm.liulan.length; i++) {
                for (var j = 0; j < vm.liulan[i].data.length; j++) {
                    vm.liulan[i].data[6]++;
                    vm.liulan[i].data[4]++;
                    vm.liulan[i].data[2]++;
                }
            }
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
