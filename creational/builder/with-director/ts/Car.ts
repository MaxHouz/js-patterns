import { Transmission } from "./models";

export class Car {
    private mark: string;
    private transmission: Transmission;
    private maxSpeed: number;

    public setMark(mark: string): void {
        this.mark = mark;
    }

    public getMark(): string {
        return this.mark;
    }

    public setTransmission(transmission: Transmission): void {
        this.transmission = transmission;
    }

    public getTransmission(): Transmission {
        return this.transmission;
    }

    public setMaxSpeed(maxSpeed: number): void {
        this.maxSpeed = maxSpeed;
    }

    public getMaxSpeed(): number {
        return this.maxSpeed;
    }

    public showDetails(): void {
        console.log(`
            Mark: ${this.mark}
            Transmission: ${this.transmission}
            maxSpeed: ${this.maxSpeed}
        `);
    }
}
