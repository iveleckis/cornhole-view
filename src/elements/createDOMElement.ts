import { isNil } from "../utils/isNil";

export default function createDOMElement(
  tag: string,
  options?: ElementProperties,
) {
  const element = document.createElement(tag);

  if (isNil(options)) {
    return element;
  }

  element.className = options.className ?? "";
  element.innerHTML = options.text ?? "";
  element.id = options.id ?? "";
  if ("type" in element && options.type) {
    element.type = options.type;
  }
  if ("placeholder" in element && options.placeholder) {
    element.placeholder = options.placeholder;
  }
  if ("src" in element && options.src) {
    element.src = options.src;
  }
  if (options.parent) {
    options.parent.appendChild(element);
  }

  return element;
}

type ElementProperties = Partial<{
  className: string;
  text: string;
  type: string;
  src: string;
  id: string;
  parent: HTMLElement | Element;
  placeholder: string;
}>;
