// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers','rsc.directive'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // 交易
            .state('trade', {
                url: '/trade',
                cache:true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/trade.html',
                        controller: 'tradeCtrl'
                    }
                }
            })
            // 物流
            .state('pass', {
                url: '/pass',
                cache:true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pass.html',
                        controller: 'passCtrl'
                    }
                }
            })
            // 司机
            .state('car', {
                url: '/car',
                cache:true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/car.html',
                        controller: 'carCtrl'
                    }
                }
            })
            // 企业关系
            .state('relation', {
                url: '/relation',
                cache:true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/relation.html',
                        controller: 'relationCtrl'
                    }
                }
            })
            // 市场分布
            .state('market', {
                url: '/market',
                cache:true,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/market.html',
                        controller: 'marketCtrl'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/trade');
    });
