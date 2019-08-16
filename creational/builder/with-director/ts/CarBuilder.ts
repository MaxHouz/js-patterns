import { Car } from "./Car";

export abstract class CarBuilder {
    protected car: Car;

    constructor() {
        this.reset();
    }

    public abstract setMark(): void;
    public abstract setTransmission(): void;
    public abstract setMaxSpeed(): void;

    public reset(): void {
        this.car = new Car();
    }

    public getCar(): Car {
        return this.car;
    }
}
