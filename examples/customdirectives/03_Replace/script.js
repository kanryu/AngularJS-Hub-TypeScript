/// <reference path="../typings/tsd.d.ts" />
var mainModule = angular.module('mainModule', []);
mainModule.controller("mainController", function ($scope) {
    $scope.myScopeVar = "the scope variable value";
    $scope.nghReplaceDirLog = "";
}).directive("nghNoReplaceDir", function () {
    return {
        replace: false,
        template: 'This is <strong>nghNoReplaceDir</strong> directive printing <em>{{myScopeVar}}</em>'
    };
}).directive("nghReplaceDir", function () {
    return {
        replace: true,
        template: '<div my-div-attribute my-common-attribute="div value" style="font-size: 18px;" class="divFrame">\n\n' + 'This is <strong>nghReplaceDir</strong> directive printing <em>{{myScopeVar}}</em>\n\n' + '</div>',
        link: function (scope, element, attrs) {
            // Log the compiled HTML element
            scope.nghReplaceDirLog = element[0].outerHTML;
        }
    };
});
