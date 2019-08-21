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
var ClimateControlCarDecorator = /** @class */ (function (_super) {
    __extends(ClimateControlCarDecorator, _super);
    function ClimateControlCarDecorator(car) {
        var _this = _super.call(this) || this;
        _this.car = car;
        return _this;
    }
    ClimateControlCarDecorator.prototype.formCarInfo = function () {
        return this.car.formCarInfo() + "\n        Climate control\n        ";
    };
    return ClimateControlCarDecorator;
}(Car_1.Car));
exports.ClimateControlCarDecorator = ClimateControlCarDecorator;
var TurboEngineCarDecorator = /** @class */ (function (_super) {
    __extends(TurboEngineCarDecorator, _super);
    function TurboEngineCarDecorator(car) {
        var _this = _super.call(this) || this;
        _this.car = car;
        _this.speed += 80;
        return _this;
    }
    TurboEngineCarDecorator.prototype.formCarInfo = function () {
        return this.car.formCarInfo().replace("Speed limit: " + this.car.getMaxSpeed(), "Speed limit: " + this.speed) + "\n        Turbo Engine\n        ";
    };
    return TurboEngineCarDecorator;
}(Car_1.Car));
exports.TurboEngineCarDecorator = TurboEngineCarDecorator;
var AutomaticTransmissionCarDecorator = /** @class */ (function (_super) {
    __extends(AutomaticTransmissionCarDecorator, _super);
    function AutomaticTransmissionCarDecorator(car) {
        var _this = _super.call(this) || this;
        _this.car = car;
        return _this;
    }
    AutomaticTransmissionCarDecorator.prototype.formCarInfo = function () {
        return this.car.formCarInfo() + "\n        Automatic Transmission\n        ";
    };
    return AutomaticTransmissionCarDecorator;
}(Car_1.Car));
exports.AutomaticTransmissionCarDecorator = AutomaticTransmissionCarDecorator;
