import { TODO_ITEM_COMPLETE } from "../constants";
import BaseToDo from "./base-todo";

export default class ToDoItem extends BaseToDo {
  static _idCount = 0;

  constructor({ value, checked = false }) {
    super(ToDoItem._getTemplate({ value, checked }));
    this._btn = this._node.querySelector(".todo-item__remove");
    this._id = ToDoItem._getItemId();
    this._checked = checked;
    this._handler = null;
    this._value = value;

    this._node.addEventListener("click", this.toggle);
    this._btn.addEventListener("click", this._onRemove);
  }

  _onRemove = () => this._handler(this._id);

  toggle = () => {
    this._checked = !this._checked;
    this._node.classList.toggle(TODO_ITEM_COMPLETE);
  };

  static _getTemplate({ value: content, checked }) {
    const selected = checked ? TODO_ITEM_COMPLETE : "";
    return `<div class="todo-item ${selected}">
    <div class="todo-item__content">${content}</div>
    <div class="todo-item__remove">Remove</div>
  </div>`;
  }

  static _getItemId() {
    return ToDoItem._idCount++;
  }

  set onRemoveHandler(handler) {
    this._handler = handler;
  }

  get isChecked() {
    return this._checked;
  }

  get value() {
    return this._value;
  }

  get id() {
    return this._id;
  }
}

//removeBtn.onclick //переменная
