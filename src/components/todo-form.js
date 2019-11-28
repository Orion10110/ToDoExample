import { TEMPLATE, INPUT_SELECTOR } from "../templates/todo-form";
import { BTN_SELECTOR } from "../templates/btn";
import BaseToDo from "./base-todo";

export default class ToDoForm extends BaseToDo {
  constructor(handler = null) {
    super(TEMPLATE);
    this._handler = handler;
    this._btn = this._node.querySelector(`.${BTN_SELECTOR}`);
    this._input = this._node.querySelector(`.${INPUT_SELECTOR}`);

    this._btn.addEventListener("click", this.onClick);
  }

  onClick = () => {
    const val = this._input.value;
    if (val !== "") {
      this._handler(val);
      this._input.value = "";
    }
  };

  set handler(handler) {
    this._handler = handler;
  }
}
