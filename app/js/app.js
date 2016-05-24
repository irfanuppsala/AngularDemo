'use strict';

// Following is a module dependency specified like main module 'eventsApp' has dependency on ngSanitize module
var eventsApp = angular.module('eventsApp', ['ngSanitize']);

eventsApp.controller("myCtrl", function($scope) {
    $scope.records = [
        {
            "Name" : "Alfreds Futterkiste",
            "Country" : "Germany"
        },
        {
            "Name" : "Berglunds snabbköp",
            "Country" : "Sweden"
        },
        {
            "Name" : "Centro comercial Moctezuma",
            "Country" : "Mexico"
        },
        {
            "Name" : "Ernst Handel",
            "Country" : "Austria"
        }
    ]
});