'use strict';

(function(){
    angular
        .module('app')
        .controller('employmentController', function(){
            this.jobs = employment;
        });
        var employment = [
            {
                apple: {
                    title: 'Junior Web Developer',
                    company: 'Apple',
                    dates: 'June 2015 to September 2016',
                    duties: [
                        'Developed responsive corporate websites',
                        'Did some cool stuff',
                        'Led team in closing out JIRA bugs'
                    ]
                }
            },
            {
                google: {
                    title: 'Web Development Intern',
                    company: 'Google Inc.',
                    dates: 'January 2015 to May 2015',
                    duties: [
                        'Went on coffee runs for the team',
                        'Team record for longest keg stand',
                        'Once ate 82 cupcakes during a team building event'
                    ]
                }
            }
        ]
})();