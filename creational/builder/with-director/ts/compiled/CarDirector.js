"use strict";
exports.__esModule = true;
var CarDirector = /** @class */ (function () {
    function CarDirector(carBuilder) {
        this.carBuilder = carBuilder;
    }
    CarDirector.prototype.setCarBuilder = function (builder) {
        this.carBuilder = builder;
    };
    CarDirector.prototype.getCar = function () {
        return this.carBuilder.getCar();
    };
    CarDirector.prototype.buildCar = function () {
        this.carBuilder.setMark();
        this.carBuilder.setMaxSpeed();
        this.carBuilder.setTransmission();
    };
    return CarDirector;
}());
exports.CarDirector = CarDirector;
