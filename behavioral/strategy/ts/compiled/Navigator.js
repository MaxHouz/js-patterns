"use strict";
exports.__esModule = true;
var Navigator = /** @class */ (function () {
    function Navigator(destination, routeType) {
        this.destination = destination;
        this.routeType = routeType;
    }
    Navigator.prototype.buildRoute = function () {
        console.log("Route to " + this.destination + " by " + this.routeType.buildRoute() + " is ready");
    };
    Navigator.prototype.changeRouteType = function (newRouteType) {
        this.routeType = newRouteType;
        console.log('Route type changed. Calculating new route...');
        this.buildRoute();
    };
    return Navigator;
}());
exports.Navigator = Navigator;
