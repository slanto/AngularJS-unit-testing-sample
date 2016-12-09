describe('FriendService', function () {
    var $rootScope, $httpBackend, $q, FriendService, mockDeferred;

    beforeEach(function () {
        angular.mock.module('app');

        angular.mock.inject(function (_$rootScope_, _$httpBackend_, _$q_, _FriendService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            FriendService = _FriendService_;
        });
    });

    it('should be defined', function () {
        expect(FriendService).toBeDefined();
    });

    it('getFriends should be defined', function () {
        expect(FriendService.getFriends).toBeDefined();
    });

    it('getFriends should return a value', function () {
        var mockData = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                    "geo": {
                        "lat": "-68.6102",
                        "lng": "-47.0653"
                    }
                },
                "phone": "1-463-123-4447",
                "website": "ramiro.info",
                "company": {
                    "name": "Romaguera-Jacobson",
                    "catchPhrase": "Face to face bifurcated interface",
                    "bs": "e-enable strategic applications"
                }
            }
        ];

        $httpBackend.when('GET', 'http://jsonplaceholder.typicode.com/users').respond(200, mockData);
        var resolvedValue;
        var promise = FriendService.getFriends();
        promise.then(function (value) {
                resolvedValue = value;
            });
         $httpBackend.flush();
         expect(resolvedValue).toEqual(mockData);   
    });
});