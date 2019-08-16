"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var models_1 = require("./models");
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.mark = 'Default';
        this.transmission = models_1.Transmission.Manual;
        this.maxSpeed = 100;
    }
    CarBuilder.prototype.setMark = function (mark) {
        this.mark = mark;
        return this;
    };
    CarBuilder.prototype.getMark = function () {
        return this.mark;
    };
    CarBuilder.prototype.setTransmission = function (transmission) {
        this.transmission = transmission;
        return this;
    };
    CarBuilder.prototype.getTransmission = function () {
        return this.transmission;
    };
    CarBuilder.prototype.setMaxSpeed = function (maxSpeed) {
        this.maxSpeed = maxSpeed;
        return this;
    };
    CarBuilder.prototype.getMaxSpeed = function () {
        return this.maxSpeed;
    };
    CarBuilder.prototype.build = function () {
        return new Car_1.Car(this);
    };
    return CarBuilder;
}());
exports.CarBuilder = CarBuilder;
