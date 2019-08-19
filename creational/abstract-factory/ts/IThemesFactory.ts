import { Button, Modal } from "./ui-components";

export interface IThemesFactory {
    createButton(isWaning?: boolean): Button;
    createModalWindow(isFullScreen?: boolean): Modal;
}
