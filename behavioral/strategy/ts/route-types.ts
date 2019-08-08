import { IRoute } from "./IRoute";

export class WalkingRoute implements IRoute {
    buildRoute(): string {
        return 'foot';
    }
}

export class CarRoute implements IRoute {
    buildRoute(): string {
        return 'car';
    }
}

export class BicycleRoute implements IRoute {
    buildRoute(): string {
        return 'bicycle';
    }
}
