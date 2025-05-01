import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

console.log("Hello!");

const contentContainer = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

homeButton.addEventListener("click", () => {
  contentContainer.textContent = "";
  contentContainer.appendChild(loadHome());
  homeButton.setAttribute("style", "color: rgba(3, 218, 198, 1)");
  menuButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
  contactButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
});

menuButton.addEventListener("click", () => {
  contentContainer.textContent = "";
  contentContainer.appendChild(loadMenu());
  homeButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
  menuButton.setAttribute("style", "color: rgba(3, 218, 198, 1)");
  contactButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
});

contactButton.addEventListener("click", () => {
  contentContainer.textContent = "";
  contentContainer.appendChild(loadContact());
  homeButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
  menuButton.setAttribute("style", "color: rgba(255, 255, 255, 0.87)");
  contactButton.setAttribute("style", "color: rgba(3, 218, 198, 1)");
});

contentContainer.appendChild(loadHome());
homeButton.setAttribute("style", "color: rgba(3, 218, 198, 1)");
