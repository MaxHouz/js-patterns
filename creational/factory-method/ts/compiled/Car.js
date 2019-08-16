"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(model, transmission, engine, additional) {
        if (additional === void 0) { additional = []; }
        this.model = model;
        this.transmission = transmission;
        this.engine = engine;
        this.additional = additional;
    }
    Car.prototype.showDetails = function () {
        console.log("\n            Model: " + this.model + "\n            Transmission: " + this.transmission + "\n            Engine: " + this.engine + "\n            Additional options: " + this.additional + "\n        ");
    };
    return Car;
}());
exports.Car = Car;
