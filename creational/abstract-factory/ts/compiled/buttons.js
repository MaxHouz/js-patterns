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
var ui_components_1 = require("./ui-components");
var models_1 = require("./models");
var LightActiveButton = /** @class */ (function (_super) {
    __extends(LightActiveButton, _super);
    function LightActiveButton() {
        return _super.call(this, {
            background: 'blue',
            borderColor: 'black',
            theme: models_1.Themes.Light,
            height: 40
        }) || this;
    }
    return LightActiveButton;
}(ui_components_1.Button));
exports.LightActiveButton = LightActiveButton;
var LightWarningButton = /** @class */ (function (_super) {
    __extends(LightWarningButton, _super);
    function LightWarningButton() {
        return _super.call(this, {
            background: 'red',
            borderColor: 'black',
            theme: models_1.Themes.Light
        }) || this;
    }
    return LightWarningButton;
}(ui_components_1.Button));
exports.LightWarningButton = LightWarningButton;
var DarkActiveButton = /** @class */ (function (_super) {
    __extends(DarkActiveButton, _super);
    function DarkActiveButton() {
        return _super.call(this, {
            background: 'darkBlue',
            borderColor: 'white',
            theme: models_1.Themes.Dark,
            height: 40
        }) || this;
    }
    return DarkActiveButton;
}(ui_components_1.Button));
exports.DarkActiveButton = DarkActiveButton;
var DarkWarningButton = /** @class */ (function (_super) {
    __extends(DarkWarningButton, _super);
    function DarkWarningButton() {
        return _super.call(this, {
            background: 'orange',
            borderColor: 'white',
            theme: models_1.Themes.Dark
        }) || this;
    }
    return DarkWarningButton;
}(ui_components_1.Button));
exports.DarkWarningButton = DarkWarningButton;
