const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
var date = new Date();
var current_date =
  date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
var current_time =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = current_date + " " + current_time;
const commentMain = document.querySelector(".commentArray");

//doesnt refresh page and adds the comment to the array!
let form = document.querySelector(".form-submission");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentMain.innerHTML = "";
  console.log(e.target.fullName.value);
  console.log(e.target.comment.value);
  const newComment = {
    name: e.target.fullName.value,
    timestamp: current_date,
    commentText: e.target.comment.value,
  };
  comments.unshift(newComment);
  console.log(comments);
  createComments(comments);
  e.target.reset();
});

const createComments = function (array) {
  const commentHeader = document.createElement("div");
  commentHeader.classList.add("commentHeader");
  commentMain.appendChild(commentHeader);
  const commentHeaderText = document.createElement("h1");
  commentHeaderText.classList.add("mainHeaderText");
  commentHeaderText.innerText = "Comments";
  commentHeader.appendChild(commentHeaderText);
  for (let i = 0; i < array.length; i++) {
    const comment = array[i];
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("commentContainer");
    commentMain.appendChild(commentContainer);
    // creating the comment image section
    const commentImage = document.createElement("div");
    commentImage.classList.add("commentImage");
    commentContainer.appendChild(commentImage);
    // creating the comment name section
    const commentNameBox = document.createElement("div");
    commentNameBox.classList.add("commentName");
    commentContainer.appendChild(commentNameBox);
    //adding the semantic specific tags to the div
    const commentName = document.createElement("h5");
    commentName.classList.add("commentName");
    commentName.innerText = comment.name;
    commentNameBox.appendChild(commentName);
    // creating the timestamp section
    const commentTimestampBox = document.createElement("div");
    commentTimestampBox.classList.add("commentTimestampBox");
    commentContainer.appendChild(commentTimestampBox);
    //adding the semantic tags to the div
    const commentTimestamp = document.createElement("p");
    commentTimestamp.classList.add("commentTimestamp");
    commentTimestamp.innerText = comment.timestamp;
    commentTimestampBox.appendChild(commentTimestamp);
    // creating the comment text section
    const commentTextBox = document.createElement("div");
    commentTextBox.classList.add("commentTextBox");
    commentContainer.appendChild(commentTextBox);
    //adding the semantic tags to the div
    const commentText = document.createElement("p");
    commentText.classList.add("commentText");
    commentText.innerText = comment.commentText;
    commentTextBox.appendChild(commentText);
  }
};
createComments(comments);
