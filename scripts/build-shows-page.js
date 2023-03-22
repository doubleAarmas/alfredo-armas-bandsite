const main = document.querySelector(".show__information");
//beginning of the first section
const mainDiv = document.createElement("div");
mainDiv.classList.add("show__header");
main.appendChild(mainDiv);
console.log(mainDiv.innerText); //not needed but testing the console

const mainHeader = document.createElement("h1");
mainHeader.classList.add("mainHeader");
mainDiv.appendChild(mainHeader);
mainHeader.innerText = "Shows";
// const smallHeader = document.createElement("h6");
// smallHeader.classList.add("headers");
// smallHeader.innerText = "Date";
// mainDiv.appendChild(smallHeader);

const mainUl = document.createElement("ul");
mainUl.classList.add("showsList");
mainDiv.appendChild(mainUl);
//doesnt actually need text mainUl.innerText = "Work";

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
firstVenue.innerText = "Ronald Lane";

const firstLocation = document.createElement("li");
firstLocation.classList.add("location");
mainUl.appendChild(firstLocation);
firstLocation.innerText = "Location";

const firstActualLocation = document.createElement("li");
firstActualLocation.classList.add("actualLocation");
mainUl.appendChild(firstActualLocation);
firstActualLocation.innerText = "San Francisco, CA";

const ticketsButton = document.createElement("button");
ticketsButton.classList.add("showsButton");
mainUl.appendChild(ticketsButton);
ticketsButton.innerText = "Buy Tickets";

//second list
const secondUl = document.createElement("ul");
secondUl.classList.add("showsList");
mainDiv.appendChild(secondUl);
secondUl.innerText = "Work";

//looping list
