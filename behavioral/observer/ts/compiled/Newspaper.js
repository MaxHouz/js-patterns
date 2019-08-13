"use strict";
exports.__esModule = true;
var Newspaper = /** @class */ (function () {
    function Newspaper() {
        this.observers = [];
        this.data = {
            mainArticle: '',
            articles: []
        };
    }
    Newspaper.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this.data); });
    };
    Newspaper.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Newspaper.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    Newspaper.prototype.updateMainArticle = function (article) {
        this.data.mainArticle = article;
        this.notify();
    };
    Newspaper.prototype.addArticle = function (article) {
        this.data.articles.push(article);
        this.notify();
    };
    Newspaper.prototype.removeArticle = function (article) {
        this.data.articles = this.data.articles.filter(function (a) { return a !== article; });
        this.notify();
    };
    return Newspaper;
}());
exports.Newspaper = Newspaper;
