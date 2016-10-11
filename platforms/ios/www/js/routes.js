angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('tabsController', {
                url: '/page1',
                templateUrl: 'templates/tabsController.html',
                abstract: true
            })

            .state('tabsController.home', {
                url: '/home',
                views: {
                    'tab1': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

            .state('tabsController.donate', {
                url: '/donate',
                views: {
                    'tab2': {
                        templateUrl: 'templates/donate.html',
                        controller: 'donateCtrl'
                    }
                }
            })

            .state('tabsController.myRewards', {
                url: '/myRewards',
                views: {
                    'tab3': {
                        templateUrl: 'templates/myRewards.html',
                        controller: 'myRewardsCtrl'
                    }
                }
            })

            .state('login', {
                url: '/page5',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('signup', {
                url: '/page6',
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })

            .state('interests', {
                url: '/page7',
                templateUrl: 'templates/interests.html',
                controller: 'interestsCtrl'
            })

        $urlRouterProvider.otherwise('/page1/page4')


    });