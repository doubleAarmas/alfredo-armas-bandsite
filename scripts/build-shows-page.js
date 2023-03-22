const shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];
const main = document.querySelector(".show__information");
//beginning of the first section
const mainDiv = document.createElement("div");
mainDiv.classList.add("show__header");
main.appendChild(mainDiv);

const mainHeader = document.createElement("h1");
mainHeader.classList.add("mainHeader");
mainDiv.appendChild(mainHeader);
mainHeader.innerText = "Shows";

const showLoops = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].Date + " " + array[i].Venue + " " + array[i].Location);
    const mainUl = document.createElement("ul");
    mainUl.classList.add("showsList");
    mainDiv.appendChild(mainUl);
    mainUl.innerText = "Work";

    const dateLi = document.createElement("li");
    dateLi.classList.add("dateHeaders");
    mainUl.appendChild(dateLi);
    dateLi.innerText = "Date";

    const firstShow = document.createElement("li");
    firstShow.classList.add("showDate");
    mainUl.appendChild(firstShow);
    firstShow.innerText = "Mon Sept 06 2021";

    const firstVenue = document.createElement("li");
    firstVenue.classList.add("venue");
    mainUl.appendChild(firstVenue);
    firstVenue.innerText = "Venue";

    const actualVenue = document.createElement("li");
    actualVenue.classList.add("venue");
    mainUl.appendChild(actualVenue);
    actualVenue.innerText = "Ronald Lane";

    const firstLocation = document.createElement("li");
    firstLocation.classList.add("location");
    mainUl.appendChild(firstLocation);
    firstLocation.innerText = "Location";

    const firstActualLocation = document.createElement("li");
    firstActualLocation.classList.add("actualLocation");
    mainUl.appendChild(firstActualLocation);
    firstActualLocation.innerText = "San Francisco, CA";

    const firstButtonDiv = document.createElement("div");
    firstButtonDiv.classList.add("showsButtonFormatting");
    mainDiv.appendChild(firstButtonDiv);

    const ticketsButton = document.createElement("button");
    ticketsButton.classList.add("showsButton");
    firstButtonDiv.appendChild(ticketsButton);
    ticketsButton.innerText = "Buy Tickets";
  }
};
console.log(showLoops(shows));

//not needed but testing the console
