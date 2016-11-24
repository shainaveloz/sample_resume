'use strict';

(function(){

    angular
        .module('app', ['ui.router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('index', {
                    url: "/",
                    templateUrl: "../views/index.html"
                })
        });
})();