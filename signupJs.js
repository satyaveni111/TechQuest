let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let emailValue = emailEl.value;
let rguktString = "rguktsklm";
nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Please enter your name...";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Please enter your email...";
  } else {
    emailErrMsgEl.textContent = "";
  }
});
function nextDomainspage(){
  window.location.href = "domains.html"
}
myFormEl.addEventListener("submit", function(event) {
    let emailVal = emailEl.value
    if(!emailVal.includes("rguktsklm")){
        event.preventDefault();
        emailErrMsgEl.textContent = "Enter University Mail id..";
    }else{
        emailErrMsgEl.textContent = "";
        event.preventDefault();
        emailErrMsgEl.style.color = "green";
        nextDomainspage()
    }
});

//  function for the button in home page
function homeButton(){
  window.location.href = "signup.html"
}

function vlsiFunction(){
  window.location.href = "vlsiSubDomains.html"
}
function embeddedFunction(){
  window.location.href = "embeddedSubDomains.html"
}
function communicationFunction(){
  window.location.href = "communicationSubDomains.html"
}
function IoTFunction(){
  window.location.href = "IotSubDomains.html"
}

//verilog difficulty page redirection

function verilogSelectDifficulty(){
  var verilogSelectDifficulty = document.getElementById("verilogDropDown").value;
  if(verilogSelectDifficulty){
    window.location.href = verilogSelectDifficulty;
  }
}

//sv difficult page redirection

function svSelectDifficulty(){
  var svSelectDifficulty = document.getElementById("svDropDown").value;
  if(svSelectDifficulty){
    window.location.href = svSelectDifficulty;
  }
}

//DE difficulty page redirection
function deSelectDifficulty(){
  var deSelectDifficulty = document.getElementById("deDropDown").value;
  if(deSelectDifficulty){
    window.location.href = deSelectDifficulty;
  }
}

//c difficulty page redirection

function cSelectDifficulty(){
  var verilogSelectDifficulty = document.getElementById("cDropDown").value;
  if(verilogSelectDifficulty){
    window.location.href = verilogSelectDifficulty;
  }
}

//coa difficult page redirection

function coaSelectDifficulty(){
  var svSelectDifficulty = document.getElementById("coaDropDown").value;
  if(svSelectDifficulty){
    window.location.href = svSelectDifficulty;
  }
}

//mpmc difficulty page redirection
function mpmcSelectDifficulty(){
  var deSelectDifficulty = document.getElementById("mpmcDropDown").value;
  if(deSelectDifficulty){
    window.location.href = deSelectDifficulty;
  }
}

//ac difficulty page redirection

function acSelectDifficulty(){
  var verilogSelectDifficulty = document.getElementById("acDropDown").value;
  if(verilogSelectDifficulty){
    window.location.href = verilogSelectDifficulty;
  }
}

//coa difficult page redirection

function ssSelectDifficulty(){
  var svSelectDifficulty = document.getElementById("ssDropDown").value;
  if(svSelectDifficulty){
    window.location.href = svSelectDifficulty;
  }
}

//mpmc difficulty page redirection
function dcSelectDifficulty(){
  var deSelectDifficulty = document.getElementById("dcDropDown").value;
  if(deSelectDifficulty){
    window.location.href = deSelectDifficulty;
  }
}