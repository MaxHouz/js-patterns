"use strict";
exports.__esModule = true;
var singleton_1 = require("./singleton");
var firstInstance = singleton_1.Singleton.getInstance();
var secondInstance = singleton_1.Singleton.getInstance();
console.log(firstInstance === secondInstance);
