import {NewCarsFactory, UsedCarsFactory} from "./factories";
import {Engine} from "./models";

const newCarsFactory = new NewCarsFactory();
const usedCarsFactory  = new UsedCarsFactory();

const stockUsedCar = usedCarsFactory.getCar({});
const dieselCar = usedCarsFactory.getCar({ engine: Engine.Diesel });
const electricCar = newCarsFactory.getCar({ engine: Engine.Electric });

stockUsedCar.showDetails();
dieselCar.showDetails();
electricCar.showDetails();
