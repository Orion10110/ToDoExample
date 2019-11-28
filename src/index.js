import "./styles.css";
import App from "./app";
import { APP_SELECTOR } from "./constants";

const root = document.querySelector(APP_SELECTOR);
new App(root);
