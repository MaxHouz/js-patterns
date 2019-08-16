import { CarBuilder } from "./CarBuilder";
import { Transmission } from "./models";

export class FordBuilder extends CarBuilder {

    setMark(): void {
        this.car.setMark('Ford');
    }

    setMaxSpeed(): void {
        this.car.setMaxSpeed(180);
    }

    setTransmission(): void {
        this.car.setTransmission(Transmission.Manual)
    }
}


export class AudiBuilder extends CarBuilder {

    setMark(): void {
        this.car.setMark('Audi');
    }

    setMaxSpeed(): void {
        this.car.setMaxSpeed(250);
    }

    setTransmission(): void {
        this.car.setTransmission(Transmission.Auto)
    }
}

export class FerrariBuilder extends CarBuilder {

    setMark(): void {
        this.car.setMark('Ferrari');
    }

    setMaxSpeed(): void {
        this.car.setMaxSpeed(380);
    }

    setTransmission(): void {
        this.car.setTransmission(Transmission.Manual)
    }
}
