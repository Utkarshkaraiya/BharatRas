
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



let andra= `  </div><h2>Andhra Pradesh</h2>
<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/AP1-(Pingali Venkayya).jpg" style="width:100%">
    <h3>Pingali Venkayya</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AP2-(Kandukuri Veeresalingam Pantulu).jpg" style="width:100%">
    <h3>Kandukuri Veeresalingam Pantulu)</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AP2-(Kaneganti Hanumanthu).jpg" style="width:100%">
    <h3>Kaneganti Hanumanthu</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AP4-(Potti Sriramulu).jpg" style="width:100%">
    <h3>Potti Sriramulu</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
</div>`;
let as=`<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <h2>Assam</h2>
  <div class="w3-quarter"><img src="/img/FF/AS1-(Kushal Konwar).jpg" style="width:100%">
    <h3>Kushal Konwar</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AS2-(Kanaklata Boruah).jpg" style="width:100%">
    <h3>Kanaklata Boruah</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AS3-(Bhugeswari Phukanani).jpg" style="width:100%">
    <h3>Bhugeswari Phukanani</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/AS4-(Chandraprabha Saikiani).jpg" style="width:100%">
    <h3>Chandraprabha Saikiani</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
</div>`;
let bhr=` <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <h1 class="heading">BIHAR</h1>
  <div class="w3-quarter"><img src="/img/FF/BR1-(Shiv Dayal).jpg" style="width:100%">
    <h3>Shiv Dayal</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/BR2-(Anugrah Narayan Sinha).jpg" style="width:100%">
    <h3>Kanaklata Boruah</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/BR3-(Malati Devi Choudhury).jpg" style="width:100%">
    <h3>Malati Devi Choudhury</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/BR4-(Maghfoor Ahmad Ajazi).jpg" style="width:100%">
    <h3>Maghfoor Ahmad Ajazi</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
</div>`;
let cg=`
<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/CG1-(MaheshDutt Shukl).jpg" style="width:100%">
    <h3>MaheshDutt Shukl</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/CG2-(Mishri Lal Rathore).jpg" style="width:100%">
    <h3>Mishri Lal Rathore</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/CG3-(Saalik Ram Pandey).jpg" style="width:100%">
    <h3>Saalik Ram Pandey</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div></div>`;
let goa=` <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/GA1-(Mohan Ranade).jpg" style="width:100%">
    <h3>Mohan Ranade</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/GA2-(Smt Sahodra Rai Bai).jpg" style="width:100%">
    <h3>Smt Sahodra Rai Bai</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/GA3-(Sharada Padmakar Savaikkar ).jpg" style="width:100%">
    <h3>Sharada Padmakar Savaikkar</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/GA4-(C.P.Da Costa).jpg" style="width:100%">
    <h3>C.P.Da Costa</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
</div>`;

let gj=`<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/GJ1-(Tulsidas Dhanjidas Jobanputra).jpg" style="width:100%">
    <h3>Mohan Ranade</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/GJ2-(Vijayaben Manubhai Pancholi).jpg" style="width:100%">
    <h3>Smt Sahodra Rai Bai</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/GJ3-(Heeraben Maanshankar Bhatt).jpg" style="width:100%">
    <h3>Sharada Padmakar Savaikkar</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div></div>`;
let hr=`  <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/HR1-(Bhura Singh).jpg " style="width:100%">
    <h3>Bhura Singh</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HR2-(Ram Singh).jpg" style="width:100%">
    <h3>Ram Singh</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HR3-(Lala Ratanlal).jpg" style="width:100%">
    <h3>Lala Ratanlal</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HR4-(Tilku Ram).jpg" style="width:100%">
    <h3>Tilku Ram</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    <div class="w3-quarter"><img src="/img/FF/HR5-(Bhagwan Singh).jpg" style="width:100%">
      <h3>Bhagwan Singh</h3>
      <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
</div>`;
let hp=` <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/HP1-(Major Somnath Sharma).jpg " style="width:100%">
    <h3>Major Somnath Sharma</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HP2-(Babu KanshiRam).jpg" style="width:100%">
    <h3>Babu KanshiRam</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HP3-(Khushi Ram).jpg" style="width:100%">
    <h3>Khushi Ram</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/HP4-(Sansar Chand).jpg" style="width:100%">
    <h3>Sansar Chand</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>

    </div>
</div>`;
let jk=`<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/JK1-(Lala Hans Raj).jpg" style="width:100%">
    <h3>Lala Hans Raj</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JK2-(Pandit Hridya Nath Kunzru).jpg" style="width:100%">
    <h3>Pandit Hridya Nath Kunzru</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JK3-(Ghulam Raool Nazki).jpg" style="width:100%">
    <h3>Ghulam Raool Nazki</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JK4-(Somnath Khosa).jpg" style="width:100%">
    <h3>Somnath Khosa</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    </div>
    <div class="w3-quarter"><img src="/img/FF/JK5-(Sardar Budh Singh).jpg" style="width:100%">
      <h3>Sardar Budh Singh</h3>
      <p>Unsung Heroes of India’s freedom struggle</p>
      </div>
</div>`;
 let jh=` <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/JH1-(Somra Tana Bhagat).jpg" style="width:100%">
    <h3>Somra Tana Bhagat</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JH2-(Paru Tana Bhagat).jpg" style="width:100%">
    <h3>Paru Tana Bhagat</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JH3-(Chamra Tana Bhagat).jpg" style="width:100%">
    <h3>Chamra Tana Bhagat</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/JH4-(Vishwanath Pandey).jpg" style="width:100%">
    <h3>Vishwanath Pandey</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    </div>
</div>`;
let ka=`<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/KA1-(N M Basavaraju).jpg" style="width:100%">
    <h3>N M Basavaraju</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KA2-(Kanumappa).jpg" style="width:100%">
    <h3>Kanumappa</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KA3-(Giriyappa).jpg" style="width:100%">
    <h3>Giriyappa</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KA4-(Umabai Kundapur).jpg" style="width:100%">
    <h3>Umabai Kundapur</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    </div>
</div>`;
let kl=`
<div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/KL1-(R Shekhar).jpg" style="width:100%">
    <h3>R Shekhar</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KL2-(A P Mariamma).jpg" style="width:100%">
    <h3>A P Mariamma</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KL3-(P K Nanu).jpg" style="width:100%">
    <h3>P K Nanu</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/KL4-(Korath Velayudha Menon).jpg" style="width:100%">
    <h3>Korath Velayudha Menon</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    </div>
    <div class="w3-quarter"><img src="/img/FF/KL5-(I K Kumaran).jpg" style="width:100%">
      <h3>I K Kumaran</h3>
      <p>Unsung Heroes of India’s freedom struggle</p>
      </div>
</div>`;
 let mp=` <div class="w3-row-padding w3-padding-32 w3-center" id="food">
  <div class="w3-quarter"><img src="/img/FF/MP1-(Biharilal Patel).jpg" style="width:100%">
    <h3>Biharilal Patel</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/MP2-(Hitlata Devi).jpg" style="width:100%">
    <h3>Hitlata Devi</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/MP3-(Swaimal Jain).jpg" style="width:100%">
    <h3>Swaimal Jain</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
  </div>
  <div class="w3-quarter"><img src="/img/FF/MP4-(Chedilal Usrete).jpg" style="width:100%">
    <h3>Chedilal Usrete</h3>
    <p>Unsung Heroes of India’s freedom struggle</p>
    </div>
    
</div>

`;
// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;


// let ap=``;
// let ap=``;

// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;
// let ap=``;

  // Get the <select> element and the state-content <div> element
  const stateSelect = document.getElementById("state-select");
  const stateContent = document.getElementById("state-content");

  // Add an event listener to the <select> element to listen for changes
  stateSelect.addEventListener("change", () => {
    // Get the value of the selected <option> element
    const selectedState = stateSelect.value;

    // Use a switch statement to change the content of the <div> element
    switch (selectedState) {
      case "andhra-pradesh":
        stateContent.innerHTML = str;  break;
      case "arunachal-pradesh":
        stateContent.innerHTML = "<h2>Arunachal-Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "assam":
        stateContent.innerHTML = as; break;
      case "bihar": stateContent.innerHTML = bhr; break;
      case "chhattisgarh":
        stateContent.innerHTML = cg;   break;
      case "goa":
        stateContent.innerHTML = goa; break;
      case "gujarat":
        stateContent.innerHTML = gj; break;
      case "haryana":
        stateContent.innerHTML = hr; break;
      case "himachal-pradesh":
        stateContent.innerHTML = hp; break;
      case "jammu-kashmir":
        stateContent.innerHTML = jk;break;
      case "jharkhand":
        stateContent.innerHTML = jh; break;
      case "karnataka":
        stateContent.innerHTML = ka; break;
      case "kerala":
        stateContent.innerHTML = kl; break;
      case "madhya-pradesh":
        stateContent.innerHTML = mp;   break;
      case "maharashtra":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "manipur":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "meghalaya":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "mizoram":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "nagaland":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "odisha":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "punjab":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "rajasthan":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;

      case "tamil-nadu":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "telangana":
        stateContent.innerHTML = "<h2>Andhra Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "tripura":
        stateContent.innerHTML = "<h2>Tripura</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "uttar-pradesh":
        stateContent.innerHTML = "<h2>Uttar-Pradesh</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "uttarakhand":
        stateContent.innerHTML = "<h2>Uttarakhand</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;
      case "west-bengal":
        stateContent.innerHTML = "<h2>West-Bengal</h2><div class=\"w3-row-padding w3-padding-32 w3-center\" id=\"food\"><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\"  style=\"width:100%\"><h3>The Perfect Sandwich, A Real NYC Classic</h3><p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p></div><div class=\"w3-quarter\"><img src=\"/img/footerimg/andra1.jpeg\" style=\"width:100%\"><p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p></div>";
        break;


    }
  });


  // Automatic Slideshow - change image every 4 seconds
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  var modal = document.getElementById('ticketModal');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

