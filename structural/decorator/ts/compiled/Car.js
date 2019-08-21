"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
        this.speed = 120;
    }
    Car.prototype.showCarInfo = function () {
        console.log(this.formCarInfo());
    };
    Car.prototype.getMaxSpeed = function () {
        return this.speed;
    };
    return Car;
}());
exports.Car = Car;
