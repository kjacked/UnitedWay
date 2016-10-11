angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.home', {
    url: '/Home',
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
    url: '/rewards',
    views: {
      'tab3': {
        templateUrl: 'templates/myRewards.html',
        controller: 'myRewardsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
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

  .state('passions', {
    url: '/page7',
    templateUrl: 'templates/passions.html',
    controller: 'passionsCtrl'
  })

  .state('profile', {
    url: '/page8',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('testimonials', {
    url: '/page9',
    templateUrl: 'templates/testimonials.html',
    controller: 'testimonialsCtrl'
  })

  .state('aboutUs', {
    url: '/aboutus',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })
  
    .state('contactUs', {
    url: '/contactUs',
    templateUrl: 'templates/contactUs.html',
    controller: 'aboutUsCtrl'
  })


$urlRouterProvider.otherwise('/page1/Home')



});
