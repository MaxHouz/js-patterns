var Correspondent = function (newspaper, name) {
    this.newspaper = newspaper;
    this.name = name;
};

Correspondent.prototype.publishArticle = function (article) {
    console.log('Correspondent ' + this.name + ' published ' + article);
    this.newspaper.addArticle(article);
};

Correspondent.prototype.removeArticle = function (article) {
    console.log('Correspondent ' + this.name + ' removed ' + article);
    this.newspaper.removeArticle(article);
};

var Subscriber = function (name) {
    this.name = name;
};

Subscriber.prototype.update = function (data) {
    console.log('Subscriber ' + this.name + ' got updates');
    console.log('Subscriber ' + this.name + '\'s data: ' + JSON.stringify(data));
};

var Admin = function (newspaper) {
    this.newspaper = newspaper;
};

Admin.prototype.removeArticle = function (article) {
    console.log('Admin removed ' + article);
    this.newspaper.removeArticle(article);
};

Admin.prototype.updateMainArticle = function (article) {
    console.log('Main article was updated by admin');
    this.newspaper.updateMainArticle(article);
};

Admin.prototype.publishArticle = function (article) {
    console.log('Admin published ' + article);
    this.newspaper.addArticle(article);
};

module.exports = {
    Correspondent: Correspondent,
    Subscriber: Subscriber,
    Admin: Admin
};
