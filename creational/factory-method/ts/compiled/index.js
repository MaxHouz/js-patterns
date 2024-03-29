"use strict";
exports.__esModule = true;
var factories_1 = require("./factories");
var models_1 = require("./models");
var newCarsFactory = new factories_1.NewCarsFactory();
var usedCarsFactory = new factories_1.UsedCarsFactory();
var stockUsedCar = usedCarsFactory.getCar({});
var dieselCar = usedCarsFactory.getCar({ engine: models_1.Engine.Diesel });
var electricCar = newCarsFactory.getCar({ engine: models_1.Engine.Electric });
stockUsedCar.showDetails();
dieselCar.showDetails();
electricCar.showDetails();
