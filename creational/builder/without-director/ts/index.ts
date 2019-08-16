import { Car } from "./Car";
import { CarBuilder } from "./CarBuilder";
import { Transmission } from "./models";

const car1: Car = new CarBuilder()
    .setMark('Ford')
    .setTransmission(Transmission.Manual)
    .setMaxSpeed(180)
    .build();

const car2: Car = new CarBuilder()
    .setMark('Audi')
    .setMaxSpeed(250)
    .setTransmission(Transmission.Auto)
    .build();

const car3: Car = new CarBuilder()
    .setMark('Ferrari')
    .setMaxSpeed(380)
    .build();

car1.showDetails();
car2.showDetails();
car3.showDetails();
