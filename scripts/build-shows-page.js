let showData = [
  {
    dates: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    dates: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    dates: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    dates: "Wed Dec 15 2021 ",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];

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

// --------------------FUNCTION--------------------
const appendShowItem = function () {
  showData.forEach(function (show) {
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

    const showDate = createElement(
      "h4",
      show.dates,
      "shows__detail",
      "shows__detail--mod"
    );
    const showVenue = createElement("p", show.venue, "shows__detail");
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
};

appendShowItem();

function createElement(element, text, className, modifier) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.classList.add(className);
  newElement.classList.add(modifier);
  return newElement;
}
