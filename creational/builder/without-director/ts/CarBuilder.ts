import { Car } from "./Car";
import { Transmission } from "./models";

export class CarBuilder {
    private mark: string = 'Default';
    private transmission: Transmission = Transmission.Manual;
    private maxSpeed: number = 100;

    public setMark(mark: string): CarBuilder {
        this.mark = mark;
        return this;
    }

    public getMark(): string {
        return this.mark;
    }

    public setTransmission(transmission: Transmission): CarBuilder {
        this.transmission = transmission;
        return this;
    }

    public getTransmission(): Transmission {
        return this.transmission;
    }

    public setMaxSpeed(maxSpeed: number): CarBuilder {
        this.maxSpeed = maxSpeed;
        return this;
    }

    public getMaxSpeed(): number {
        return this.maxSpeed;
    }

    public build(): Car {
        return new Car(this);
    }
}
