import ToDoForm from "./components/todo-form";
import ToDoList from "./components/todo-list";
import ToDoItem from "./components/todo-item";
import SaveBtn from "./components/save-btn";
import NoCheckedException from "./exception/NoCheckedException";
import NotFound404Exception from "./exception/NotFound404Exception";
import NullException from "./exception/NullException";

import * as api from "./services/store-items";

export default class App {
  constructor(root) {
    this._root = root;
    this._toDoFormNode = new ToDoForm();
    this._toDoList = new ToDoList();
    this._saveBtn = new SaveBtn(this._save);

    this._toDoFormNode.handler = value =>
      this._toDoList.push(new ToDoItem({ value }));

    this._load();
    this._render();
  }

  _render() {
    this._toDoFormNode.node.append(this._saveBtn.node);
    this._root.append(this._toDoFormNode.node);
    this._root.append(this._toDoList.node);
  }

  async _load() {
    const items = await api.load()

    items.forEach(item =>
      this._toDoList.push(
        new ToDoItem({ value: item.value, checked: item.checked })
      )
    );
  }

  _save = () => {
    const data = this._toDoList.items.map(item => ({
      value: item.value,
      checked: item.isChecked
    }));
    try {
      console.log(1);
      api.save(data);
      console.log(2);
    } catch (err) {
      throw new Error();
    } finally {
      console.log(4);
    }
  };
}
