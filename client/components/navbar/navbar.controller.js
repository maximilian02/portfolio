'use strict';

angular.module('portfolioApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Me',
        'link': '/'
      },
      {
        'title': 'Work',
        'link': '/work'
      },
      {
        'title': 'Contact',
        'link': '/contact'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });