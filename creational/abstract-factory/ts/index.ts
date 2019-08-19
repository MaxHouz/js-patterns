import { DarkThemeFactory, LightThemeFactory } from "./factories";

const lightThemeFactory = new LightThemeFactory();
const darkThemeFactory = new DarkThemeFactory();

const lightWarningButton = lightThemeFactory.createButton(true);
const darkWarningButton = darkThemeFactory.createButton(true);
const lightActiveButton = lightThemeFactory.createButton();
const darkActiveButton = darkThemeFactory.createButton();

const lightFullScreenModal = lightThemeFactory.createModalWindow(true);
const darkFullScreenModal = darkThemeFactory.createModalWindow(true);
const lightDefaultModal = lightThemeFactory.createModalWindow();
const darkDefaultModal = darkThemeFactory.createModalWindow();

lightWarningButton.showButtonDetails();
darkWarningButton.showButtonDetails();
lightActiveButton.showButtonDetails();
darkActiveButton.showButtonDetails();

lightFullScreenModal.showModalDetails();
darkFullScreenModal.showModalDetails();
lightDefaultModal.showModalDetails();
darkDefaultModal.showModalDetails();

