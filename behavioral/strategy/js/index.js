const Navigator = require('./Navigator');
const routeTypes = require('./route-types');

var carNavigator = new Navigator('Street 1', new routeTypes.CarRoute());
var walkingNavigator = new Navigator('Street 2', new routeTypes.WalkingRoute());
var dynamicNavigator = new Navigator('Street 3', new routeTypes.BicycleRoute());

carNavigator.buildRoute();
setTimeout(function() { walkingNavigator.buildRoute() }, 1000);
setTimeout(function() { dynamicNavigator.buildRoute() }, 2000);
setTimeout(function() { dynamicNavigator.changeRouteType(new routeTypes.CarRoute()) }, 3000);