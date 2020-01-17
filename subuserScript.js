if (localStorage.getItem("role") == null) {
    window.location.href = "login.html";
  } else if (localStorage.getItem("role") == "admin") {
    window.location.href = "dashboard.html";
  }
  console.log(localStorage.getItem("role"));
document.getElementById("displayName").innerHTML="Hello, "+localStorage.getItem("name");
var fetchData=JSON.parse(sessionStorage.getItem("register"));
function birthdayCheck(){
    for(index=0;index<fetchData.length;index++){
        if(fetchData[index].role=="user"){
            var dob=fetchData[index].dob;
            userDate=new Date(dob).getMonth();
            systemDate=new Date().getMonth();
            if(userDate == systemDate){
                userDate=new Date(dob).getDate();
                systemDate=new Date().getDate();
                if(userDate == systemDate){
                    document.getElementById("birthday").innerHTML="Happy birthday";
                }
            }
        }
    }
}
birthdayCheck();