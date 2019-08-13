var Newspaper = function () {
    this.observers = [];
    this.data = {
        mainArticle: '',
        articles: []
    };
};

Newspaper.prototype.notify = function () {
    const data = this.data;
    this.observers.forEach(
        function (observer) {
            observer.update(data);
        }
    )
};

Newspaper.prototype.subscribe = function (observer) {
    this.observers.push(observer);
};

Newspaper.prototype.unsubscribe = function (observer) {
    this.observers = this.observers.filter(
        function (o) {
            return o !== observer;
        }
    )
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
    this.data.articles = this.data.articles.filter(
        function (a) {
            return a !== article;
        }
    );
    this.notify();
};

module.exports = Newspaper;
