"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(builder) {
        this.mark = builder.getMark();
        this.transmission = builder.getTransmission();
        this.maxSpeed = builder.getMaxSpeed();
    }
    Car.prototype.showDetails = function () {
        console.log("\n            Mark: " + this.mark + "\n            Transmission: " + this.transmission + "\n            maxSpeed: " + this.maxSpeed + "\n        ");
    };
    return Car;
}());
exports.Car = Car;
