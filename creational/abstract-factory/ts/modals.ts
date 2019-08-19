import { Modal } from "./ui-components";
import { Themes } from "./models";

export class LightFullScreenModal extends Modal {
    constructor() {
        super({
            background: 'transparent',
            font: 'Italic',
            theme: Themes.Light,
            width: '100%',
            height: '100%'
        });
    }
}

export class LightDefaultModal extends Modal {
    constructor() {
        super({
            background: 'white',
            font: 'Sans-serif',
            theme: Themes.Light,
        });
    }
}

export class DarkFullScreenModal extends Modal {
    constructor() {
        super({
            background: 'darkBlue',
            opacity: 0.4,
            font: 'Italic',
            theme: Themes.Dark,
            width: '100%',
            height: '100%'
        });
    }
}

export class DarkDefaultModal extends Modal {
    constructor() {
        super({
            background: 'darkBlue',
            font: 'Sans-serif',
            theme: Themes.Dark,
        });
    }
}
