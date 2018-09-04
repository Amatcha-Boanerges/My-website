var myButton = document.getElementById('signupbutton');
var myHeading = document.getElementById('welcomemsg');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
function changeBackground() {
    document.getElementById("orders").style.backgroundColor = "#F3EBA5";
}
function returnBackground() {
    document.getElementById("orders").style.backgroundColor = "#f0f0f0";
}
function changeBackground2() {
    document.getElementById("about").style.backgroundColor = "#F3EBA5";
}
function returnBackground2() {
    document.getElementById("about").style.backgroundColor = "#f0f0f0";
}