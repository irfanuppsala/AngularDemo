'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.snippet = '<span style="red">Hi there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color:'red'};
        $scope.myClass = 'green';
        $scope.evenClass = 'green';
        $scope.oddClass = 'red';
        $scope.buttonDisabled =true;
        $scope.CurrentDate = new Date();
        $scope.sortorder = 'name';
        $scope.event = eventData.event;

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);
