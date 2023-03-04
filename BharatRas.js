
function sendEmail() {
Email.send({
Host: "smtp.gmail.com",
Username : "karaiyautkarsh@gmail.com",
Password : "AnjalI@2019",
To : 'bharatras2023@gmail.com',
From : document.getElementById("email").value,
Subject : "Enquiry",
Body : "This is body",
}).then(
message => alert("mail sent successfully")
);
}
// Get the dropdown element
var dropdown = document.getElementById("dropdown");

// Add a change event listener to the dropdown
dropdown.addEventListener("change", function() {
  // Get the selected option value
  var selectedOption = dropdown.value;

  // Change the content based on the selected option
  var content = document.getElementById("content");
  if (selectedOption === "option1") {
    content.innerHTML = "This is option 1.";
  } else if (selectedOption === "option2") {
    content.innerHTML = "This is option 2.";
  } else if (selectedOption === "option3") {
    content.innerHTML = "This is option 3.";
  }
});

