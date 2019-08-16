"use strict";
exports.__esModule = true;
var CarBuilder_1 = require("./CarBuilder");
var models_1 = require("./models");
var car1 = new CarBuilder_1.CarBuilder()
    .setMark('Ford')
    .setTransmission(models_1.Transmission.Manual)
    .setMaxSpeed(180)
    .build();
var car2 = new CarBuilder_1.CarBuilder()
    .setMark('Audi')
    .setMaxSpeed(250)
    .setTransmission(models_1.Transmission.Auto)
    .build();
var car3 = new CarBuilder_1.CarBuilder()
    .setMark('Ferrari')
    .setMaxSpeed(380)
    .build();
car1.showDetails();
car2.showDetails();
car3.showDetails();
