document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.getElementById("myForm");

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    // Create an unordered list to display the form submission
    var submissionList = document.createElement("ul");
    submissionList.innerHTML =
      "<li><strong>Name:</strong> " +
      name +
      "</li>" +
      "<li><strong>Email:</strong> " +
      email +
      "</li>" +
      "<li><strong>Comments:</strong> " +
      comments +
      "</li>";

    // Append the submission list to the document body
    document.body.appendChild(submissionList);
  });
});
