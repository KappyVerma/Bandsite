import BandSiteApi from "./band-site-api.js";

// --------------------FUNCTION--------------------
function createElement(element, text, className, modifier) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.classList.add(className);
  newElement.classList.add(modifier);
  return newElement;
}

// --------------------SHOW-TITLE--------------------
const showContainer = document.querySelector(".shows");
const showTitle = createElement("h2", "Shows", "shows__title");
const dateHeaderTd = createElement("p", "DATE", "shows__heading");
const venueHeaderTd = createElement(
  "p",
  "VENUE",
  "shows__heading",
  "shows__heading--left"
);
const locationHeaderTd = createElement(
  "p",
  "LOCATION",
  "shows__heading",
  "shows__heading--right"
);
const headerBlock = createElement("div", "", "shows__block");

headerBlock.prepend(locationHeaderTd);
headerBlock.prepend(venueHeaderTd);
headerBlock.prepend(dateHeaderTd);
showContainer.prepend(showTitle);
showContainer.append(headerBlock);

// --------------------FUNCTION TO GET DATA--------------------
const bandSiteApi = new BandSiteApi("d23b5fb9-2c95-4a20-8aee-f288b9976d56");

async function getShowTime() {
  const response = await bandSiteApi.getShowDates();
  showTime(response);
}
getShowTime();

// --------------------APPENDING DATA TO DOM--------------------

function showTime(response) {
  response.sort((a, b) => {
    return b.date - a.date;
  });
  response.forEach(function (show) {
    // --------------------MAIN CONTAINER--------------------
    const showBlock = document.createElement("div");
    showBlock.classList.add("shows__list");

    // --------------------SUB CONTAINER--------------------

    const firstItem = createElement("div", "", "shows__item");
    const secondItem = createElement(
      "div",
      "",
      "shows__item",
      "shows__item--mod"
    );
    const thirdItem = createElement("div", "", "shows__item");

    //--------------------ELEMENT--------------------
    const timestamp = show.date;
    const date = new Date(timestamp);
    const newDate = date.toLocaleDateString();
    const showDate = createElement(
      "h4",
      newDate,
      "shows__detail",
      "shows__detail--mod"
    );
    const showVenue = createElement("p", show.place, "shows__detail");
    const showLocation = createElement(
      "p",
      show.location,
      "shows__detail",
      "shows__detail--right"
    );
    const btn = createElement("button", "buy tickets", "shows__button");

    //--------------------MOBILE HEADING--------------------

    const dateHeader = createElement("p", "DATE", "shows__header");
    const venueHeader = createElement("p", "VENUE", "shows__header");
    const locationHeader = createElement("p", "LOCATION", "shows__header");

    //--------------------APPEND-ELEMENT--------------------

    firstItem.append(dateHeader);
    firstItem.append(showDate);
    secondItem.append(venueHeader);
    secondItem.append(showVenue);
    thirdItem.append(locationHeader);
    thirdItem.append(showLocation);

    showBlock.append(firstItem);
    showBlock.append(secondItem);
    showBlock.append(thirdItem);
    showBlock.append(btn);

    showContainer.append(showBlock);
  });
}
