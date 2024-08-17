import {AppComponent} from "./App.component.js";
import {JSLibrary} from "./JSLibrary.js";

const rootElement = document.getElementById('root');

const appInstance = JSLibrary.create(AppComponent);

rootElement.append(appInstance.element);