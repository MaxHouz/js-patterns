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
var Hatchback = /** @class */ (function (_super) {
    __extends(Hatchback, _super);
    function Hatchback() {
        var _this = _super.call(this) || this;
        _this.speed = 180;
        return _this;
    }
    Hatchback.prototype.formCarInfo = function () {
        return "Hatchback\n        Speed limit: " + this.speed + "\n        ";
    };
    return Hatchback;
}(Car_1.Car));
exports.Hatchback = Hatchback;
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sedan.prototype.formCarInfo = function () {
        return "Sedan\n        Speed limit: " + this.speed + "\n        ";
    };
    return Sedan;
}(Car_1.Car));
exports.Sedan = Sedan;
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV() {
        var _this = _super.call(this) || this;
        _this.speed = 160;
        return _this;
    }
    SUV.prototype.formCarInfo = function () {
        return "SUV\n        Speed limit: " + this.speed + "\n        Heavy-duty Suspension\n        ";
    };
    return SUV;
}(Car_1.Car));
exports.SUV = SUV;
