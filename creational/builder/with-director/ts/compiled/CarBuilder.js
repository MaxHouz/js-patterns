"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.reset();
    }
    CarBuilder.prototype.reset = function () {
        this.car = new Car_1.Car();
    };
    CarBuilder.prototype.getCar = function () {
        return this.car;
    };
    return CarBuilder;
}());
exports.CarBuilder = CarBuilder;
