"use strict";
exports.__esModule = true;
var Button = /** @class */ (function () {
    function Button(options) {
        this.background = options.background;
        this.borderColor = options.borderColor;
        this.theme = options.theme;
        this.height = options.height || 10;
        this.width = options.width || 30;
    }
    Button.prototype.showButtonDetails = function () {
        console.log(this.theme + " Button\n            Width: " + this.width + "\n            Height: " + this.height + "\n            Background: " + this.background + "\n            Border Color: " + this.borderColor);
    };
    return Button;
}());
exports.Button = Button;
var Modal = /** @class */ (function () {
    function Modal(options) {
        this.background = options.background;
        this.font = options.font;
        this.theme = options.theme;
        this.height = options.height || 10;
        this.width = options.width || 30;
        this.opacity = options.opacity || 1;
    }
    Modal.prototype.showModalDetails = function () {
        console.log(this.theme + " Modal\n            Width: " + this.width + "\n            Height: " + this.height + "\n            Background: " + this.background + "\n            Font: " + this.font + "\n            Opacity: " + this.opacity);
    };
    return Modal;
}());
exports.Modal = Modal;
