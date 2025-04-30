import friedChickenImage from "./img/fried-chicken.png";
import lemonadeImage from "./img/lemonade.png";
import cornbreadImage from "./img/cornbread.png";

const loadMenu = function () {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

  const friedChickenItem = createMenuItemContainer(
    friedChickenImage,
    "Fried Chicken",
    "The description of this dish.",
    "$3.50"
  );

  const cornbreadItem = createMenuItemContainer(
    cornbreadImage,
    "Cornbread",
    "The description of this dish.",
    "$3.50"
  );

  const lemonadeItem = createMenuItemContainer(
    lemonadeImage,
    "Lemonade",
    "The description of this dish.",
    "$3.50"
  );

  menuContainer.appendChild(friedChickenItem);
  menuContainer.appendChild(cornbreadItem);
  menuContainer.appendChild(lemonadeItem);

  return menuContainer;
};

const createMenuItemContainer = function (
  icon,
  itemTitle,
  itemText,
  itemPrice
) {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.setAttribute("class", "menu-item-container");

  const menuIcon = document.createElement("img");
  menuIcon.setAttribute("src", icon);
  menuIcon.setAttribute("style", "width: 15rem");
  menuItemContainer.appendChild(menuIcon);

  const menuItemTitle = document.createElement("div");
  menuItemTitle.setAttribute("class", "menu-item-title");
  menuItemTitle.textContent = itemTitle;
  menuItemContainer.appendChild(menuItemTitle);

  const menuItemText = document.createElement("div");
  menuItemText.setAttribute("class", "menu-item-text");
  menuItemText.textContent = itemText;
  menuItemContainer.appendChild(menuItemText);

  const menuItemPrice = document.createElement("div");
  menuItemPrice.setAttribute("class", "menu-item-price");
  menuItemPrice.textContent = itemPrice;
  menuItemContainer.appendChild(menuItemPrice);

  return menuItemContainer;
};

export { loadMenu };
