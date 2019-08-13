var Newspaper = require('./Newspaper');
var models = require('./models');

var newspaper = new Newspaper();

var admin = new models.Admin(newspaper);

var correspondentJohn = new models.Correspondent(newspaper, 'John');
var correspondentMatt = new models.Correspondent(newspaper, 'Matt');

var subscriberAlice = new models.Subscriber('Alice');
var subscriberMike = new models.Subscriber('Mike');

newspaper.subscribe(subscriberAlice);

admin.publishArticle('First article');
admin.updateMainArticle('First article');

correspondentJohn.publishArticle('John\'s article');

newspaper.subscribe(subscriberMike);

correspondentMatt.publishArticle('Matt\'s article');
newspaper.unsubscribe(subscriberAlice);

admin.removeArticle('First article');
admin.updateMainArticle('Matt\'s article');
