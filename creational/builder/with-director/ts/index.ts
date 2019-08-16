import { CarDirector } from "./CarDirector";
import * as builders from "./builders";

const fordBuilder = new builders.FordBuilder();
const audiBuilder = new builders.AudiBuilder();
const ferrariBuilder = new builders.FerrariBuilder();

const director = new CarDirector(fordBuilder);

director.buildCar();
const car1 = director.getCar();

director.setCarBuilder(audiBuilder);
director.buildCar();
const car2 = director.getCar();

director.setCarBuilder(ferrariBuilder);
director.buildCar();
const car3 = director.getCar();

car1.showDetails();
car2.showDetails();
car3.showDetails();
