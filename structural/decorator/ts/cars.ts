import { Car } from "./Car";

export class Hatchback extends Car {
    constructor() {
        super();
        this.speed = 180;
    }

    formCarInfo(): string {
        return `Hatchback
        Speed limit: ${this.speed}
        `;
    }
}

export class Sedan extends Car {
    formCarInfo(): string {
        return `Sedan
        Speed limit: ${this.speed}
        `;
    }
}

export class SUV extends Car {
    constructor() {
        super();
        this.speed = 160;
    }

    formCarInfo(): string {
        return `SUV
        Speed limit: ${this.speed}
        Heavy-duty Suspension
        `;
    }
}
