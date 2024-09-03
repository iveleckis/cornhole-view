import { isNotNil } from "./isNil";

export const root: HTMLDivElement | null = document.querySelector("#root");

export function clearRoot() {
  if (isNotNil(root)) {
    root.innerHTML = "";
  }
}
