import createDOMElement from "../elements/createDOMElement";

import { root } from "../utils/dom";
import { isNil } from "../utils/isNil";

export default function landingView() {
  if (isNil(root)) {
    throw new Error("No root element found");
  }
  const container = createDOMElement("div", {
    className: "flex flex-col items-center justify-center",
    parent: root,
  });

  createDOMElement("h1", {
    text: "Cornhole.App",
    className: "text-2xl mb-2",
    parent: container,
  });

  const nameInput = createDOMElement("input", {
    className: "input input-bordered input-primary w-full max-w-xs mb-4",
    type: "text",
    placeholder: "Type Username...",
    parent: container,
  });
  nameInput.addEventListener("input", handleNameChange);

  function handleNameChange(event: Event) {
    const isValidName = (name: string) => name.length >= 3;

    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.value;

    if (isValidName(name)) {
      console.log("valid");
    }
  }

  const buttonContainer = createDOMElement("div", {
    className: "flex gap-x-2",
    id: "create-join-game-controls-container",
    parent: container,
  });

  createDOMElement("button", {
    className: "btn btn-success",
    text: "Create Game",
    type: "submit",
    parent: buttonContainer,
  });

  createDOMElement("button", {
    className: "btn",
    text: "Join Game",
    type: "submit",
    parent: buttonContainer,
  });
}
