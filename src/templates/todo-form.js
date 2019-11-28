import { BTN_TEMPLATE } from "./btn";
export const INPUT_SELECTOR = "todo-form__task-input";

const inputTemplate = `<input
type="text"
placeholder="New item..."
class="${INPUT_SELECTOR}"
/>`;

export const TEMPLATE = `<div class="todo__form todo-form">
  ${inputTemplate}
  ${BTN_TEMPLATE({ value: "Add" })}
</div>`;
