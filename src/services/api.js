import NoCheckedException from "../exception/NoCheckedException";
import NotFound404Exception from "../exception/NotFound404Exception";
import NullException from "../exception/NullException";

const LOCAL_STORAGE_APP = "LOCAL_STORAGE_APP";

export function load() {
  const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP));
  if (!Array.isArray(items)) throw new Error("Error of data load");
  return items;
}

export function save(items) {
  const exc = Math.floor(Math.random() * (5 - 1)) + 1;
  if (exc === 1) throw new NoCheckedException("sdf");
  if (exc === 2) throw new NotFound404Exception();
  if (exc === 3) throw new NullException();
  localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(items));
}
