import { Navigator } from './Navigator';
import * as routeTypes from './route-types';

const carNavigator = new Navigator('Street 1', new routeTypes.CarRoute());
const walkingNavigator = new Navigator('Street 2', new routeTypes.WalkingRoute());
const dynamicNavigator = new Navigator('Street 3', new routeTypes.BicycleRoute());

carNavigator.buildRoute();
setTimeout(() => walkingNavigator.buildRoute(), 1000);
setTimeout(() => dynamicNavigator.buildRoute(), 2000);
setTimeout(() => dynamicNavigator.changeRouteType(new routeTypes.CarRoute()), 3000);
