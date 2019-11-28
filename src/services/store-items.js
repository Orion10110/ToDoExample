import * as api from "../api";
const API_URL = "https://info-app.herokuapp.com/todos"
const LOCAL_STORAGE_APP = "LOCAL_STORAGE_APP";

export function loadFromLocal() {
  const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP));
  if (!Array.isArray(items)) throw new Error("Error of data load");
  return items;
}

export function saveToLocal(items) {
  localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(items));
}


export function save(items) {
  api.post(API_URL, items)
}

export async function load() {
  const response = await api.get(API_URL)
  console.log(response)
  return response.json()
}