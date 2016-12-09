angular.module('app').directive('friendDisplayDirective', [friendDisplayDirective]);

function friendDisplayDirective(){
    var directive = {
        templateUrl: 'app/friend.display.template.html',
        restrict: 'E',
        scope: {
            friends: '='
        }
    }

    return directive;
}