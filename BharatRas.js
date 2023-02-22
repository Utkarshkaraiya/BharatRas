
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
