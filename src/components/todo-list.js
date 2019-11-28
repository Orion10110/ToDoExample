import { TEMPLATE } from "../templates/todo-list";
import BaseToDo from "./base-todo";

export default class ToDoList extends BaseToDo {
  constructor() {
    super(TEMPLATE);
    this._items = [];
  }

  push = item => {
    this._items = [...this._items, item];
    item.onRemoveHandler = this.deleteHandler;
    this._node.append(item.node);
  };

  deleteHandler = id => {
    const removedItem = this._items.find(el => el.id === id);
    this._items = this._items.filter(el => el.id !== id);
    removedItem._node.remove();
  };

  get items() {
    return this._items;
  }
}
