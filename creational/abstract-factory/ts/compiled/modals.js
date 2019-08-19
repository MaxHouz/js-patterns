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
var LightFullScreenModal = /** @class */ (function (_super) {
    __extends(LightFullScreenModal, _super);
    function LightFullScreenModal() {
        return _super.call(this, {
            background: 'transparent',
            font: 'Italic',
            theme: models_1.Themes.Light,
            width: '100%',
            height: '100%'
        }) || this;
    }
    return LightFullScreenModal;
}(ui_components_1.Modal));
exports.LightFullScreenModal = LightFullScreenModal;
var LightDefaultModal = /** @class */ (function (_super) {
    __extends(LightDefaultModal, _super);
    function LightDefaultModal() {
        return _super.call(this, {
            background: 'white',
            font: 'Sans-serif',
            theme: models_1.Themes.Light
        }) || this;
    }
    return LightDefaultModal;
}(ui_components_1.Modal));
exports.LightDefaultModal = LightDefaultModal;
var DarkFullScreenModal = /** @class */ (function (_super) {
    __extends(DarkFullScreenModal, _super);
    function DarkFullScreenModal() {
        return _super.call(this, {
            background: 'darkBlue',
            opacity: 0.4,
            font: 'Italic',
            theme: models_1.Themes.Dark,
            width: '100%',
            height: '100%'
        }) || this;
    }
    return DarkFullScreenModal;
}(ui_components_1.Modal));
exports.DarkFullScreenModal = DarkFullScreenModal;
var DarkDefaultModal = /** @class */ (function (_super) {
    __extends(DarkDefaultModal, _super);
    function DarkDefaultModal() {
        return _super.call(this, {
            background: 'darkBlue',
            font: 'Sans-serif',
            theme: models_1.Themes.Dark
        }) || this;
    }
    return DarkDefaultModal;
}(ui_components_1.Modal));
exports.DarkDefaultModal = DarkDefaultModal;
