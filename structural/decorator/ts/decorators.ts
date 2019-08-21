import { Car } from "./Car";

export class ClimateControlCarDecorator extends Car{
    constructor(private car: Car) {
        super();
    }

    formCarInfo(): string {
        return `${this.car.formCarInfo()}
        Climate control
        `;
    }
}

export class TurboEngineCarDecorator extends Car {
    constructor(private car: Car) {
        super();
        this.speed += 80;
    }

    formCarInfo(): string {
        return `${this.car.formCarInfo().replace(
            `Speed limit: ${this.car.getMaxSpeed()}`,
            `Speed limit: ${this.speed}`
            )}
        Turbo Engine
        `;
    }
}

export class AutomaticTransmissionCarDecorator extends Car {
    constructor(private car: Car) {
        super();
    }

    formCarInfo(): string {
        return `${this.car.formCarInfo()}
        Automatic Transmission
        `;
    }
}
