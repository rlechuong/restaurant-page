import homeImageSource from "./img/chicken-shop.jpg";

const loadHome = function () {
  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home-container");

  const homeImage = document.createElement("img");
  homeImage.setAttribute("src", homeImageSource);
  homeImage.setAttribute("alt", "Stock restaurant image.");
  homeImage.setAttribute("width", "500");

  const homeTitle = document.createElement("div");
  homeTitle.setAttribute("id", "home-title");
  homeTitle.textContent = "Chicken Shop";

  const homeText = document.createElement("div");
  homeText.setAttribute("id", "home-text");
  homeText.textContent = "Some text about how wonderful the restaurant is.";

  homeContainer.appendChild(homeImage);
  homeContainer.appendChild(homeTitle);
  homeContainer.appendChild(homeText);

  return homeContainer;
};

export { loadHome };
