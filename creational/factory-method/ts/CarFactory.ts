import { Car } from "./Car";
import { ICarOptions } from "./models";

export abstract class CarFactory {
    //factory method
    public abstract getCar(options: ICarOptions): Car;
}
