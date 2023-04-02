let shows = [];
function getData() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/showdates?api_key=88092a44-09c3-434e-b610-10a7355a53ae"
    )
    .then((response) => {
      shows = response.data;
      showLoops(shows);
    })
    .catch((errors) => {
      console.error("errors: ", errors);
    });
}
getData();
const main = document.querySelector(".show__information");
//beginning of the first section
const mainDiv = document.createElement("div");
mainDiv.classList.add("show__header--tablet");
main.appendChild(mainDiv);
const showLoops = function (array) {
  for (let i = 0; i < array.length; i++) {
    let date = array[i].date;
    let venue = array[i].place;
    let location = array[i].location;
    const mainUl = document.createElement("ul");
    //actual shows row
    mainUl.classList.add("showsList");
    main.appendChild(mainUl);
    //dates for the show
    const dateLi = document.createElement("li");
    dateLi.classList.add("dateHeaders");
    mainUl.appendChild(dateLi);
    dateLi.innerText = "Date";
    const firstShow = document.createElement("li");
    firstShow.classList.add("actualDate");
    mainUl.appendChild(firstShow);
    firstShow.innerText = new Date(date).toLocaleDateString();
    //venue for the show
    const firstVenue = document.createElement("li");
    firstVenue.classList.add("venue");
    mainUl.appendChild(firstVenue);
    firstVenue.innerText = "Venue";
    const actualVenue = document.createElement("li");
    actualVenue.classList.add("actualVenue");
    mainUl.appendChild(actualVenue);
    actualVenue.innerText = venue;
    //location for the show
    const firstLocation = document.createElement("li");
    firstLocation.classList.add("location");
    mainUl.appendChild(firstLocation);
    firstLocation.innerText = "Location";
    const firstActualLocation = document.createElement("li");
    firstActualLocation.classList.add("actualLocation");
    mainUl.appendChild(firstActualLocation);
    firstActualLocation.innerText = location;
    const firstButtonDiv = document.createElement("div");
    firstButtonDiv.classList.add("showsButtonFormatting");
    mainUl.appendChild(firstButtonDiv);
    const ticketsButton = document.createElement("button");
    ticketsButton.classList.add("showsButton");
    firstButtonDiv.appendChild(ticketsButton);
    ticketsButton.innerText = "BUY TICKETS";
    //creating the event listener for selecting the show
    const activeShow = document.querySelectorAll(".showsList");
    activeShow.forEach((element) => {
      element.addEventListener("click", () => {
        // Remove the "selected" class from all elements first
        activeShow.forEach((el) => {
          el.classList.remove("selected");
        });
        // Add the "selected" class to the clicked element
        element.classList.add("selected");
        // Toggle the "selected" class when clicked again
        element.addEventListener("click", () => {
          element.classList.toggle("selected");
        });
      });
    });
  }
};
//function does get glitchy and needs stretching through the media query
//more than once sometimes
function hideDateClasses() {
  const hideDateHeaders = document.querySelectorAll(".dateHeaders");
  for (let i = 1; i < hideDateHeaders.length; i++) {
    hideDateHeaders[i].classList.add("hidden");
  }
}
//array for hiding the venue classes dynamically. Tablet width+
function hideVenueClasses() {
  const hideVenueHeaders = document.querySelectorAll(".venue");
  for (let i = 1; i < hideVenueHeaders.length; i++) {
    hideVenueHeaders[i].classList.add("hidden");
  }
}
//array for hiding the location classes dynamically. Tablet width+
function hideLocationClasses() {
  const hideLocationHeaders = document.querySelectorAll(".location");
  for (let i = 1; i < hideLocationHeaders.length; i++) {
    hideLocationHeaders[i].classList.add("hidden");
  }
}
//media query affecting when the hiding functions activate
const mediaQuery = window.matchMedia("(max-width: 767px)");
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    hideDateClasses();
    hideVenueClasses();
    hideLocationClasses();
  }
});
