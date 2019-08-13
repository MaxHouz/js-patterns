import { IRoute } from "./IRoute";

export class WalkingRoute implements IRoute {
    public buildRoute(): string {
        return 'foot';
    }
}

export class CarRoute implements IRoute {
    public buildRoute(): string {
        return 'car';
    }
}

export class BicycleRoute implements IRoute {
    public buildRoute(): string {
        return 'bicycle';
    }
}
