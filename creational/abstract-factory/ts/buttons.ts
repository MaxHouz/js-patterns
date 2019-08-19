import { Button } from "./ui-components";
import { Themes } from "./models";

export class LightActiveButton extends Button{
    constructor(){
        super({
            background: 'blue',
            borderColor: 'black',
            theme: Themes.Light,
            height: 40
        });
    }
}

export class LightWarningButton extends Button{
    constructor(){
        super({
            background: 'red',
            borderColor: 'black',
            theme: Themes.Light
        });
    }
}

export class DarkActiveButton extends Button{
    constructor(){
        super({
            background: 'darkBlue',
            borderColor: 'white',
            theme: Themes.Dark,
            height: 40
        });
    }
}

export class DarkWarningButton extends Button{
    constructor(){
        super({
            background: 'orange',
            borderColor: 'white',
            theme: Themes.Dark
        });
    }
}
