import * as cars from "./cars";
import * as decorators from "./decorators";

const defaultHatchback = new cars.Hatchback();
const defaultSUV = new cars.SUV();
const defaulSedan = new cars.Sedan();

const turboSedan = new decorators.TurboEngineCarDecorator(new cars.Sedan());
const automaticHatchback = new decorators.AutomaticTransmissionCarDecorator(defaultHatchback);
const climateControlAutomaticSUV = new decorators.ClimateControlCarDecorator(
    new decorators.AutomaticTransmissionCarDecorator(new cars.SUV())
);

defaultHatchback.showCarInfo();
automaticHatchback.showCarInfo();

defaulSedan.showCarInfo();
turboSedan.showCarInfo();

defaultSUV.showCarInfo();
climateControlAutomaticSUV.showCarInfo();
