export enum Transmission {
    Manual = "Manual",
    Auto = "Auto"
}

export enum Engine {
    Diesel = 'Diesel',
    Petrol = 'Petrol',
    Electric = 'Electric'
}

export interface ICarOptions {
    model?: string;
    transmission?: Transmission;
    engine?: Engine,
    additional?: string[];
}

