"use strict";
exports.__esModule = true;
var Correspondent = /** @class */ (function () {
    function Correspondent(newspaper, name) {
        this.newspaper = newspaper;
        this.name = name;
    }
    Correspondent.prototype.publishArticle = function (article) {
        console.log("Correspondent " + this.name + " published " + article);
        this.newspaper.addArticle(article);
    };
    Correspondent.prototype.removeArticle = function (article) {
        console.log("Correspondent " + this.name + " removed " + article);
        this.newspaper.removeArticle(article);
    };
    return Correspondent;
}());
exports.Correspondent = Correspondent;
var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this.name = name;
    }
    Subscriber.prototype.update = function (data) {
        console.log("Subscriber " + this.name + " got updates");
        console.log("Subscriber " + this.name + "'s data: " + JSON.stringify(data));
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
var Admin = /** @class */ (function () {
    function Admin(newspaper) {
        this.newspaper = newspaper;
    }
    ;
    Admin.prototype.removeArticle = function (article) {
        console.log("Admin removed " + article);
        this.newspaper.removeArticle(article);
    };
    Admin.prototype.updateMainArticle = function (article) {
        console.log('Main article was updated by admin');
        this.newspaper.updateMainArticle(article);
    };
    Admin.prototype.publishArticle = function (article) {
        console.log("Admin published " + article);
        this.newspaper.addArticle(article);
    };
    return Admin;
}());
exports.Admin = Admin;
