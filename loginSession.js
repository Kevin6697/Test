if (localStorage.getItem("role") == null) {
  window.location.href = "login.html";
} else if (localStorage.getItem("role") == "user") {
  window.location.href = "subuser.html";
}
var fetchData = JSON.parse(sessionStorage.getItem("logoutSession"));
if (fetchData.length > 0) {
  var th =
    "<th>Name</th><th>Login Date and Time</th><th>Logout Date and Time</th>";
}
document.getElementById("loginSessionDisplay").innerHTML = th;
for (var index = 0; index < fetchData.length; index++) {
  document.getElementById("loginSessionDisplay").border = "1px";
  var row = loginSessionDisplay.insertRow();
  var c1 = row.insertCell();
  var c2 = row.insertCell();
  var c3 = row.insertCell();
  c1.innerHTML = fetchData[index].name;
  c2.innerHTML = fetchData[index].logindateandtime;
  c3.innerHTML = fetchData[index].logoutdateandtime;
}
