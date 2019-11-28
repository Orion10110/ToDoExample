import { getNodeFromString } from "../services/utils";

export default class BaseToDo {
  constructor(template) {
    this._node = getNodeFromString(template);
  }

  get node() {
    return this._node;
  }
}
