let comments = [];

//trying to get the information
function getPosts() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=88092a44-09c3-434e-b610-10a7355a53ae"
    )
    .then((response) => {
      console.log("response: ", response);
      comments = response.data;
      createComments(comments);
      console.log(comments);
    });
  // catch (errors) {
  //   console.error(errors);
  // }
}
//posting the newest comment and updating with the initial comments
getPosts();
function addPost(newComment) {
  console.log(newComment);
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=88092a44-09c3-434e-b610-10a7355a53ae",
      {
        name: newComment.name,
        comment: newComment.commentText,
      }
    )
    .then((response) => {
      comments = response.data;
      createComments(comments);
      console.log(response);
      getPosts();
    });
}

//time relative
function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
}
//date conversion before axios
var date = new Date();
var current_date =
  date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
var current_time =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = current_date + " " + current_time;
const commentMain = document.querySelector(".commentArray");
//form creation
//doesnt refresh page and adds the comment to the array while removing the old!
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
  console.log(comments);
  createComments(comments);
  addPost(newComment);
  comments.unshift(newComment);
  e.target.reset();
});
const createComments = function (array) {
  for (let i = 0; i < array.length; i++) {
    const comment = array[i];
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("commentContainer");
    commentMain.prepend(commentContainer);
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
    commentText.innerText = comment.comment;
    commentTextBox.appendChild(commentText);
  }
};
