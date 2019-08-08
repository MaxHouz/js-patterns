import { IRoute } from "./IRoute";

export class Navigator {

    constructor(
        private destination: string,
        private routeType: IRoute
    ){}

    public buildRoute(): void {
        console.log(`Route to ${this.destination} by ${this.routeType.buildRoute()} is ready`);
    }

    public changeRouteType(newRouteType: IRoute) {
        this.routeType = newRouteType;
        console.log('Route type changed. Calculating new route...');
        this.buildRoute();
    }

}
