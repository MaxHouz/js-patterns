function Navigator(destination, routeType) {
    this.destination = destination;
    this.routeType = routeType;

    this.buildRoute = function() {
        console.log('Route to' + this.destination + ' by ' + this.routeType.buildRoute() + ' is ready');
    };

    this.changeRouteType = function(newRouteType) {
        this.routeType = newRouteType;
        console.log('Route type changed. Calculating new route...');
        this.buildRoute();
    }
}

module.exports = Navigator;
