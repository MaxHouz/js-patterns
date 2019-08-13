import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class Newspaper implements ISubject {

    private observers: IObserver[] = [];
    private data: {
        mainArticle: string,
        articles: string[]
    } = {
        mainArticle: '',
        articles: []
    };

    public notify(): void {
        this.observers.forEach((observer: IObserver) => observer.update(this.data))
    }

    public subscribe(observer: IObserver): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    public updateMainArticle(article: string) {
        this.data.mainArticle = article;
        this.notify();
    }

    public addArticle(article: string) {
        this.data.articles.push(article);
        this.notify();
    }

    public removeArticle(article: string) {
        this.data.articles = this.data.articles.filter(a => a !== article);
        this.notify();
    }
    
}
