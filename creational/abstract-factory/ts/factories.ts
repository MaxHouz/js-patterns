import { IThemesFactory } from "./IThemesFactory";
import { Button, Modal } from "./ui-components";
import * as buttons from "./buttons";
import * as modals from "./modals";

export class LightThemeFactory implements IThemesFactory {
    createButton(isWarning?: boolean): Button {
        if (isWarning) {
            return new buttons.LightWarningButton();
        } else {
            return new buttons.LightActiveButton();
        }
    }

    createModalWindow(isFullScreen?: boolean): Modal {
        if (isFullScreen) {
            return new modals.LightFullScreenModal();
        } else {
            return new modals.LightDefaultModal();
        }
    }
}

export class DarkThemeFactory implements IThemesFactory {
    createButton(isWarning?: boolean): Button {
        if (isWarning) {
            return new buttons.DarkWarningButton();
        } else {
            return new buttons.DarkActiveButton();
        }
    }

    createModalWindow(isFullScreen?: boolean): Modal {
        if (isFullScreen) {
            return new modals.DarkFullScreenModal();
        } else {
            return new modals.DarkDefaultModal();
        }
    }
}
