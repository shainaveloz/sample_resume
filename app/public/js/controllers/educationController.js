'use strict';

(function(){
    angular
        .module('app')
        .controller('educationController', function(){
            this.school = education;
        });
        var education = {
            university: {
                name: 'Michigan State University',
                degree: 'BBA',
                gpa: '2.2',
                major: 'Computer Science',
                minor: 'Drinking'
            }
        }
})();