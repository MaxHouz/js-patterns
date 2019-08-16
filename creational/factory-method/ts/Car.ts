import { Engine, Transmission } from "./models";

export abstract class Car {
    protected constructor(
        private model: string,
        private transmission: Transmission,
        private engine: Engine,
        private additional: string[] = []
    ){}

    public showDetails(): void {
        console.log(`
            Model: ${this.model}
            Transmission: ${this.transmission}
            Engine: ${this.engine}
            Additional options: ${this.additional}
        `);
    }
}
