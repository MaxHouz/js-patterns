function WalkingRoute() {}
WalkingRoute.prototype.buildRoute = function() {
    return 'foot';
};

function CarRoute() {}
CarRoute.prototype.buildRoute = function() {
    return 'foot';
};

function BicycleRoute() {}
BicycleRoute.prototype.buildRoute = function() {
    return 'foot';
};

module.exports = {
    CarRoute: CarRoute,
    WalkingRoute: WalkingRoute,
    BicycleRoute: BicycleRoute
};
