(function () {
    'use strict'
    angular.module('app')
        .factory('FriendService', ['$q', '$http', FriendService]);

    function FriendService($q, $http) {
        return {
            getFriends: getFriends
        };

        function getFriends() {
            var deferred = $q.defer();   
                     
            $http.get('http://jsonplaceholder.typicode.com/users')
                .then(function (result) {                    
                    deferred.resolve(result.data)
                });
                return deferred.promise;
        };
    }
})();
