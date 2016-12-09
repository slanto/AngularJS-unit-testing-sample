describe('app module', function () {
    var app;
    beforeAll(function () {
        app = angular.module('app');
    });

    it('should be defined', function () {
        expect(app).toBeDefined();
    });
});

describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});