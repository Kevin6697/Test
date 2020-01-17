document.getElementById("displayName").innerHTML =
  "Hello, " + localStorage.getItem("name");
if (localStorage.getItem("role") == null) {
  window.location.href = "login.html";
} else if (localStorage.getItem("role") == "user") {
  window.location.href = "subuser.html";
}
var age = [];
var count1to18 = 0;
var count19to50 = 0;
var count50 = 0;
var fetchData = JSON.parse(sessionStorage.getItem("register"));
function getData() {
  for (index = 0; index < fetchData.length; index++) {
    if (fetchData[index].role == "user") {
      var dob = fetchData[index].dob;
      dob = new Date(dob).getFullYear();
      age.push(calculateAge(dob));
    }
  }
  countUsers();
}
function countUsers() {
  for (index = 0; index < age.length; index++) {
    if (age[index] < 18) {
      count1to18++;
    } else if (age[index] >= 18 && age[index] <= 50) {
      count19to50++;
    } else if (age[index] > 50) {
      count50++;
    }
  }
  document.getElementById("lessthan18").innerHTML =
    "User < 18 Years : " + count1to18;
  document.getElementById("between1850").innerHTML =
    "User 18-50 Years : " + count19to50;
  document.getElementById("morethan50").innerHTML =
    "User > 50 Years : " + count50;
}
function calculateAge(el) {
  return new Date().getFullYear() - el;
}
getData();

function birthdayCheck() {
  for (index = 0; index < fetchData.length; index++) {
    if (fetchData[index].role == "user") {
      var dob = fetchData[index].dob;
      userDate = new Date(dob).getMonth();
      systemDate = new Date().getMonth();
      if (userDate == systemDate) {
        userDate = new Date(dob).getDate();
        systemDate = new Date().getDate();
        if (userDate == systemDate) {
          document.getElementById("birthday").innerHTML =
            "Today is " + fetchData[index].name + "'s birthday";
        }
      }
    }
  }
}
birthdayCheck();
