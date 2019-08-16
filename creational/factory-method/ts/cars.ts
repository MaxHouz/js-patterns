import { Car } from "./Car";
import { Engine, Transmission } from "./models";

export class Lancer extends Car {
    constructor(){
        super(
            'Lancer',
            Transmission.Manual,
            Engine.Petrol
        );
    }
}

export class GolfV extends Car {
    constructor(){
        super(
            'Golf V',
            Transmission.Auto,
            Engine.Diesel
        );
    }
}

export class GolfVI extends Car {
    constructor(){
        super(
            'Golf VI',
            Transmission.Auto,
            Engine.Petrol,
            ['climate control']
        );
    }
}

export class Tesla extends Car {
    constructor(){
        super(
            'Tesla',
            Transmission.Auto,
            Engine.Electric,
            ['climate control', 'application control']
        );
    }
}
