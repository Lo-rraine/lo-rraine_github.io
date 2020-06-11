var erID = new Array();
erID[0] = "errName";
erID[1] = "errSur";
erID[2] = "errEmail";
erID[3] = "errPass";
erID[4] = "errconfPass";

function validate() {
  var inputs = new Array();
  inputs[0] = document.getElementById("fName").value;
  inputs[1] = document.getElementById("surname").value;
  inputs[2] = document.getElementById("email").value;
  inputs[3] = document.getElementById("pass").value;
  inputs[4] = document.getElementById("confPass").value;

  var errors = new Array();
  errors[0] = "<span style='color:red'>Please enter your First name!</span>";
  errors[1] = "<span style='color:red'>Please enter your Surname!</span>";
  errors[2] = "<span style='color:red'>Please enter your email!</span>";
  errors[3] = "<span style='color:red'>Please enter your password!</span>";
  errors[4] = "<span style='color:red'>Please confirm your password!</span>";

  for (i in inputs) {
    var errMessage = errors[i];
    var div = erID[i];
    var first = document.getElementById("pass").value;
    var second = document.getElementById("confPass").value;


    if (inputs[i] == "") {
      document.getElementById(div).innerHTML = errMessage;
    } 
    else if (i == 2) {
      var atpos = inputs[i].indexOf("@");
      var dotpos = inputs[i].lastIndexOf(".");

      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length) {
        document.getElementById("errEmail").innerHTML =
          "<span style='color: red'>Enter a valid email address!</span>";
      } else {
        document.getElementById(div).innerHTML = "";
      }
    }
    else if(i == 3){
        if (inputs[i] == "") {
            document.getElementById(div).innerHTML = errMessage;
          }
        else if (first.length < 8 || first.search(/[A-Z]/) < 1 || first.search(/[0-9]/) < 1 || first.search(/[*\d]/) < 1) {
        document.getElementById("errPass").innerHTML = 
        "<span style='color: red'>the password must have at least 8 characters <br> an uppercase letter and a special character!</span>";
      } else {
        document.getElementById(div).innerHTML = "";
      }
    }
    else if (i == 4) {
        if (second != first)
          document.getElementById("errconfPass").innerHTML =
            "<span style='color: red'>Your passwords don't match!</span>";
        else document.getElementById(div).innerHTML = "";
      }
     else alert(inputs);
    }
}