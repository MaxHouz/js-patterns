import { CarBuilder } from "./CarBuilder";
import { Car } from "./Car";

export class CarDirector {
    constructor(
        private carBuilder: CarBuilder
    ) {}

    public setCarBuilder(builder: CarBuilder): void {
        this.carBuilder = builder;
    }

    public getCar(): Car {
        return this.carBuilder.getCar();
    }

    public buildCar(): void {
        this.carBuilder.setMark();
        this.carBuilder.setMaxSpeed();
        this.carBuilder.setTransmission();
    }
}
