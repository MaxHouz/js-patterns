import { Transmission } from "./models";
import { CarBuilder } from "./CarBuilder";

export class Car {
    private readonly mark: string;
    private readonly transmission: Transmission;
    private readonly maxSpeed: number;

    constructor(builder: CarBuilder) {
        this.mark = builder.getMark();
        this.transmission = builder.getTransmission();
        this.maxSpeed = builder.getMaxSpeed();
    }

    public showDetails(): void {
        console.log(`
            Mark: ${this.mark}
            Transmission: ${this.transmission}
            maxSpeed: ${this.maxSpeed}
        `);
    }
}
