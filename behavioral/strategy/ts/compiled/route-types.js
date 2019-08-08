"use strict";
exports.__esModule = true;
var WalkingRoute = /** @class */ (function () {
    function WalkingRoute() {
    }
    WalkingRoute.prototype.buildRoute = function () {
        return 'foot';
    };
    return WalkingRoute;
}());
exports.WalkingRoute = WalkingRoute;
var CarRoute = /** @class */ (function () {
    function CarRoute() {
    }
    CarRoute.prototype.buildRoute = function () {
        return 'car';
    };
    return CarRoute;
}());
exports.CarRoute = CarRoute;
var BicycleRoute = /** @class */ (function () {
    function BicycleRoute() {
    }
    BicycleRoute.prototype.buildRoute = function () {
        return 'bicycle';
    };
    return BicycleRoute;
}());
exports.BicycleRoute = BicycleRoute;
