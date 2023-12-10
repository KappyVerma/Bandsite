const shows = [
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
const showTitle = document.createElement("h2");
showTitle.innerText = "Shows";
showTitle.classList.add("shows__title");
showContainer.prepend(showTitle);

const dateHeaderTd = document.createElement("p");
dateHeaderTd.classList.add("shows__header-td");
dateHeaderTd.innerText = "DATE";

const venueHeaderTd = document.createElement("p");
venueHeaderTd.classList.add("shows__header-td");
venueHeaderTd.classList.add("shows__header--left");
venueHeaderTd.innerText = "VENUE";

const locationHeaderTd = document.createElement("p");
locationHeaderTd.classList.add("shows__header-td");
locationHeaderTd.classList.add("shows__header--mod");
locationHeaderTd.innerText = "LOCATION";

const headerBlock = document.createElement("div");
headerBlock.classList.add("shows__header-block");

headerBlock.prepend(locationHeaderTd);
headerBlock.prepend(venueHeaderTd);
headerBlock.prepend(dateHeaderTd);

showContainer.append(headerBlock);

// --------------------FUNCTION--------------------
const appendShowItem = function () {
  shows.forEach(function (show) {
    // --------------------MAIN CONTAINER--------------------
    const showBlock = document.createElement("div");
    showBlock.classList.add("shows__list");
    // --------------------SUB CONTAINER--------------------
    const firstItem = document.createElement("div");
    firstItem.classList.add("shows__item");

    const secondItem = document.createElement("div");
    secondItem.classList.add("shows__item");
    secondItem.classList.add("shows__item--mod");

    const thirdItem = document.createElement("div");
    thirdItem.classList.add("shows__item");

    //--------------------ELEMENT--------------------

    const showDate = document.createElement("h4");
    showDate.innerText = show.dates;
    showDate.classList.add("shows__detail");
    showDate.classList.add("shows__detail--mod");

    const showVenue = document.createElement("p");
    showVenue.classList.add("shows__detail");
    showVenue.innerText = show.venue;

    const showLocation = document.createElement("p");
    showLocation.classList.add("shows__detail");
    showLocation.classList.add("shows__detail--right");

    showLocation.innerText = show.location;

    const btn = document.createElement("button");
    btn.classList.add("shows__button");
    btn.innerText = "Buy Tickets";

    //--------------------MOBILE HEADING--------------------

    const dateHeader = document.createElement("p");
    dateHeader.classList.add("shows__header");
    dateHeader.innerText = "DATE";

    const venueHeader = document.createElement("p");
    venueHeader.classList.add("shows__header");
    venueHeader.innerText = "VENUE";

    const locationHeader = document.createElement("p");
    locationHeader.classList.add("shows__header");
    locationHeader.innerText = "LOCATION";

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
