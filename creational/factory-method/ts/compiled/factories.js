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
var CarFactory_1 = require("./CarFactory");
var models_1 = require("./models");
var cars_1 = require("./cars");
var UsedCarsFactory = /** @class */ (function (_super) {
    __extends(UsedCarsFactory, _super);
    function UsedCarsFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsedCarsFactory.prototype.getCar = function (options) {
        if (options.engine === models_1.Engine.Diesel) {
            return new cars_1.GolfV();
        }
        else if (!!options.additional) {
            return new cars_1.GolfVI();
        }
        else {
            return new cars_1.Lancer();
        }
    };
    return UsedCarsFactory;
}(CarFactory_1.CarFactory));
exports.UsedCarsFactory = UsedCarsFactory;
var NewCarsFactory = /** @class */ (function (_super) {
    __extends(NewCarsFactory, _super);
    function NewCarsFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCarsFactory.prototype.getCar = function (options) {
        if (options.engine === models_1.Engine.Electric) {
            return new cars_1.Tesla();
        }
        else {
            return new cars_1.GolfVI();
        }
    };
    return NewCarsFactory;
}(CarFactory_1.CarFactory));
exports.NewCarsFactory = NewCarsFactory;
