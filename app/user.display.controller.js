angular.module('app').controller('UserDisplayController', ['UserService', 'FriendService', userDisplayController]);

function userDisplayController(userService, friendService){
    var vm = this;
    vm.users = [];
    vm.friends = [];
    vm.executeSearch = executeSearch;
    vm.executeSearchFriends = executeSearchFriends;

    function executeSearch(){
        userService.getUsers().then(getUsersSuccess);
    }

    function getUsersSuccess(result){
        vm.users = result;
    }

    function executeSearchFriends(){
        friendService.getFriends().then(getFriendsSuccess);
    }

    function getFriendsSuccess(result){
        vm.friends = result;
    }
}