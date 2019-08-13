import { Newspaper } from "./Newspaper";
import { IObserver } from "./IObserver";

export class Correspondent {
    constructor(
        private newspaper: Newspaper,
        private name: string
    ) {}

    public publishArticle(article: string) {
        console.log(`Correspondent ${this.name} published ${article}`);
        this.newspaper.addArticle(article);
    }

    public removeArticle(article: string) {
        console.log(`Correspondent ${this.name} removed ${article}`);
        this.newspaper.removeArticle(article);
    }

}

export class Subscriber implements IObserver{
    constructor(
        private name: string
    ) {}

    update(data: any): void {
        console.log(`Subscriber ${this.name} got updates`);
        console.log(`Subscriber ${this.name}'s data: ${JSON.stringify(data)}`);
    }

}

export class Admin {
    constructor(
        private newspaper: Newspaper
    ){};

    public removeArticle(article: string) {
        console.log(`Admin removed ${article}`);
        this.newspaper.removeArticle(article);
    }

    public updateMainArticle(article: string) {
        console.log('Main article was updated by admin');
        this.newspaper.updateMainArticle(article);
    }

    public publishArticle(article: string) {
        console.log(`Admin published ${article}`);
        this.newspaper.addArticle(article);
    }
}
