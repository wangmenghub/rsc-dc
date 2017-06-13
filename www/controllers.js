/**
 * 测试使用，不做业务
 */

angular.module('starter.controllers', [])
    /**
     * 采购
     */
    .controller('buyCtrl', function ($scope) {
        var vm = this.vm = $scope;
    })
    /**
     * 销售
     */
    .controller('sellCtrl', function ($scope) {


    })
    /**
     * 物流
     */
    .controller('passCtrl', function ($scope, $stateParams) {

    })
    /**
     * 司机
     */
    .controller('carCtrl', function ($scope, $stateParams) {

    })
    /**
     * 企业关系
     */
    .controller('relationCtrl', function ($scope, $stateParams) {

    })
    /**
     * 市场分布
     */
    .controller('marketCtrl', function ($scope, $stateParams) {

    });
