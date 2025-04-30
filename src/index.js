import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import "./styles.css";

console.log("Hello!");

const contentContainer = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
  contentContainer.textContent = "";
  contentContainer.appendChild(loadHome());
});

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  contentContainer.textContent = "";
  contentContainer.appendChild(loadMenu());
});

contentContainer.appendChild(loadHome());