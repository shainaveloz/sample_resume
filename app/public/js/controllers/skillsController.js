'use strict';

(function(){
    angular
        .module('app')
        .controller('skillsController', function(){
            this.resume = objective;
        });
    var objective = {
        name: 'John Doe',
        phone: '(555) 555-5555',
        title: 'Junior Web Developer',
        email: 'johndoe@example.com',
        purpose: 'Excel in a web developer career.',
        skills: ['Development: HTML5, JavaScript, Bootstrap, AngularJS, ReactJS, CSS3, Media Queries, Development',
            'Project: JIRA, Bitbucket, Confluence, Git, GitHub']
    };
})();