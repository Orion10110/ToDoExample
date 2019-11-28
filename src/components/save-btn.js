import BaseToDo from "./base-todo";
import { BTN_TEMPLATE } from "../templates/btn";

export default class SaveBtn extends BaseToDo {
  constructor(handler) {
    super(BTN_TEMPLATE({ value: "Save" }));
    this._node.addEventListener("click", handler);
  }
}
