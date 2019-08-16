import { Car } from "./Car";
import { CarFactory } from "./CarFactory";
import { Engine, ICarOptions } from "./models";
import { GolfV, GolfVI, Lancer, Tesla } from "./cars";

export class UsedCarsFactory extends CarFactory {

    public getCar(options: ICarOptions): Car {
        if (options.engine === Engine.Diesel) {
            return new GolfV();
        } else if (!!options.additional) {
            return new GolfVI();
        } else {
            return new Lancer();
        }
    }

}

export class NewCarsFactory extends CarFactory{

    public getCar(options: ICarOptions): Car {
        if (options.engine === Engine.Electric) {
            return new Tesla();
        } else {
            return new GolfVI();
        }
    }

}
