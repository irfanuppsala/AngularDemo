'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="red">Hi there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color:'red'};
        $scope.myClass = 'green';
        $scope.evenClass = 'green';
        $scope.oddClass = 'red';
        $scope.buttonDisabled =true;
        $scope.CurrentDate = new Date();
        $scope.sortorder = 'name';
        $scope.event = {
            name: 'Angular Boot camp',
            date: '11/12/2016',
            time: '10:30 am',
            location:{
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl:'/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Introductory',
                    abstract: 'In this session you will learn the ins and outs of the Directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes from fun and profit',
                    creatorName: 'Jhon Doe',
                    duration: 2,
                    level: 'Advanced',
                    abstract: 'This session will take closer look at Directives',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Michael Match',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);
