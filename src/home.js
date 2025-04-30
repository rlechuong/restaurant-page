import homeImageSource from "./img/chicken-shop.jpg";

const loadHome = function() {
    const homeContainer = document.createElement("div");

    const homeImage = document.createElement("img");
    homeImage.setAttribute("src", homeImageSource);
    homeImage.setAttribute("alt", "Stock restaurant image.");
    homeImage.setAttribute("width", "500");

    const homeTitle = document.createElement("h1");
    homeTitle.textContent="Stock Restaurant"

    const homeText = document.createElement("p");
    homeText.textContent = "Some text about how wonderful the restaurant is.";

    homeContainer.appendChild(homeImage);
    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeText);

    return homeContainer;
};

export { loadHome }