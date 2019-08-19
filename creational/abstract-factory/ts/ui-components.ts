import { IButtonOptions, IModalOptions, Themes } from "./models";

export abstract class Button {
    private readonly width: number;
    private readonly height: number;
    private readonly background: string;
    private readonly borderColor: string;
    private readonly theme: Themes;

    protected constructor(options: IButtonOptions){
        this.background = options.background;
        this.borderColor = options.borderColor;
        this.theme = options.theme;
        this.height = options.height || 10;
        this.width = options.width || 30;
    }

    public showButtonDetails(): void {
        console.log(
            `${this.theme} Button
            Width: ${this.width}
            Height: ${this.height}
            Background: ${this.background}
            Border Color: ${this.borderColor}`
        )
    }
}

export abstract class Modal {
    private readonly width: number | string;
    private readonly height: number | string;
    private readonly background: string;
    private readonly font: string;
    private readonly theme: Themes;
    private readonly opacity: number;

    protected constructor(options: IModalOptions){
        this.background = options.background;
        this.font = options.font;
        this.theme = options.theme;
        this.height = options.height || 10;
        this.width = options.width || 30;
        this.opacity = options.opacity || 1;
    }

    public showModalDetails(): void {
        console.log(
            `${this.theme} Modal
            Width: ${this.width}
            Height: ${this.height}
            Background: ${this.background}
            Font: ${this.font}
            Opacity: ${this.opacity}`
        )
    }
}
