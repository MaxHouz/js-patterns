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
var CarBuilder_1 = require("./CarBuilder");
var models_1 = require("./models");
var FordBuilder = /** @class */ (function (_super) {
    __extends(FordBuilder, _super);
    function FordBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FordBuilder.prototype.setMark = function () {
        this.car.setMark('Ford');
    };
    FordBuilder.prototype.setMaxSpeed = function () {
        this.car.setMaxSpeed(180);
    };
    FordBuilder.prototype.setTransmission = function () {
        this.car.setTransmission(models_1.Transmission.Manual);
    };
    return FordBuilder;
}(CarBuilder_1.CarBuilder));
exports.FordBuilder = FordBuilder;
var AudiBuilder = /** @class */ (function (_super) {
    __extends(AudiBuilder, _super);
    function AudiBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudiBuilder.prototype.setMark = function () {
        this.car.setMark('Audi');
    };
    AudiBuilder.prototype.setMaxSpeed = function () {
        this.car.setMaxSpeed(250);
    };
    AudiBuilder.prototype.setTransmission = function () {
        this.car.setTransmission(models_1.Transmission.Auto);
    };
    return AudiBuilder;
}(CarBuilder_1.CarBuilder));
exports.AudiBuilder = AudiBuilder;
var FerrariBuilder = /** @class */ (function (_super) {
    __extends(FerrariBuilder, _super);
    function FerrariBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FerrariBuilder.prototype.setMark = function () {
        this.car.setMark('Ferrari');
    };
    FerrariBuilder.prototype.setMaxSpeed = function () {
        this.car.setMaxSpeed(380);
    };
    FerrariBuilder.prototype.setTransmission = function () {
        this.car.setTransmission(models_1.Transmission.Manual);
    };
    return FerrariBuilder;
}(CarBuilder_1.CarBuilder));
exports.FerrariBuilder = FerrariBuilder;
