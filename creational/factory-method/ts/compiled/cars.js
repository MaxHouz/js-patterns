"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car_1 = require("./Car");
var models_1 = require("./models");
var Lancer = /** @class */ (function (_super) {
    __extends(Lancer, _super);
    function Lancer() {
        return _super.call(this, 'Lancer', models_1.Transmission.Manual, models_1.Engine.Petrol) || this;
    }
    return Lancer;
}(Car_1.Car));
exports.Lancer = Lancer;
var GolfV = /** @class */ (function (_super) {
    __extends(GolfV, _super);
    function GolfV() {
        return _super.call(this, 'Golf V', models_1.Transmission.Auto, models_1.Engine.Diesel) || this;
    }
    return GolfV;
}(Car_1.Car));
exports.GolfV = GolfV;
var GolfVI = /** @class */ (function (_super) {
    __extends(GolfVI, _super);
    function GolfVI() {
        return _super.call(this, 'Golf VI', models_1.Transmission.Auto, models_1.Engine.Petrol, ['climate control']) || this;
    }
    return GolfVI;
}(Car_1.Car));
exports.GolfVI = GolfVI;
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        return _super.call(this, 'Tesla', models_1.Transmission.Auto, models_1.Engine.Electric, ['climate control', 'application control']) || this;
    }
    return Tesla;
}(Car_1.Car));
exports.Tesla = Tesla;
