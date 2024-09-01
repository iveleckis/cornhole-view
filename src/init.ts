import { root } from "./utils/dom";

export default function init() {
  const container = document.createElement("div");
  container.className = "flex flex-col items-center justify-center";

  const title = document.createElement("h1");
  title.innerHTML = "Cornhole.App";
  title.className = "text-2xl mb-2";
  container.appendChild(title);

  const avatar = document.createElement("div");
  avatar.className = "avatar mb-2";

  const avatarImageContainer = document.createElement("div");
  avatarImageContainer.className = "w-24 rounded-full mb-2";

  const avatarImage = document.createElement("img");
  avatarImage.className = "rounded-full";
  avatarImage.setAttribute(
    "src",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  );

  avatarImageContainer.appendChild(avatarImage);
  avatar.appendChild(avatarImageContainer);
  container.appendChild(avatarImageContainer);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Type username...");
  nameInput.className =
    "input input-bordered input-primary w-full max-w-xs mb-4";

  container.appendChild(nameInput);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex gap-x-2";

  const createGame = document.createElement("button");
  createGame.className = "btn btn-success";
  createGame.type = "submit";
  createGame.innerHTML = "Create Game";

  const joinGame = document.createElement("button");
  joinGame.className = "btn";
  joinGame.type = "submit";
  joinGame.innerHTML = "Join Game";

  buttonContainer.appendChild(createGame);
  buttonContainer.appendChild(joinGame);

  container.appendChild(buttonContainer);

  root?.appendChild(container);
}
