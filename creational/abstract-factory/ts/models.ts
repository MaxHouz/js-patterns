export enum Themes {
    Dark = 'Dark',
    Light = 'Light'
}

export interface IButtonOptions {
    background: string;
    borderColor: string;
    theme: Themes;
    width?: number;
    height?: number;
}

export interface IModalOptions {
    background: string;
    font: string;
    theme: Themes;
    width?: number | string;
    height?: number | string;
    opacity?: number;
}
