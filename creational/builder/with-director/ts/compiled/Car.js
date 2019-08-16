"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setMark = function (mark) {
        this.mark = mark;
    };
    Car.prototype.getMark = function () {
        return this.mark;
    };
    Car.prototype.setTransmission = function (transmission) {
        this.transmission = transmission;
    };
    Car.prototype.getTransmission = function () {
        return this.transmission;
    };
    Car.prototype.setMaxSpeed = function (maxSpeed) {
        this.maxSpeed = maxSpeed;
    };
    Car.prototype.getMaxSpeed = function () {
        return this.maxSpeed;
    };
    Car.prototype.showDetails = function () {
        console.log("\n            Mark: " + this.mark + "\n            Transmission: " + this.transmission + "\n            maxSpeed: " + this.maxSpeed + "\n        ");
    };
    return Car;
}());
exports.Car = Car;
