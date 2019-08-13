import { Admin, Correspondent, Subscriber } from "./models";
import { Newspaper } from "./Newspaper";

const newspaper = new Newspaper();

const admin = new Admin(newspaper);

const correspondentJohn = new Correspondent(newspaper, 'John');
const correspondentMatt = new Correspondent(newspaper, 'Matt');

const subscriberAlice = new Subscriber('Alice');
const subscriberMike = new Subscriber('Mike');

newspaper.subscribe(subscriberAlice);

admin.publishArticle('First article');
admin.updateMainArticle('First article');

correspondentJohn.publishArticle('John\'s article');

newspaper.subscribe(subscriberMike);

correspondentMatt.publishArticle('Matt\'s article');
newspaper.unsubscribe(subscriberAlice);

admin.removeArticle('First article');
admin.updateMainArticle('Matt\'s article');
