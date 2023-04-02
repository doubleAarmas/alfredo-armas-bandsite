let comments = [];
//trying to get the information from the server
function getPosts() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=88092a44-09c3-434e-b610-10a7355a53ae"
    )
    .then((response) => {
      comments = response.data;
      //timeline begins
      const timeline = comments.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      const formattedTimeline = timeline.map(function (timelinePost) {
        return {
          ...timelinePost,
          content: timelinePost.body,
        };
      });
      createComments(formattedTimeline);
      //timestamp ends
    })
    .catch((errors) => {
      console.error("errors: ", errors);
    });
}
getPosts();
//posting the newest comment and updating with the initial comments
function displayComment(newComment) {
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
      getPosts();
    })
    .catch((errors) => {
      console.error("errors: ", errors);
    });
}
const commentMain = document.querySelector(".commentArray");
//form creation
//doesnt refresh page and adds the comment to the array while removing the old!
let form = document.querySelector(".form-submission");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  commentMain.innerHTML = "";
  //validators for the form
  if (
    e.target.fullName.value.trim() === "" ||
    e.target.comment.value.trim() === ""
  ) {
    alert("please fill out all of the form fields.");
    e.target.fullName.style.border = "1px solid red";
    e.target.comment.style.border = "1px solid red";
    return;
  }
  const newComment = {
    name: e.target.fullName.value,
    commentText: e.target.comment.value,
  };
  displayComment(newComment);
  comments.unshift(newComment);
  e.target.reset();
});
//creating the actual elements for the comments
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
    let specificDate = new Date(comment.timestamp);
    // firstShow.innerText = new Date(date).toLocaleDateString();
    commentTimestamp.innerText = specificDate.toLocaleDateString();
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
