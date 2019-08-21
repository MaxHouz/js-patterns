export abstract class Car {
    protected speed = 120;

    public abstract formCarInfo(): string;

    public showCarInfo(): void {
        console.log(this.formCarInfo());
    }

    public getMaxSpeed(): number {
        return this.speed;
    }
}



