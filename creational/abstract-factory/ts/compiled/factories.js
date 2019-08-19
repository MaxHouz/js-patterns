"use strict";
exports.__esModule = true;
var buttons = require("./buttons");
var modals = require("./modals");
var LightThemeFactory = /** @class */ (function () {
    function LightThemeFactory() {
    }
    LightThemeFactory.prototype.createButton = function (isWarning) {
        if (isWarning) {
            return new buttons.LightWarningButton();
        }
        else {
            return new buttons.LightActiveButton();
        }
    };
    LightThemeFactory.prototype.createModalWindow = function (isFullScreen) {
        if (isFullScreen) {
            return new modals.LightFullScreenModal();
        }
        else {
            return new modals.LightDefaultModal();
        }
    };
    return LightThemeFactory;
}());
exports.LightThemeFactory = LightThemeFactory;
var DarkThemeFactory = /** @class */ (function () {
    function DarkThemeFactory() {
    }
    DarkThemeFactory.prototype.createButton = function (isWarning) {
        if (isWarning) {
            return new buttons.DarkWarningButton();
        }
        else {
            return new buttons.DarkActiveButton();
        }
    };
    DarkThemeFactory.prototype.createModalWindow = function (isFullScreen) {
        if (isFullScreen) {
            return new modals.DarkFullScreenModal();
        }
        else {
            return new modals.DarkDefaultModal();
        }
    };
    return DarkThemeFactory;
}());
exports.DarkThemeFactory = DarkThemeFactory;
